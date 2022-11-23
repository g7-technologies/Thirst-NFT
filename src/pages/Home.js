import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActionsGold";
import { fetchData } from "../redux/data/dataActions";

// import components 
import Topnav from "../components/Topnav/Topnav";
import Button from "../components/Button/Button";
import Nftgallary from "../components/Nftgallary/Nftgallary";
import Raritylevels from "../components/Raritylevels/Raritylevels";
import How_it_Works from "../components/How_it_Works/How_it_Works";
import Utility_Value from "../components/Utility_Value/Utility_Value";

// import images and icons 
import Bannerimg from '../images/header_banner.svg'
import Aboutimg from "../images/about_us_banner.svg"
import Roadmap from "../components/Roadmap/Roadmap";
import Nftcollections from "../components/Nftcollections/Nftcollections";
import Footer from "../components/Footer/Footer";


function Home() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    DEEPLINK: "",
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config_gold.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);
// counter function
const [ counter, setCounter ] = useState(1)
function decrementCounter () {
    if(counter <= 1) {
        setCounter(1);
    }else {
        setCounter(counter - 1);
    }
}

  return (
    <>
      <Topnav />
      <div className="container-fluid m-0 banner" id="Home">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center banner-text-section">
            <div>
              <h1 className="banner-heading mt-1">Thirst NFTs</h1>
              <p className="text-light fs-6">NFTs that are iconic Thirst characters that the Thirsty Nation can OWN! Owners have access to</p>
              <ul>
                <li>NFT Item free every day from all Thirst stores (drink NFTs can be redeemed for any drink/mixer).</li>
                <li>10%-25% off at all Thirst stores.</li>
                <li>Access to an exclusive Thirsty Nation community with access, insights, exclusive promotions and more.</li>
                <li>Nostalgic "player card" and RESALE value to own a piece of Thirst history/memorabilia.</li>
              </ul>
              <p className="text-light fs-6">Minting is LIVE NOW! Meet the characters and LEARN more below!</p>
            </div>
          </div>
          <div className="col-lg-6 banner-img">
            <img src={Bannerimg} alt="banner" />
          </div>
        </div>
      </div>
      <Utility_Value />
      <div className="container-fluid banner mt-5 mb-5" id="About_Us">
        <div className="row text-center">
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div className="w-md-75 about-us-img">
              <img src={Aboutimg} alt="someone"/>
            </div>
          </div>
          <div className="col-lg-7">
            <h2 className="display-3 text-light mt-5">About</h2>
            <p className="text-black mt-4 p-4">We brought to life 25 of our signature menu items as digital tokens to represent a piece of history AND to give massive utility value for customers each store we open. Thirst customers (otherwise known as the Thirsty Nation) can now be part of an even deeper community of Thirst lovers by owning an NFT. This project was designed FOR the Thirsty Nation to say THANK YOU. Thank you for following along, supporting the journey, and helping make the dream of Thirst come to life. Behind each menu item character is a personality and one of three different rarity levels. The Thirsty Nation can represent one of these characters and reap the benefits of in-store value that ownership of it holds.
            <br/>Each collection will represent a Thirst store and its location number. Each collection will have 25 different characters (available in 3 different rarity levels each for a total of 75 per collection) that are inspired by signature menu items. Thirst NFT's will be minted for $400-$800 each based on the rarity level (plus gas fees).</p>
          </div>
        </div>
      </div>
      <How_it_Works />
      <Nftgallary />
      <Raritylevels />
      <Roadmap />
      <Nftcollections />
      <Footer />
    </>
  );
}

export default Home;