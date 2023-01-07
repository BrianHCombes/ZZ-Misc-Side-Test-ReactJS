import React from '../react_nodes/react';
import { Outlet, Link } from '../react_nodes/react-router-dom';

const Layout = () => {
  return (
         
    <div style={{textAlign:"center"}}> 
    
          <br />
      
          <div>
          <Link to="/"><button>Home</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/blogs"><button>Blogs</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/contact"><button>Contact for thee</button></Link>
          </div>            
        

      <div style={{color:"red"}}><Outlet /></div>
    </div>
  );
  
};

export default Layout;