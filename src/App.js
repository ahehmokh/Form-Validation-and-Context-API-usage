import { useState } from "react";
import "./App.css";
import "./myApp.css";
import { DataNeeded } from "./Context";
import TheForm from "./Form";
import Confirm from "./Confirm";

function App() {

   const initialForm = {
    name: "",
    Age: "",
    PhoneNumber: "",
    EmailAddress: "",
    Employee: false,
    CurrentSalary: "",
    ExpectedSalary: "",
  };

  const [form, setForm] = useState(initialForm);

  const resetForm = () => {
     setForm(initialForm);
  }

const[isVisible , setIsVisible] = useState(false)
const[formDisplay , setFormDisplay] = useState(true)


  return (
    <DataNeeded.Provider value={{
      form , setForm , isVisible , setIsVisible , formDisplay , setFormDisplay , resetForm}}>
      <TheForm/>
      <Confirm/>
    </DataNeeded.Provider>
  );
}

export default App;