import localforage from 'localforage';
import { makeAutoObservable, when } from 'mobx';
import { configurePersistable } from 'mobx-persist-store';

import { IngredientsStore } from './ingredients/Ingredients.store';
import { Transport } from './main/transport';
import { MatchesStore } from './manual-reviews/Matches.store';
import { RecipesStore } from './recipes/Recipes.store';
import { SurveysStore } from './surveys/Surveys.store';
import { TableViewsStore } from './tableViews/TableViews.store';
import { UIStore } from './ui/UI.store';

localforage.config({
  driver: localforage.INDEXEDDB,
  name: 'diet_draftDB',
  version: 1.0,
  storeName: 'diet_draft',
});

configurePersistable({
  storage: localforage,
  expireIn: 1000 * 60 * 60 * 24, // 1 day
  version: 1.0,
  stringify: false,
});

export class RootStore {
  isAuthenticated = false;
  isBootstrapping = false;
  isBootstrapped = false;

  ui: UIStore;
  tableViews: TableViewsStore;
  recipes: RecipesStore;
  ingredients: IngredientsStore;
  surveys: SurveysStore;
  matches: MatchesStore;

  constructor(private transport: Transport, isAuthenticated: boolean) {
    makeAutoObservable(this);

    this.ui = new UIStore();
    this.isAuthenticated = isAuthenticated;
    this.tableViews = new TableViewsStore();
    this.recipes = new RecipesStore(this, transport);
    this.ingredients = new IngredientsStore(this, transport);
    this.surveys = new SurveysStore(this, transport);
    this.matches = new MatchesStore(this, transport);

    when(
      () => this.isAuthenticated,
      async () => {
        await this.bootstrap();
      },
    );
  }

  async bootstrap() {
    if (this.isBootstrapping || this.isBootstrapped) return;

    this.isBootstrapping = true;
    try {
      await Promise.all([
        this.tableViews.load(),
        this.recipes.bootstrap(),
        this.ingredients.bootstrap(),
        this.surveys.bootstrap(),
        this.matches.bootstrap(),
      ]);
      this.isBootstrapped = true;
    } catch (error) {
      console.error('Failed to bootstrap stores', error);
    } finally {
      this.isBootstrapping = false;
    }
  }
}
