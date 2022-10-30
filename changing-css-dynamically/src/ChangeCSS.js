import React, { useState } from 'react';
import "./ChangeCSS.css";
const App = () => {
const [style1, setStyle1] = useState("cont1");
const [style2, setStyle2] = useState("cont1");
const [style3, setStyle3] = useState({
                                      cssA:"cont1",
                                      cssB:"cont1"
                                    });




const changeStyle = () => {
	console.log("you just clicked");
	setStyle1("cont2");
        setStyle2("cont3");
        setStyle3 ({
                    cssA:"cont4",
                    cssB:"cont5"
                  });
        
        
        
        
        
};
return (
	<div>
          <div className="App" style={{height:'75px', paddingTop:'50px'}}>CHANGE CSS STYLING WITH ONCLICK EVENT</div>
          <div>
            <div className={style1} style={{marginLeft:'auto', marginRight:'auto'}}>
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
            <div style={{marginLeft:'300px', marginRight:'auto'}}>
              <div className={style3.cssA} style={{marginLeft:'auto', marginRight:'auto', display:'inline-block'}}> 
                    <button className="button" onClick={changeStyle}>
                    Click me!
                    </button>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <div className={style3.cssB} style={{marginLeft:'auto', marginRight:'auto', display:'inline-block'}}> 
                    <button className="button" onClick={changeStyle}>
                    Click me!
                    </button>
              </div>  
            </div>
          </div>  
	</div>
);
};
export default App;
