const userDatabase = [];

const createUser = (input) => {
    try {
        if(!input.username || !input.email){
            throw new Error("Username and email are required")
        }
        const existingUserWithSameUsername = userDatabase.find((user) => user.username === input.username);
        if(existingUserWithSameUsername){
            throw new Error("Username is already taken");
        }
        const existingUserWithSameEmail = userDatabase.find((user) => user.email === input.email);
        if( existingUserWithSameEmail){

            throw new Error("Email is already taken");
        }
        const newUser = {
            ...input,
            id: String(userDatabase.length + 1)
        }
        userDatabase.push(newUser);
        return newUser;
    } catch (error) {
        console.log(error);
    }
}

const getUserById = (userId) => {
    try {
      const user = userDatabase.find((user) => user.id === userId);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    createUser,
    getUserById,
}