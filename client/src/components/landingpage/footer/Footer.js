import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <>
        <div className="footer">
               <nav class="navbar bg-body-tertiary">
                <div class="container-fluid px-3" style={{borderBottom:"5px solid #ededed"}}>
                    <a class="navbar-brand" href="#" style={{marginLeft:"6rem"}}>
                        <img src="/education.png
                         " alt="Logo" width="50px" height="40px" class="d-inline-block align-text-top"/>
                        <span className='logo-den'>Den</span> 
                     </a>
                       <b style={{marginRight:"2rem"}}>Back to top</b>
                      
                </div>
            </nav>
             <p className="copyright">&copy; 2023 Tuitor's <span>Den</span></p>
        </div>
    </>
  )
}

export default Footer