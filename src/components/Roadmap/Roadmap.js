import React from 'react';
import Wrapper from './Roadmap.styled'

// import images and icons 
import Rocketicon from '../../images/icons/rocket.svg'
import Productionicon from '../../images/icons/production.svg'
import Charticon from '../../images/icons/piramid.svg'
import Discounticon from '../../images/icons/discount.svg'
import Skillshareicon from '../../images/icons/skillshare.svg'

function Roadmap() {
  return <Wrapper>
    <div className="container-fluid banner my-5 py-5" id='Roadmap'>
        <div className="row text-center">
            <h3 className="display-5 fw-bold mt-2">ROADMAP</h3>
            <p className="text-light mt-3">Thirsty Nation NFTs are designed to bring value to the community supporting Thirst. <br /> The money raised from the NFTs will be used as follows:
            </p>
        </div>
        <div className="row mt-5 flex-column roadmap">
            <div className="vertical-line"></div>
            <div className="col roadmap-card roadmap-card-odd">
                <p className="card-title fw-bold fs-5">Q1 2022</p>
                <div className="title-border"></div>
                <p className="card-text text-light">Launch existing store's collections on 14th May 2022 and fulfil utility value.</p>
                <div className="roadmap-card-icon roadmap-card-icon-even">
                    <img src={Productionicon} alt="icon" />
                </div>
            </div>
            <div className="col roadmap-card roadmap-card-even">
                <p className="card-title fw-bold fs-5">Q2 2022</p>
                <div className="title-border"></div>
                <p className="card-text text-light">Continuing to innovate and increase value given to Nation NFT community including but not limited to: promo days for NFT holders, yearly parties for NFT holders, exclusive/early access for product testing or weekend features, etc)</p>
                <div className="roadmap-card-icon roadmap-card-icon-odd">
                    <img src={Charticon} alt="icon" />
                </div>
            </div>
            <div className="col roadmap-card roadmap-card-odd">
                <p className="card-title fw-bold fs-5">Q3 2022</p>
                <div className="title-border"></div>
                <p className="card-text text-light">Continued value (discounts, updates, promos, early access) to Nation NFT holders via Thirsty Nation Discord</p>
                <div className="roadmap-card-icon roadmap-card-icon-even">
                    <img src={Discounticon} alt="icon" />
                </div>
            </div>
            <div className="col roadmap-card roadmap-card-even mb-5">
                <p className="card-title fw-bold fs-5">Q4 2022</p>
                <div className="title-border"></div>
                <p className="card-text text-light">Product and experience innovation at Thirst to bring increased value to customer</p>
                <div className="roadmap-card-icon roadmap-card-icon-odd">
                    <img src={Skillshareicon} alt="icon" />
                </div>
            </div>
        </div>
    </div>
  </Wrapper>;
}

export default Roadmap;
