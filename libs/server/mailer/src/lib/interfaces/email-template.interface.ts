import { ComponentType } from 'react';

export interface IEmailTemplate {
  name: string;
  component: ComponentType<any>;
}
