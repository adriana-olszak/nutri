import { Module } from '@nestjs/common';
import { NestAuthModule } from '@nutri/server-auth';
import { DbClientModule } from '@nutri/server-db-client';
import { QUESTIONNAIRE_RESOLVERS } from './resolvers';
import { QUESTIONNAIRE_SERVICES } from './services';
import { QUESTIONNAIRE_DATA_LOADERS } from './data-loaders';

@Module({
  imports: [
    DbClientModule,
    NestAuthModule
  ],
  providers: [...QUESTIONNAIRE_DATA_LOADERS, ...QUESTIONNAIRE_SERVICES, ...QUESTIONNAIRE_RESOLVERS]
})
export class QuestionnaireModule {
}
