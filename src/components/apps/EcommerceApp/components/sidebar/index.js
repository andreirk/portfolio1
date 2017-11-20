import React from 'react'
import BasketCart from "../basketCart/index";
import Search from "../search/index";


const Sidebar = (props) => {
  return (
      <div>
        <BasketCart/>
        <Search/>
      </div>
  )
}

export default Sidebar