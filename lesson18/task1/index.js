export const event = {
  guests: [
    { name: 'John', age: 18, email: 'example@server.com' },
    { name: 'Ann', age: 17, email: 'example@server.com' },
    { name: 'Jack', age: 36, email: 'example@server.com' },
    { name: 'Bob', age: 13, email: 'example@server.com' },
  ],
  message: 'Welcome to party!',
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ message: `Dear ${name}! ${this.message}`, email }));
  },
};

// for example
console.log(event.getInvitations());
