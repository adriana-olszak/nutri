import { Injectable } from '@nestjs/common';
import { render } from '@react-email/render';
import { ComponentType, createElement } from 'react';
import { IEmailRenderer } from './interfaces/email-renderer.interface';

@Injectable()
export class RendererService implements IEmailRenderer {
  async render(template: ComponentType<any>, data: any): Promise<string> {
    return render(createElement(template, data));
  }
}
