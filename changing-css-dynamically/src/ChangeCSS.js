import React, { useState } from 'react';
import "./ChangeCSS.css";
const App = () => {
const [style, setStyle] = useState("cont");
const [style2, setStyle2] = useState("cont");
const [style3, setStyle3] = useState({
  
        cssA:"cont"
      });




const changeStyle = () => {
	console.log("you just clicked");
	setStyle("cont2");
        setStyle2("cont3");
        setStyle3({cssA:"cont4"});
};
return (
	<div>
          <div className="App" style={{height:'75px', paddingTop:'50px'}}>CHANGE CSS STYLING WITH ONCLICK EVENT</div>
          <div>
            <div className={style} style={{marginLeft:'auto', marginRight:'auto'}}>
                    <button className="button" onClick={changeStyle}>
                    Click me!
                    </button>
            </div>
            <br />
            <div className={style2} style={{marginLeft:'auto', marginRight:'auto'}}>
                    <button className="button" onClick={changeStyle}>
                    Click me!
                    </button>
            </div>
            <br />
            <div className={style3.cssA} style={{marginLeft:'auto', marginRight:'auto'}}>
                    <button className="button" onClick={changeStyle}>
                    Click me!
                    </button>
            </div>
          </div>  
	</div>
);
};
export default App;
