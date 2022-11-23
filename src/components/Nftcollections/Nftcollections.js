import React from 'react';
import Wrapper from './Nftcollections.styled';

// import data 
import { NftcollectionsData } from './Nftcollections.data';
// import images and icons 
import { Icon } from '@iconify/react';



function Nftcollections() {
  return <Wrapper>
  <div className="container mb-5">
    <div className="row">
        <div className="col text-center mt-3">
            <h4 className='display-6 fw-bold brand-color'>NFT Collections</h4>
            <p className="mt-3">Each collection will be named after the store and the number the store was opened in the company. <br /> All collections will have the same 25 signature menu item NFT's at 3 different rarity levels for a total <br /> of 75 NFT's per collection. </p>
        </div>
    </div>
    <div className="row justify-content-center my-3">
    { NftcollectionsData.map( item => (
        <div key={item.id} className="col-md-4 p-3">
            <div className="card py-5 text-light text-center nft-collection-card">
                <Icon className='card-img' icon="carbon:location" color="white" />
                <div className="card-body">
                    <p className="card-text">{item.text}</p>
                </div>
            </div>
        </div>
    ))}
    </div>
  </div>
  
  </Wrapper>;
}

export default Nftcollections;
