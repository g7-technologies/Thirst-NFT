import React from 'react';
import Wrapper from './Raritylevels.styled';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";

// import images and icons 
import Goldimg from '../../images/gold.svg'
import Silverimg from '../../images/silver.svg'
import Bronzeimg from '../../images/bronze.svg'




function Raritylevels() {
  return <Wrapper>
    <div className="container" id='Rarity'>
        <div className="row">
            <div className="col text-center">
                <h3 className="display-5 brand-color mt-4">Rarity Levels</h3>
                <p className="text-dark mt-5">The rarity level determines the % discount the NFT can be redeemed for at a Thirst store</p>
            </div>
        </div>
        <div className="row justify-content-around mt-3 mb-5 text-center text-light rarity-level-cards">
            <div className="col-md-4 col-sm-6 p-3">
                <div className="card rarity-level-card">
                    <img className='card-img-top' src={Goldimg} alt="gold card" />
                    <div className="card-img-overlay text-dark d-flex flex-column align-items-center justify-content-center">
                        <h4 className="card-title">Gold</h4>{/*: Valid <br /> Forever*/}
                        <p className="card-text"> Gold: NFT item itself free plus 25% off <br/> all items at Thirst stores.</p>
                        {/*<p className="mint-button"> Coming soon</p>*/}
                        <Link className="mint-button" to="/GoldMint">Mint Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 p-3">
                <div className="card rarity-level-card">
                    <img className='card-img-top' src={Silverimg} alt="silver card" />
                    <div className="card-img-overlay text-dark d-flex flex-column align-items-center justify-content-center">
                        <h4 className="card-title">Silver</h4>{/*: Valid For <br /> One Year*/}
                        <p className="card-text">Silver: NFT item itself free plus 10% off <br/> all items at Thirst stores.</p>
                        {/*<p className="mint-button"> Coming soon</p>*/}
                        <Link className="mint-button" to="/SilverMint">Mint Now</Link>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6 p-3">
                <div className="card rarity-level-card">
                    <img className='card-img-top' src={Bronzeimg} alt="bronze card" />
                    <div className="card-img-overlay text-dark d-flex flex-column align-items-center justify-content-center">
                        <h4 className="card-title">Bronze</h4>{/*: Valid For 6 <br /> Months*/}
                        <p className="card-text">Bronze: NFT Item free every day <br/> from all Thirst stores.</p>
                        {/*<p className="mint-button"> Coming soon</p>*/}
                        <Link className="mint-button" to="/BronzeMint">Mint Now</Link>
                    </div>
                </div>
            </div>
        </div>
        <p className="card-text"><span className="text-danger fw-bold">*</span> drink NFTs can be redeemed for any drink/mixer</p>
        <p className="card-text"><span className="text-danger fw-bold">*</span> each NFT's utility value is valid for life for the holder</p>
    </div>
  
  
  </Wrapper>;
}

export default Raritylevels;
