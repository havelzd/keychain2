export abstract class Criteria {
  private _key: string;
  constructor(key: string) {
    this._key = key;
  }

  get key() {
    return this._key;
  }
}

export class CriteriaEquals extends Criteria {
  constructor(key: string, value: unknown) {
    super(key);
  }
}
