import React, { useEffect, useState } from 'react'
import "./Main.css";
function Main() {
  const [textValue, SetTextValue]=useState('');
  const[charCount, setCharCount]=useState(0);
  const [wordCount, setwordCount] = useState(0);
  useEffect(() => {

  }, [SetTextValue]);
  const handleSubmit=()=>
  {
   console.log("first")
    
  }
  const texHandle=(e)=>
  {
    const value= e.target.value;
    // console.log(value);
    SetTextValue(e.target.value);
    setCharCount(textValue.length);
    setwordCount(value.trim().split(" ").length);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          
          placeholder="Enter text Here..."
          value={textValue}
          onChange={texHandle}
        />
        <button type="submit" value="Submit">
          clear All
        </button>
      </form>
      <button className="character">character : {charCount}</button>
      <button className="word">word :{wordCount}</button>
    </>
  );
}

export default Main;