import {useState, useEffect} from "react";

export default function EmailInput(props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState([]);


    useEffect(e => {
      if(props.isSubmit){
        checkEmailValid();
      }
    }, [props.isSubmit]);
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
    }
  
    function checkEmailValid() {
      let allErrors = [];
      if(email.length === 0 || email != props.email){
        allErrors = [...allErrors, "Os dois e-mails devem ser iguais."];
      }
      if(email.length === 0){
        allErrors = [...allErrors, "Esse campo é obrigatório"];
      }
      
      setEmailError(allErrors);
      
    }
  
    function handleEmailBlur(){
      checkEmailValid();
    }
    return (
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                {props.caption}
            </label> 
        <div>
            <input type="text" onBlur={handleEmailBlur} onChange={handleEmailChange} autocomplete="username" name="email" className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${emailError.length > 0 && 'border-red-500'} w-full`} /> 
            {emailError && <div className="text-red-500 text-xs mt-1"><div></div></div>}
        </div> 
        {emailError && emailError.map(e => <div><div class="text-xs text-red-500">{e}</div></div>)}
        </div> 
    )
}