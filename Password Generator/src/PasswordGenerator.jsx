import React, { useState } from 'react'

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [includeUppercase, setincludeUppercase] = useState(true);
    const [includeLowercase, setincludeLowercase] = useState(true);
    const [includeNumbers, setincludeNumbers] = useState(true);
    const [includeSymbols, setincludeSymbols] = useState(true);
    const[password, setPassword] = useState("");

    const generatePassword = ()=>{
        let charset = "";
        if(includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeLowercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(includeNumbers) charset += "0123456789";
        if(includeSymbols) charset += "!@#$%^&*()_+";
        let generatePassword = "";
        for(let i=0; i<length; i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            generatePassword += charset[randomIndex];
        }
        setPassword(generatePassword);
    };

    const copyToClipboard = () =>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    };

  return (
  <div className="password-generator">
    <h2>Strong Password Generator</h2>
    <div className="input-group">
        <label htmlFor="num">Password Length:</label>
        <input type="number" id='num' value={length} onChange={(e)=>setLength(parseInt(e.target.value))}/>
    </div>
    <div className="checkbox-group">
        <input type="checkbox" id='upper' checked={includeUppercase} 
        onChange ={(e)=> setincludeUppercase(e.target.checked)} />
        <label htmlFor="upper">Include Uppercase</label>
    </div>
    <div className="checkbox-group">
        <input type="checkbox" id='lower' checked={includeLowercase}
        onChange ={(e)=> setincludeLowercase(e.target.checked)}/>
        <label htmlFor="lower">Include Lowercase</label>
    </div>
    <div className="checkbox-group">
        <input type="checkbox" id='numbers' checked={includeNumbers}
        onChange ={(e)=> setincludeNumbers(e.target.checked)}/>
        <label htmlFor="numbers">Include Numbers</label>
    </div>
    <div className="checkbox-group">
        <input type="checkbox" id='symbol' checked={includeSymbols}
        onChange ={(e)=> setincludeSymbols(e.target.checked)}/>
        <label htmlFor="symbol">Include Symbol</label>
    </div>
    <button onClick={generatePassword} className='generate-btn'>Generate Password</button>
    <div className="generated-password">
        <input type="text" readOnly value={password}/>
        <button className='copy-btn' onClick={copyToClipboard}>Copy</button>
    </div>
  </div>
  )
}

export default PasswordGenerator;