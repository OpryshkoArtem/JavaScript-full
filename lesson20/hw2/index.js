// eslint-disable-next-line max-classes-per-file
class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId; // (Math.random().toString());
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el.name);
  }

  getUserIds() {
    return this._users.map(el => el.id);
  }

  // eslint-disable-next-line consistent-return
  getUserNameById(id) {
    // return this.users.filter(el => id.toString() === el.id).map(el => el.name);  ==>> виводить елемент
    const findedUser = this.users.find(elem => elem.id === id);
    if (findedUser) return findedUser.name;
  }
}

// examples
// const user = new User('1', 'Tom', 'session-id');

// получить свойства можем
// console.log(user.id); // ===> '1'
// console.log(user.name); // ===> 'Tom'
// console.log(user.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
// console.log(user.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует

const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('3', 'Ann', 'session-id');
const user3 = new User('2', 'Bob', 'session-id');
const user4 = new User('5', 'Jerry', 'session-id');

const usersArr = new UserRepository([user1, user2, user3, user4]);

console.log(usersArr.getUserNames());
console.log(usersArr.getUserIds());
console.log(usersArr.getUserNameById('5'));
