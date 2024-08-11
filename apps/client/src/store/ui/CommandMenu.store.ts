import { runInAction, makeAutoObservable } from 'mobx';

export type CommandMenuType =
  | 'NavigationGroup'
  | 'RecipesGroup'

type Context = {
  ids: Array<string>;
  property?: string | null;
  meta?: Record<string, any>;
  entity:
    | 'Recipe'
    | null;
};

const makeDefaultContext = () => ({
  entity: null,
  property: null,
  ids: [],
});

export class CommandMenuStore {
  isOpen = false;
  type: CommandMenuType = 'NavigationGroup';
  context: Context = makeDefaultContext();

  constructor() {
    makeAutoObservable(this);
  }

  setOpen(
    open: boolean,
    options: { context: string | null; type: CommandMenuType | null } = {
      type: null,
      context: null,
    },
  ) {
    runInAction(() => {
      this.isOpen = open;
      this.type = options?.type ?? this.type;
    });
  }

  setType(type: CommandMenuType) {
    runInAction(() => {
      this.type = type;
    });
  }

  toggle(type?: CommandMenuType, context?: Context) {
    runInAction(() => {
      this.isOpen = !this.isOpen;
      this.type = type ?? 'NavigationGroup';

      if (context) {
        Object.assign(this.context, context);
      }
    });
  }

  setContext(context: Context) {
    runInAction(() => {
      Object.assign(this.context, context);
    });
  }

  clearContextIds() {
    runInAction(() => {
      if (this.context) this.context.ids = [];
    });
  }

  reset() {
    runInAction(() => {
      this.isOpen = false;
      this.type = 'NavigationGroup';
      this.clearContext();
    });
  }

  clearContext() {
    runInAction(() => {
      Object.assign(this.context, makeDefaultContext());
    });
  }
}
