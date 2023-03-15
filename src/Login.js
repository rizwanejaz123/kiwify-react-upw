
import {useState} from "react";
import {Link} from "react-router-dom";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import ResetPassword from "./ResetPassword";
import Button from "./Button";

export default function Login() {

    const [isSubmit, setIsSubmit] = useState(false);

    function handleSubmitClick(){
        setIsSubmit(true);
    }
    
    return (
    <>
    <div id="__layout">
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        
        <div>
            <div className="sm:mx-auto sm:w-full sm:max-w-md"><img src="//dashboard.kiwify.com.br/_nuxt/img/kiwify-green-logo.2af0e50.png" alt="Workflow" className="mx-auto h-12 w-auto" /> 
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Entrar na sua conta
            </h2> 
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
                Ou  <Link to="/signup/" className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">fazer cadastro</Link>
            </p>
            </div> 
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <form className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <EmailInput isSubmit={isSubmit} caption="E-mail" />
                    <PasswordInput isSubmit={isSubmit} />
                    <ResetPassword isSubmit={isSubmit} />
                    <Button onSubmitClick={handleSubmitClick} caption="Entrar" />
                    
                </form>
            </div>
        </div>

      </div>
      
      
    </div>
    </>
    )
}