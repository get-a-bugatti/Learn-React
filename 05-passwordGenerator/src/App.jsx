import { useState, useCallback, useEffect , useRef} from 'react'

function App() {
  // useRef hook 
  const passwordRef = useRef(null);

  const [length, setLength] = useState(8);
  const [numsAllowed, setNumsAllowed] = useState(false);
  const [symbolsAllowed, setSymbolsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  function changeLength(value) {
    setLength(value);
  }
  
  const passwordGenerator = useCallback(() => {
    let charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let symbols = "!@#$%^&*-_+=[]{}~`";
  
    if (numsAllowed) charset += nums;
    if (symbolsAllowed) charset += symbols;
  
    let pass = "";
  
    for (let i = 0; i < length; i++) {
      let choiceIdx = Math.floor(Math.random() * charset.length - 1);
      pass += charset.charAt(choiceIdx);
    }
  
    setPassword(pass);
  
  }, [length, numsAllowed, symbolsAllowed, setPassword]);

  const copyPassToClipboard = useCallback(() => {
    passwordRef.current?.focus();
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password, setPassword])

  useEffect(() => {
    passwordGenerator();
  }, [length, numsAllowed, symbolsAllowed, passwordGenerator]);


  return (
    <>
      <div className="main-container">
        <h1>Password Generator</h1>
        <div className="top-part">
          <input type="text" placeholder='Password' id="password" value={password} min={6} max={100} readOnly ref={passwordRef}/>
          <button className='copy-btn' onClick={copyPassToClipboard}>copy</button>
        </div>
        <div className="bottom-part">
        <label htmlFor="passLength">Length : {length}</label>
        <input type="range" name="length" id="passLength" value={length} onChange={(e) => changeLength(e.target.value)}/>
        <label htmlFor="number">Numbers :</label>
        <input type="checkbox" name="number" id="number" checked={numsAllowed} onChange={() => setNumsAllowed(prev => !prev)} />
        <label htmlFor="symbols">Symbols :</label>
        <input type="checkbox" name="symbols" id="symbols" checked={symbolsAllowed} onChange={() => setSymbolsAllowed(prev => !prev)}/>
        </div>
      </div>
    </>
  )
}

export default App
