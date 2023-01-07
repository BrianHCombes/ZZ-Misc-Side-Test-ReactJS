import React, { useState } from 'react';
import "./ChangeCSS.css";
const App = () => {
const [style1, setStyle1] = useState("cont1");
const [style2, setStyle2] = useState("cont1");
const [style3, setStyle3] = useState({
                                      cssA:"cont1",
                                      cssB:"cont1",
                                      cssC:"cont1"
                                      
                                    });

const changeStyle = (a) => {
          console.log("you just clicked and val is: " + a);
          setStyle1("cont2");
          setStyle2("cont3");
          
          
          let b;
          switch(a){
            case 1: b={cssA:"cont4", cssB:"cont6", cssC:"cont6"}; break;
            case 2: b={cssA:"cont6", cssB:"cont4", cssC:"cont6"}; break;
            case 3: b={cssA:"cont6", cssB:"cont6", cssC:"cont4"}; break;
            default: b=404; break;  
          }  
          console.log("b is: " + JSON.stringify(b));
          setStyle3(b);  
    
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
              <div className={['shadow', style3.cssA].join(" ")} style={{marginLeft:'auto', marginRight:'auto', display:'inline-block'}}> 
                    <button className="button" onClick={() => changeStyle(1)}>
                    Click me!
                    </button>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <div className={'shadow ' + style3.cssB} style={{marginLeft:'auto', marginRight:'auto', display:'inline-block'}}> 
                    <button className="button" onClick={() => changeStyle(2)}>
                    Click me!
                    </button>
              </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  
              <div className={style3.cssC} style={{marginLeft:'auto', marginRight:'auto', display:'inline-block'}}> 
                    <button className="button" onClick={() => changeStyle(3)}>
                    Click me!
                    </button>
              </div>    
              
            </div>
          </div>  
	</div>
      );
};
export default App;


// https://stackoverflow.com/questions/36772389/how-can-i-add-multiple-classnames-to-react-component
// https://www.delftstack.com/howto/react/react-multiple-class-names/
