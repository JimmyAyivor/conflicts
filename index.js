function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersontoFriend(person, other) {
    person.friends.push(other);
    return person;
  }
  
  module.exports = {
    createPerson,
    addPersontoFriend,
  };