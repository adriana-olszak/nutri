export function ClientFieldsTemplate(name: string) {
  return `fragment ${name}Fields on ${name} {
    id
    # @todo Add fields
  }`;
}
