import {useState, useEffect} from "react";
export default function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(false);
    const [checkedError, setCheckedError] = useState(false);

    useEffect(e => {
        if(props.isSubmit){
            handleCheckError();
        }
    }, [props.isSubmit]);
  
    function handleCheckChange(e) {
      setIsChecked(e => !e);
    }
    function handleCheckError(){
        if(!isChecked){
            setCheckedError(true);
        }else{
            setCheckedError(false);
        }
    }

    return (
        <div className="mt-6">
            <label className="relative flex items-start mt-2">
                <div className="flex items-center h-5">
                    <input type="checkbox" className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out ${checkedError && 'border-red-500'} cursor-pointer`} />
                </div>
            <div className="ml-2 text-sm leading-5">
                <span className="font-medium text-gray-700">Eu li e aceito os <a href="https://kiwify.com.br/termos-de-uso" target="_blank" className="underline"> termos de uso</a>, <a href="https://kiwify.com.br/licenca-de-uso-software" target="_blank" className="underline"> termos de licença de uso de software</a>, <a href="https://kiwify.com.br/politica-de-conteudo" target="_blank" className="underline"> política de conteúdo</a> da Kiwify </span>
                {checkedError && <div className="text-red-500 border-b-0">(Esse campo é obrigatório)</div>}
            </div>
            </label>
        </div>
    )
}