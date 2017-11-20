import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../sidebar/index";


 const Layout = ({children}) => {
   return <div className="view-container">
             <div className="container">
               <div className="row">
                  <div className="col-md-2">
                    <Sidebar/>
                  </div>
                 <div className="col-md-10">
                   {children}
                 </div>
               </div>

             </div>
         </div>
 }

Layout.propTypes = {};
Layout.defaultProps = {};

export default Layout;
