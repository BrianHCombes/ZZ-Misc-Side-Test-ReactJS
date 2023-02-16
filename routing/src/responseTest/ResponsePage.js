import React from 'react';
import './ResponsePage.css';
import { Outlet, Link } from 'react-router-dom';
import titleBanner01 from './lr-title-banner_01.jpg';
import titleBanner02 from './lr-title-banner_02.jpg';
import { HashLink } from 'react-router-hash-link';
import {lr} from '../lr/lr-single.js';




function ResponsePage(){
  return (
  <React.StrictMode>          
  {/*comment to eliminate error flags elsewhere;*/} <span style={{}}></span> 
  <div>        
    <div id="test" style={{textAlign:'center'}}>
        <img  src={lr.whtml(titleBanner01,1000,titleBanner02)} 
              alt="LR Graphic Here"
              style={{ width:'98%', marginTop:"1%", border:'2px solid white', borderRadius:lr.w("em",0.75,0.45)}}
        ></img>
      </div> 

         
  
    <div  className="" 
          id="titling" 
          style={{
                  width: lr.w("%",55,98), 
                  marginTop:'1%',
                  marginLeft:'auto', 
                  marginRight:'auto', 
                  backgroundColor:'#bbbbbb',
                  border:'2px solid black', 
                  borderRadius:'0.75em', 
                  fontFamily: 'Arial Rounded MT Bold',
                  color:'#550000',
                  textShadow:'0 0 1px white'
                }}>
        <div style={{textAlign:'center'}}>
          <div className="arialRnd" style={{fontSize: lr.w("em",3.5,1.5), lineHeight:'150%', padding:'1% 0 0 0', textAlign:'center'}}>
              Examples
          </div>    
          <div style={{fontSize:lr.w('em',1.25,1), padding:'0 4% 0 4%', textAlign:'left'}}>
          Here are various examples for using LR. They use basic javascript code for manipulating the DOM. 
          Although limited, any examples for use in various frameworks will be shown. Generally, it is advised
          to apply basic DOM manipulation form as catered to by various application frameworks.<br /> <br />
          </div>
          <div>
    {/* LR is Here  */}       
            <table className='exampTable2' style={{width:'96%', margin:'0 auto', fontSize:lr.w("em",1,600,0.6,0.4)}}>   
              <tr>
                <td colSpan='6' style={{width:'100%', textAlign:'center', color:'blue'}}>
                  Choose Your Example
                </td>
              </tr>
              <tr>
                <td><Link className="button" to="/examples/lrw" title="This is the most popular method" >&nbsp;lr.w(args)&nbsp;</Link></td>
                <td><Link className="button" to="/examples/lrww" title="This is the window width method" >&nbsp;lr.ww(args)&nbsp;</Link></td>
                <td><HashLink className="button" to="/examples#lrh">&nbsp;lr.h(args)&nbsp;</HashLink></td>
                <td><HashLink className="button" to="/examples#lrwh">&nbsp;lr.wh(args)&nbsp;</HashLink></td>
                <td><HashLink className="button" to="/examples#lrr">&nbsp;lr.r(args)&nbsp;</HashLink></td>
                <td><HashLink className="button" to="/examples#lrwr">&nbsp;lr.wr(args)&nbsp;</HashLink></td>
              </tr>
              <tr>
                <td>lr.wLF(args)</td>
                <td>lr.wwLF(args)</td>
                <td>lr.hLF(args)</td>
                <td>lr.whLF(args)</td>
                <td>lr.rLF(args)</td>
                <td>lr.wrLF(args)</td>
              </tr>  
              <tr>
                <td>lr.whtml(args)</td>
                <td>lr.wcss(args)</td>
                <td>lr.hhtml(args)</td>
                <td>lr.hcss(args)</td>
                <td>lr.rhtml(args)</td>
                <td>lr.rcss(args)</td>
              </tr>
              <tr>
                <td colSpan='6'>lr.eval(args)</td>
              </tr>
            </table>
         
        </div>
         
          
      </div><br />
      </div> 
    <br />  
      
    {/* lr.w(args) example  ********************************************************************************************************/}      
    <div id='lrw' style={{position:'relative', width: lr.w('%',58,100), margin:'0 auto'}}>  
      <button className="button" onClick={() => window.scrollTo(0,0)} style={{position:'absolute', left:'3.3%', top:'1%',}}><b>To Top</b></button>
      <table  className='exampTable'>
    {/* LR is Here  */}  
        <tr>
          <th colspan="2" style={{fontSize:lr.w('em',2,1.5), padding:'1%'}} >
            Example<br /><br />lr.w(args)
          </th>
        </tr>
    {/* LR is Here  */}    
        <tr>
          <td style={{width: lr.w('%',16,22), padding:'1%', fontSize: lr.w('em',1.5,1.25), fontFamily:'monospace', display: lr.wcss('table-cell',600,'none')}}>
            lr.w(args)
          </td>
          <td style={{padding:'1%', verticalAlign:'middle', fontFamily:'monospace', fontSize:'1.25em', lineHeight:'110%', textAlign:'left'}}>
            lr.w(args) uses the reported <span className='hlt_01'>&nbsp;viewport width&nbsp;</span> to establish the proper CSS return. 
            For this example assume the reported viewport width (screen.availWidth) is 1366px. Furthermore, assume the URP (Upper
            Range Point) is the default of 1920px which will correlate to the 30px in the LR expression and the LRP (Lower Range Point) 
            is the default of 360px which will correlate to the 12px in the LR expression.<br />
            Here is the example with details:<br /><br />

            <table style={{width:'100%', border:'none', textAlign:'center'}}>
              <tr>
              <th title='Upper Range Point'>URP</th><th title='Reported width from a hypothetical device'>Reported Width</th><th title='Lower Range Point'>LRP</th>
              </tr>

              <tr>
                <td style={{borderColor:'lime'}}>
                  1920px 
                </td>
                <td style={{borderColor:'lime'}}>
                  1366px
                </td>
                <td style={{borderColor:'lime'}}>
                  360px
                </td>
              </tr>
              <tr>
                <td colSpan='3' style={{textAlign:'center'}}>
                  Example LR expression is:<br />
                  <span style={{fontSize:'1.25em', 
                                padding:'0.5% 0', 
                                lineHeight:'160%', 
                                backgroundColor:'#004400', 
                                borderRadius:'0.3em'}}>
                    &nbsp;lr.w('font-size:px',30,12)&nbsp;
                  </span>
                </td>
              </tr>
              <tr>
                <td colSpan='3' style={{textAlign:'center'}}>
                  Return Value is:<br />
                  <span style={{fontSize:'1.1em', padding:'0.5% 0', lineHeight:'160%', backgroundColor:'#004400', borderRadius:'0.3em'}}>&nbsp;font-size:23.61px&nbsp;</span>
                </td>
              </tr>
              <tr>
                <td colSpan='3' style={{textAlign:'left', padding:'0.5em'}}>
                  To explain: <br /> The return value of 23.61px is based on the lineation value at the reported width of 1366px. 
                  The lineation itself is calculated by using the upper and lower range points of 1920px and 360px respectively.
                  Consequently, at 1920px the return is 30px and at 360px the return is 12px. Thus, at a reported width of 1366px 
                  the return value will be 23.61px. Note: Your device will round it up to 24px.<br />
                </td>
              </tr>
            </table><br />

            This example can have other expression formats:<br />
            let a = lr.w('font-size:px',30,12);<br />
            let b = lr.w('px',30,12);<br /> 
            let c = lr.w('',30,12);<br /><br />
            returns:<br />
            a = 'font-size:23.61px'&nbsp;(is string)<br />
            b = '23.61px'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is string)<br />
            c = &nbsp;23.61&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(is num)<br /><br />

            <table style={{border:'none', width:'100%'}} >
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Upper and Lower range points are assumed to be 1920px and 360px respectively.</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Property and units can be any CSS format<br />(for example: lr.w('width:%',60,95).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >Answer c can be mathematically operated on.<br />(for example: let d = c*3 + 12).</td>
              </tr>
              <tr>
                <td style={{border:'none', width:'7%', verticalAlign:'top'}} >Note:</td>
                <td style={{border:'none'}} >
                    The reported viewport width can be the device width, window width or a width set by LR. LR can set the viewport width
                    to the device width or the window width as needed. screen.availWidth is considered default if LR has not been used to
                    assign a different value.
                </td>
              </tr>
            </table>
          </td>
        </tr>      
      </table><br /><br />    
    </div>
    
    
    
  </div>
  </React.StrictMode>  
  );
  
};
  
  export default ResponsePage;