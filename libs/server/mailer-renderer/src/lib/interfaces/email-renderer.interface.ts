export interface IEmailRenderer {
  render(template: any, data: any): Promise<string>;
}
