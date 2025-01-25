import { DynamicModule, Module } from '@nestjs/common';
import { ClsModule } from 'nestjs-cls';
import { CLS_KEYS } from './context-store';

@Module({})
export class ContextModule {
  static register(): DynamicModule {
    return {
      module: ContextModule,
      global: true,
      imports: [
        ClsModule.forRoot({
          middleware: {
            // automatically mount the
            // ClsMiddleware for all routes
            mount: true,
            // and use the setup method to
            // provide default store values.
            setup: (cls, req) => {
              cls.set(CLS_KEYS.USER_ID, req.headers['x-user-id']);
              cls.set(CLS_KEYS.MODE, 'http-request');
            },
          },
        }),
      ],
      exports: [ClsModule],
    };
  }
}
