import { makeAutoObservable, runInAction } from 'mobx';
import { Channel } from 'phoenix';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import { makeAutoSyncable, Store } from '@nutri/store/main/store';
import { Survey, Section, Question } from './types';
import { Error } from "@apollo/server/src/plugin/schemaReporting/generated/operations";
import { v4 as uuidv4 } from 'uuid';
import { Operation } from '@nutri/store/main/types';

export class SurveyStore implements Store<Survey> {
  value: Survey = getDefaultValue();
  version = 0;
  history: Operation[] = [];
  isLoading = false;
  error: string | null = null;
  channel: Channel | undefined;
  subscribe = makeAutoSyncable.subscribe;
  load = makeAutoSyncable.load<Survey>();
  update = makeAutoSyncable.update<Survey>();

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
