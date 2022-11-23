import React, { useState, useEffect } from 'react';
import Wrapper, { Mobilenav } from "./Topnav.styled"
import { HashLink } from 'react-router-hash-link';
// importing images and icons 
import Logo from "../../images/logo.svg"
import { Icon } from '@iconify/react';

function Topnav() {
  // mobile nav display function 
const [ mobileDropdown, setMobileDropdown ] = useState(false)
useEffect(() => {
  const dropdown = document.querySelector(".mobile-navlink-items");
  if(mobileDropdown) {
    dropdown.style.height = 340 + "px";
  }else {
    dropdown.style.height = 0 + "px";
  }
}, [mobileDropdown]);

// scroll with offset
const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

  return <Wrapper>
    <nav>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <div className="navlink-items">
            <HashLink to="/#Home" scroll={el => scrollWithOffset(el)}>Home</HashLink>
            <HashLink to="/#Utility_Value" scroll={el => scrollWithOffset(el)}>Utility Value</HashLink>
            <HashLink to="/#About_Us" scroll={el => scrollWithOffset(el)}>About</HashLink>
            <HashLink to="/#How_it_Works" scroll={el => scrollWithOffset(el)}>How It Works</HashLink>
            <HashLink to="/#NFT_Gallery" scroll={el => scrollWithOffset(el)}>NFT Gallery</HashLink>
            <HashLink to="/#Rarity" scroll={el => scrollWithOffset(el)}>Rarity Levels</HashLink>
            <HashLink to="/#Roadmap" scroll={el => scrollWithOffset(el)}>Roadmap</HashLink>
        </div>
    </nav>
    <Mobilenav>
      <div className="mobile-logo">
        <img src={Logo} alt="logo" />
      </div>
      <div className='mobile-nav-baricon'>
        <Icon icon="fluent:data-bar-horizontal-24-filled" color="#ff4100" onClick={() => {setMobileDropdown(!mobileDropdown)}} />
      </div>
      <div className="mobile-navlink-items">
        <HashLink to="/#Home" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>Home</HashLink>
        <HashLink to="/#Utility_Value" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>Utility Value</HashLink>
        <HashLink to="/#About_Us" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>About</HashLink>
          <HashLink to="/#How_it_Works" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>How It Works</HashLink>
        <HashLink to="/#NFT_Gallery" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>NFT Gallery</HashLink>
        <HashLink to="/#Rarity" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>Rarity Levels</HashLink>
        <HashLink to="/#Roadmap" onClick={() => {setMobileDropdown(!mobileDropdown)}} scroll={el => scrollWithOffset(el)}>Roadmap</HashLink>
      </div>
    </Mobilenav>
  </Wrapper>;
}

export default Topnav;
