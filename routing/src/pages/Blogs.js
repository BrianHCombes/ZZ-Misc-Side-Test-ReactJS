import React from '../react_nodes/react';
import { Outlet, Link } from '../react_nodes/react-router-dom';

const Blogs = () => {
  
  return (
    <div style={{textAlign:"center"}}> 
    
          <h1>Blog Articles</h1>
          <br />
      
          <div>
          <Link to="/blogs/blogPage1"><button>Nested Blog Page 1</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/blogs/blogPage2"><button>Nested Blog Page 2</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/blogs/blogPage3"><button>Nested Blog Page 3</button></Link>
          </div>            
        

      <div style={{color:"blue"}}><Outlet /></div>
    </div>
  );
  
  
};

export default Blogs;