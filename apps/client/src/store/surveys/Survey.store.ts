import { makeAutoObservable, runInAction } from 'mobx';
import { Channel } from 'phoenix';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import { Operation, Store } from '@nutri/store/main/group';
import { makeAutoSyncable } from '@nutri/store/main/store';
import { Survey, Section, Question } from './types';
import { Error } from "@apollo/server/src/plugin/schemaReporting/generated/operations";
import { v4 as uuidv4 } from 'uuid';
import { toJS } from 'mobx';
import { getDiff } from 'recursive-diff';

export class SurveyStore implements Store<Survey> {
  value: Survey = getDefaultValue();
  version = 0;
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  history: Operation[] = [];

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoObservable(this);
    makeAutoSyncable(this, {
      channelName: 'survey',
      getId: (data: Survey) => data.id,
    });
  }

  get id() {
    return this.value.id;
  }

  set id(id: string) {
    this.value.id = id;
  }

  async invalidate() {
    // Implementation for invalidating the survey
    // You might want to refetch the survey data from the server here
  }

  async save() {
    try {
      this.isLoading = true;
      // Implement save logic here
      // await this.transport.graphqlClient.request(mutation, this.value);
    } catch (e) {
      this.error = (e as Error)?.message;
    } finally {
      this.isLoading = false;
    }
  }

  update(updater: (prev: Survey) => Survey, options: { mutate?: boolean; syncMutate?: boolean } = {}) {
    const lhs = toJS(this.value);
    const next = updater(toJS(this.value));
    const diff = getDiff(lhs, next);

    const operation: Operation = {
      id: this.version,
      diff,
      ref: this.transport.refId,
    };

    runInAction(() => {
      this.history.push(operation);
      this.value = next;
    });

    if (options.syncMutate) {
      this.channel?.push('sync_packet', { payload: { operation } })
        .receive('ok', ({ version }: { version: number }) => {
          this.version = version;
        });
    }

    // If mutate is true, you might want to call this.save() here
    if (options.mutate) {
      this.save();
    }
  }

  addSection(position?: number) {
    this.update((draft) => {
      const newSection: Section = {
        id: `s${Date.now()}`,
        type: 'section',
        title: '',
        description: '',
        questions: [],
        hasDescription: false,
      };

      if (position === undefined) {
        draft.structure.push(newSection);
      } else {
        draft.structure.splice(position, 0, newSection);
      }

      return draft;
    }, { mutate: true, syncMutate: true });
  }

  addQuestion(sectionId: string) {
    this.update((draft) => {
      const section = draft.structure.find(s => s.id === sectionId);
      if (section) {
        const newQuestion: Question = {
          id: `q${Date.now()}`,
          type: 'input',
          question: '',
          description: '',
          options: [],
        };
        section.questions.push(newQuestion);
      }
      return draft;
    }, { mutate: true, syncMutate: true });
  }
}

export const getDefaultValue = (): Survey => ({
  id: uuidv4(),
  title: 'New questionnaire',
  description: '',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  structure: [],
  status: 'draft',
  author: '',
  responseCount: 0,
  usedCount: 0,
  tags: []
});
