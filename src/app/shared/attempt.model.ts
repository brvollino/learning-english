export class Attempt {

  constructor(
    public isFull: boolean,
    private urlFullLife: string = 'assets/full_life.png',
    private urlEmptyLife: string = 'assets/empty_life.png'
  ) {}

  get url() {
    if (this.isFull) {
      return this.urlFullLife;
    }
    return this.urlEmptyLife;
  }
}
