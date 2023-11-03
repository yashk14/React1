import React, {useState} from "react";

function InputTextCounter() {
    const [state, setState] = useState({
      wordCount: 0, 
    
    });
    
    const handleKeyPress = (e) => {
      const count = e.target.value;
      
      const countWords = (count) => {
        if (count.length === 0) {
          return 0;
        } else {
          count = count.replace(/(^\s*)|(\s*$)/gi,"");
          count = count.replace(/[ ]{2,}/gi," ");
          count = count.replace(/\n /,"\n");
          return count.split(' ').length; 
        }
      }
      
      setState({
        wordCount: countWords(count),
        
      });
    }
    

    return(
        <div>
            <center>
                <h3 style={{fontFamily:"Cambria",textAlign:"center"}}>Responsive Paragraph Word Counter</h3>
                <textarea rows={"10"} cols={"100"} style={{fontFamily:"Cambria",fontSize:"1em", padding:"10px"}} onChange={handleKeyPress} />
                <p style={{fontFamily:"Cambria",textAlign:"center"}}>Word Count: {state.wordCount}</p>
            </center>
            
        </div>
    )
}

export default InputTextCounter;