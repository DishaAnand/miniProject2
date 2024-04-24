import React,{useState} from 'react';

const usepasswordGenrator = () =>{
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const generatePassword = (checkBoxData,length) =>{
        let charSet = "", generatePassword = ""

        const selectedOption = [...checkBoxData].filter(checkBox => (checkBox.state))

        if(selectedOption.length == 0){
            setErrorMessage("select atleast one option")
            setPassword("");
            return;
        }

        selectedOption.forEach((choice)=>{
            switch(choice.title){
                case "Include UpperCase Letter":
                    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    break;
                case "Include LowerCase Letter":
                    charSet += "abcdefghijklmnopqrstuvwxyz"
                    break;
                case "Include Numbers":
                    charSet += "0123456789"
                    break;
                case "Include Symbols":
                    charSet += "!@#$%^&*()_+"
                    break;
            }
        })
        for(let i = 0; i < length;i++){
            const randomNumber = Math.floor(Math.random() * charSet.length)
            generatePassword+= charSet[randomNumber]
        }
        setPassword(generatePassword)
        setErrorMessage("")
    }
    

    return {password, errorMessage, generatePassword}
}


export default usepasswordGenrator