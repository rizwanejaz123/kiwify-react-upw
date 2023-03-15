import {useState, useEffect} from "react";
export default function PasswordInput(props) {
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    useEffect(e => {
        if(props.isSubmit){
            handlePasswordlBlur();
        }
    }, [props.isSubmit]);
  
    function handlePasswordChange(e) {
      setPassword(e.target.value);
      validatePassword();
    }
    function validatePassword(){
        if(password.length === 0){
            setPasswordError("Esse campo é obrigatório");
        }else{
            setPasswordError("");
        }
    }
    function handlePasswordlBlur(){
        validatePassword();
    }
  
    return (
        <div className="mt-6">
                <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                  Senha
                </label> 
                <div>
                  <input onChange={handlePasswordChange} onBlur={handlePasswordlBlur} type="password" name="password" className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${passwordError && 'border-red-500'} w-full`} /> 
                  {passwordError && <div className="text-red-500 text-xs mt-1"><div></div></div>}
                </div>
                {passwordError && <div><div className="text-xs text-red-500">{passwordError}</div></div>}
              </div> 
    )
}