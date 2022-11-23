import React, { useState } from 'react';
import Wrapper from './Nftgallary.styled';
import { NftgallaryData } from './Nftgallary.data';

function Nftgallary() {
// loadmore shakes function 
const [ buttonText, setButtonText ] = useState(true);
const [ loadlength, setLoadlength ] = useState(6);
function loadmoreFunc () {
    if(loadlength > 6) {
        setLoadlength(6);
        setButtonText(!buttonText);
    }else {
        setLoadlength(NftgallaryData.length);
        setButtonText(!buttonText);
    }
}

  return <Wrapper>
    <div className="container-fluid banner" id='NFT_Gallery'>
        <div className="row justify-content-around">
        <h2 className='display-5 fw-bold text-center text-light mb-5'>NFT Gallery</h2>
        {NftgallaryData.slice(0, loadlength).map( ( item ) => (
            <div key={item.id} className="col-lg-4 col-md-6 mt-5">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={item.frontImg} alt="front" />
                            <p className="text-center brand-color heading_bottom">{item.title}</p>
                        </div>
                        <div className="flip-card-back">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h4 className="card-title brand-color">{item.subtitle1}</h4>
                                    <p className="card-text">{item.subtitleText1}</p>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title brand-color">{item.subtitle2}</h4>
                                    <p className="card-text">{item.subtitleText2}</p>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title brand-color">{item.subtitle3}</h4>
                                    <p className="card-text">{item.subtitleText3}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
        <div className="container mt-5 text-center">
            <button className='more-btn' onClick={loadmoreFunc}>{buttonText ? "More" : "Less"}</button>
        </div>
    </div>
  </Wrapper>;
}

export default Nftgallary;
