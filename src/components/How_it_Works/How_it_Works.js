import React from 'react';
import Wrapper from './How_it_Works.styled';
import { Icon } from '@iconify/react';


function How_it_Works() {
  return <Wrapper>
    <div className="container mt-5" id="How_it_Works">
        <div className="row mt-5">
            <div className="col text-center mt-5">
                <h3 className="display-5 brand-color mt-4">How It Works</h3>
                {/*<p className="text-dark mt-5">In addition to the nostalgic (and RESALE)  "player card" value of being part of a <br /> particular store and representing one of 25 famous menu items at <br /> Thirst, ownership of any Thirst NFT can be redeemed for: 
                </p>*/}
            </div>
        </div>
        <div className="row justify-content-around mt-5 text-center text-light rarity-value-cards">
            <div className="col-md-3 p-3">
                <div className="card bg-dark p-4 h-100">
                    <Icon className='card-img fs-1' icon="cil:wallet" color="#ffffff" />
                    <div className="card-body pb-3">
                        <p className="card-text m-0 text-light">Set up an ethereum wallet (we recommend Metamask) and buy enough ETH to add to your wallet to cover mint price plus gas fees. Connect your wallet on <a className="text-light" href="https://thirstnfts.com" target="blank"><b>thirstnfts.com</b></a> in preparation for the release date.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-3">
                <div className="card bg-dark p-4 h-100">
                    <Icon className='card-img fs-1' icon="clarity:date-outline-badged" color="#ffffff" />
                    <div className="card-body pb-3">
                        <p className="card-text m-0 text-light">Once released, NFTs will be available to mint and once minted the ownership will be transferred to the owner's wallet.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-3">
                <div className="card bg-dark p-4 h-100">
                    <Icon className='card-img fs-1' icon="bi:eye" color="#ffffff" />
                    <div className="card-body pb-3">
                        <p className="card-text m-0 text-light">Once minted, all NFT's will also be publicly visible on <a className="text-light" href="https://opensea.io" target="blank"><b>Opensea</b></a> and can be traded, bought, or sold</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 p-3">
                <div className="card bg-dark p-4 h-100">
                    <Icon className='card-img fs-1' icon="clarity:store-solid" color="#ffffff" />
                    <div className="card-body pb-3">
                        <p className="card-text m-0 text-light">Owners will show their wallet when ordering at Thirst stores to redeem benefits</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  
  </Wrapper>;
}

export default How_it_Works;
