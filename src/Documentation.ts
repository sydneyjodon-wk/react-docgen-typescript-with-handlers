type DocumentationStorage = { [x: string]: any }; // tslint:disable-line

export default class Documentation {
  private innerMap: DocumentationStorage = {};

  constructor(initialState = {}) {
    this.innerMap = {
      ...initialState
    };
  }

  set(key: string, value: any) {
    this.innerMap[key] = value;
  }

  get(key: string, defValue?: any) {
    return this.innerMap[key] || defValue;
  }

  toObject() {
    return this.innerMap;
  }
}
