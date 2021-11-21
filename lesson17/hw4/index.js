export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(value) {
    const nameData = value.split(' ');
    this.firstName = nameData[0];
    this.lastName = nameData[1];
  },
};

console.log(user.getFullName());
console.log(user.setFullName('Anna Maria'));
console.log(user.getFullName());
