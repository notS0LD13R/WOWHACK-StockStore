import React, { useState } from 'react'
import './SideNav.scss'

import {MdInventory,MdShoppingCart,MdHelp} from 'react-icons/md'
import {FaFileInvoiceDollar,FaScroll} from 'react-icons/fa'
import {AiFillSetting,AiOutlineMenu} from 'react-icons/ai'

export default function SideNav() {
    const iconAttr={
        color:'E1CC5B',
        size:'2.5rem'
    }

    const [open,setOpen]=useState(false)

    const handleMenuClick=()=>{
        setOpen(!open)
    }

  
    return (
    <div className={`SideNav ${+open?'open':''}`}>
        <span>
            <AiOutlineMenu color='white' size='2.5rem' onClick={handleMenuClick}/>
        </span>

        <span>
            <MdInventory {...iconAttr}/>
            <i>Stocks of the Day</i>
        </span>
        <span>
            <MdShoppingCart {...iconAttr}/>
            <i>Buy Stocks</i>
        </span>
        <span>
            <FaFileInvoiceDollar {...iconAttr}/>
            <i>Sell Stocks</i>
        </span>
        <span>
            <FaScroll {...iconAttr} />
            <i>Apply for Stock</i>

        </span>
        <span>
            <AiFillSetting {...iconAttr} />
            <i>Setting</i>

        </span>
        <span>
            <MdHelp {...iconAttr} />
            <i>Help</i>
        </span>
    </div>
  )
}
