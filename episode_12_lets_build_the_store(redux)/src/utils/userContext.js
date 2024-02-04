//how do we crate a global context

import { createContext } from "react";

//react gives a utility function createContext 
const UserContext =  createContext({
   loggedUser:"default user",
});

export default UserContext;