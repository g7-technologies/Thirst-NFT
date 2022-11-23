import React from 'react';
import Wrapper from './Utility_Value.styled';
import { Icon } from '@iconify/react';


function Utility_Value() {
  return <Wrapper>
    <div className="container mt-5" id="Utility_Value">
        <div className="row mt-5">
            <div className="col text-center">
                <h3 className="display-5 brand-color mt-5">Utility Value</h3>
            </div>
        </div>
        <div className="row justify-content-around mt-5 text-center text-light rarity-value-cards">
            <div className="col-md-4 p-3 mb-5">
                <div className="card bg-dark p-4 h-100">
                    <Icon className='card-img fs-1' icon="fluent:device-eq-24-filled" color="white" />
                    <div className="card-body pb-3">
                        <p className="card-text m-0">NFT product itself FREE once per day from any Thirst store</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-3 mb-5">
                <div className="card bg-dark p-4 h-100">
                    <Icon className='card-img fs-1' icon="fa-brands:free-code-camp" color="white" />
                    <div className="card-body pb-3">
                        <p className="card-text m-0">10%-25% off all items at Thirst stores</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Wrapper>;
}

export default Utility_Value;
