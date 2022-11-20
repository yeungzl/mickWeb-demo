export class Base {
  name = 'Base';
  editName(name: string) {
    this.name = name;
  }
  getName() { return this.name; }
}