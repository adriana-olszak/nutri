import { makeAutoObservable } from 'mobx';
import { RootStore } from '@nutri/store/root';
import { Transport } from '@nutri/store/main/transport';
import {GroupStore, makeAutoSyncableGroup, Store} from '@nutri/store/main/group';
import { makeAutoSyncable } from '@nutri/store/main/store';
import { Survey } from './types';
import { SurveyStore, getDefaultValue as getDefaultSurvey } from './Survey.store';
import {mock} from "@nutri/store/surveys/mock";
import {Channel} from "phoenix";
import {GroupOperation} from "@nutri/store/main/types";

export class SurveysStore implements GroupStore<Survey> {
  value: Map<string, Store<Survey>> = new Map();
  isLoading = false;
  channel?: Channel;
  version: number = 0;
  isBootstrapped = false;
  error: string | null = null;
  sync = makeAutoSyncableGroup.sync;
  subscribe = makeAutoSyncableGroup.subscribe;
  history: GroupOperation[] = [];
  update = makeAutoSyncable.update<Survey[]>();
  load = makeAutoSyncableGroup.load<Survey>();

  constructor(public root: RootStore, public transport: Transport) {
    makeAutoSyncableGroup(this, {
      channelName: 'Surveys',
      ItemStore: SurveyStore,
      getItemId: (item) => item.id,
    });
    makeAutoObservable(this);
  }

  async invalidate() {
    // Implementation for invalidating the surveys list
  }

  toArray() {
    return Array.from(this.value)?.flatMap(
      ([, surveyStore]) => surveyStore,
    );
  }


  async bootstrap() {

    try {
      this.isLoading = true;
      this.load(mock);
    } catch (e) {
      this.error = (e as Error)?.message;
    } finally {
      this.isLoading = false;
    }
  }

  createSurvey() {
    const newSurvey = getDefaultSurvey();
    newSurvey.id = `survey_${Date.now()}`;

    this.update((value) => {
      value.push(newSurvey);
      return value;
    });

    const surveyStore = new SurveyStore(this.root, this.transport);
    this.value.set(newSurvey.id, surveyStore);

  }

  archiveSurvey(surveyId: string) {
    this.update((value) => {
      const surveyIndex = value.findIndex(survey => survey.id === surveyId);
      if (surveyIndex !== -1) {
        value[surveyIndex].status = 'closed';
        // Optionally, you can move archived surveys to a separate list or flag them as archived
      }
      return value;
    });
  }

  deleteSurvey(surveyId: string) {
    this.update((value) => {
      return value.filter(survey => survey.id !== surveyId);
    });
  }


}
