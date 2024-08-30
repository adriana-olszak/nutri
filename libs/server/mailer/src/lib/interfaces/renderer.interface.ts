export interface IRenderer {
  render(template: any, data: any): Promise<string>;
}
