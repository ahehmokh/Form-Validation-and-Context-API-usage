import { createContext } from "react";

export const DataNeeded = createContext({
    name:"",
    age:"",
    phoneNumber:"",
    emailAdress:"",
    isEmployee:"",
    currentSalary:"",
    expectedSalary:""
})