import React from 'react'
import './SideNav.scss'

import {MdInventory,MdShoppingCart,MdHelp} from 'react-icons/md'
import {FaFileInvoiceDollar,FaScroll} from 'react-icons/fa'
import {AiFillSetting,AiOutlineMenu} from 'react-icons/ai'

export default function SideNav() {
    const iconAttr={
        color:'E1CC5B',
        size:'2.5rem'
    }
  
    return (
    <div className='SideNav'>
        <AiOutlineMenu color='white' size='2.5rem'/>

        <MdInventory {...iconAttr}/>
        <MdShoppingCart {...iconAttr}/>
        <FaFileInvoiceDollar {...iconAttr}/>
        <FaScroll {...iconAttr} />
        <AiFillSetting {...iconAttr} />
        <MdHelp {...iconAttr} />
    </div>
  )
}
