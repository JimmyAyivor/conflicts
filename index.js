function createPerson(name, age) {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  function addPersonAsFriend(personA, personB) {
    personA.friends.push(personB);
    return personA;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };