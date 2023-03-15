import {useState, useEffect} from "react";
import RepeatEmailInput from "./RepeatEmailInput";

export default function EmailInput(props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    useEffect(e => {
        if(props.isSubmit){
            checkEmailValid();
        }
    }, [props.isSubmit]);
  
    function handleEmailChange(e) {
      setEmail(e.target.value);
      checkEmailValid(e.target.value);
    }
  
    function checkEmailValid() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(email.length === 0){
        setEmailError("Esse campo é obrigatório");
      }else if(!emailRegex.test(email)){
        setEmailError("O e-mail deve ser válido");
      }else{
        setEmailError("");
      }
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
            <input type="text" onBlur={handleEmailBlur} onChange={handleEmailChange} name="email" className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${emailError && 'border-red-500'} w-full`} /> 
            {emailError && <div className="text-red-500 text-xs mt-1"><div></div></div>}
        </div> 
        {emailError && <div><div className="text-xs text-red-500">{emailError}</div></div>}
        {props.showRepeat && 
            <div className="mt-6">
                <RepeatEmailInput  isSubmit={props.isSubmit} email={email} caption="Repetir e-mail" />
            </div>
        }
        </div> 
    )
}