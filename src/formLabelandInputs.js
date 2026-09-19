import inputContext from "./myContext";
import { useContext } from "react";

const FormInputsAndLabels = () => {

    const formContext = useContext(inputContext)
    console.log(formContext);
    
    return ( 
        <>
            <label>{formContext.name}</label>
            
        </>
     );
}
 
export default FormInputsAndLabels;