import React from 'react';
import Wrapper from './Footer.styled';

import Logo from '../../images/logo.svg'
import { Icon } from '@iconify/react';

function Footer() {
  return <Wrapper>
    <div className="container">
        <div className="row justify-content-between align-items-center">
            <div className="col-md-4">
                <img className='footer-logo' src={Logo} alt="logo" />
            </div>
            <div className="col-md-4 text-center align-self-end">
                <p className="text-light mb-3">copyright@thirstynationnfts</p>
                <p className="text-light mb-2">Developed &nbsp; By &nbsp; <a href="https://g7technologies.com/">G7Technologies</a></p>
            </div> 
            <div className="col-md-4 d-flex justify-content-end">
                <div className="social-media-icons">
                    <a href="https://twitter.com/thirstdrinks" target="blank">
                        <Icon icon="ant-design:twitter-circle-filled" color="#ffffff" width="32" height="32" />
                    </a>
                    <a href="https://www.instagram.com/thirstdrinks/" target="blank">
                    <Icon icon="whh:instagramfour" color="#ffffff" width="26" height="26" />
                    </a>
                </div>
            </div>
        </div>
    </div>
  </Wrapper>;
}

export default Footer;
