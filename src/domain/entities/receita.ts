export class Receita {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly description: string,
    public readonly value: number,
    public readonly date: Date,
    public readonly deleted: boolean,
  ) {}
}
