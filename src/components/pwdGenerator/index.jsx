import React,{useState} from 'react' 
import styles from './index.module.scss'
import usepasswordGenrator from './pwdGeneratorHook';

const PasswordGenerate = () => { 

    const [length, setLength] = useState(4)
    const [copied, setCopied] = useState(false)
    const [checkBoxData, setcheckBoxData] = useState([
        {title:"Include UpperCase Letter", state: false},
        {title:"Include LowerCase Letter", state: false},
        {title:"Include Numbers", state: false},
        {title:"Include Symbols", state: false}

    ]);

    const handleCheckBox = (i) =>{
        const updatedCheckBoxData = [...checkBoxData]
        updatedCheckBoxData[i].state = !updatedCheckBoxData[i].state
        setcheckBoxData(updatedCheckBoxData)

    }

    const handleCopy = () => {
        navigator.clipboard.writeText(password)
        setCopied(true)
        setTimeout (()=>{
            setCopied(false)
        },1000)
    }

    const {password, errorMessage, generatePassword} = usepasswordGenrator()

    return ( 
        <div className={styles.container}>
            {password && (<div className={styles.intro}>
                <div className = {styles.header}>{password}</div> 
                <button 
                    className ={styles.btnClick} 
                    onClick = {() => handleCopy()}>
                        {copied? "Copied": 'Copy'}
                </button>
            </div>)}
            <div className={styles.container2} >
                <div className = {styles.characterBox}>
                    <span className={styles.characterText}>Character Length</span>
                    <span className={styles.characterLength}>{length}</span>
                </div>
                <input className = {styles.inputRange}
                    type = 'range'
                    min = '4'
                    max = '15'
                    value={length}
                    onChange={(e)=>setLength(e.target.value)}
                    
                />
            </div>
            <div className={styles.checkBoxes}>
                {checkBoxData.map((checkbox,index)=>(
                    <div key = {index}>
                    <input type ='checkbox' checked={checkbox.state} onChange ={()=>handleCheckBox(index)}/>
                    <label>{checkbox.title}</label>
                    </div>
                ))}
                

            </div>
            <div className={styles.pwdStrength}>
                <span className={styles.strText}>Strength:</span>
                <span className={styles.strType}>Medium</span>

            </div>
            {errorMessage && (
                <div className={styles.errorMessage}>
                    {errorMessage}
                </div>
            )}
            <button 
                className={styles.btnGenerate}
                onClick={() => generatePassword(checkBoxData, length)}
                
                >Generate Password</button>
        </div>
    ); 
} 

export default PasswordGenerate;


