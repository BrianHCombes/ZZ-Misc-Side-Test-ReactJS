import React from '../react_nodes/react';
import { Outlet, Link } from '../react_nodes/react-router-dom';

const Layout = () => {
  return (
         
    <React.StrictMode> 
          <div>
          <Link to="/"><button>Home</button></Link>
          <br /><br />
          </div>
            
          <div>
          <Link to="/blogs"><button>Blogs</button></Link>
          </div>  
            
          <div>
          <Link to="/contact"><button>Contact for thee</button></Link>
          </div>            
        

      <Outlet />
    </React.StrictMode>
  )
  
};

export default Layout;