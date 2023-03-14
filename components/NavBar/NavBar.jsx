import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';


// import icons
import {MdNotifications} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {CgMenuLeft, CgMenuRight} from "react-icons/cg";

//internal import

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, profile, sidebar } from './index';
import { Button } from '../componentsindex';
import images from '../../img';

const NavBar = () => {
    const [discover, setDiscover] =useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] =useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] =useState(false);
  return (
    <div className={Style.navbar}>
        <div className={Style.navbar_container}>
            <div className={Style.navbar_container_left}>
                <div className={Style.logo}>
                    <Image src={images.logo} alt ="NFT MARKET PLACE LOGO" width={100} height={100}></Image>
                
                </div>
            </div>
            <div className={Style.navbar_container_left}>
                    
            </div>
        </div>
    </div>
  )
}

export default NavBar