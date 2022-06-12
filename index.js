const createPerson = (name, age) => {
    return {
      name,
      age,
      friends: [],
    };
  }
  
  const addPersonAsFriend = (personA, personB) => {
    personA.friends.push(personB);
    return personA;
  }
  
  module.exports = {
    createPerson,
    addPersonAsFriend,
  };