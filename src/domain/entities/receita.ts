export class Receita {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly value: number,
    public readonly date: Date,
    public readonly deleted: boolean,
    public readonly id?: string,
  ) {}
}
