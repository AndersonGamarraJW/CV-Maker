class PersonInfo {
  constructor(data) {
    this._data = JSON.parse(JSON.stringify(data));
  }
  get name() {
    return this._data.nameInfo.name;
  }
  setName(name) {
    this._data.nameInfo.name = name;
    return new PersonInfo(this._data);
  }
  get lastName() {
    return this._data.nameInfo.lastName;
  }
  setLastName(lastName) {
    this._data.nameInfo.lastName = lastName;
    return new PersonInfo(this._data);
  }
}
export default PersonInfo;
