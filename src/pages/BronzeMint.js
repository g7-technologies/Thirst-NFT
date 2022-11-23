import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActionsBronze";
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

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

function BronzeMint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click Mint Now to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xEc22f7CFc3deba665fDDC003D5bfAB1aEA398C8c",
    SCAN_LINK: "https://etherscan.io/address/0xEc22f7CFc3deba665fDDC003D5bfAB1aEA398C8c",
    NETWORK: {
      NAME: "Ethereum",
      SYMBOL: "Eth",
      ID: 1,
    },
    NFT_NAME: "Thirst NFT Bronze",
    SYMBOL: "TNFTB",
    MAX_SUPPLY: 125,
    WEI_COST: 330000000000000000,
    DISPLAY_COST: 0.33,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
    DEEPLINK: "https://metamask.app.link/dapp/thirstnfts.com/MblBronzeMint",
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
    if (newMintAmount > 5) {
      newMintAmount = 5;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config_bronze.json", {
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
        <div className="row h-100 d-inline-block">
          <div className="col-lg-12 banner-text-section d-flex justify-content-center">
            <div>
              <h1 className="banner-heading mt-1 d-flex justify-content-center">Bronze Thirst NFTs</h1>
              {/*<p className="text-light fs-6">NFTs that are Thirst characters that YOU can own. Owners have access to</p>
              <ul>
                <li>Huge discounts and utility value at Thirst stores.</li>
                <li>A deeper Thirsty Nation community with early access, insights, exclusive promotions and more.</li>
                <li>Nostalgic "player card" and RESALE value to own a piece of Thirst history/memorabilia.</li>
              </ul>*/}
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <p className="fs-4 d-flex justify-content-center">
                    The sale has ended.
                  </p>
                  <p className="fs-4 d-flex justify-content-center">
                      You can still find {CONFIG.NFT_NAME} on
                  </p>
                  <div className="d-flex justify-content-center banner-counter-button">
                    <div>
                      <button className="mint-button" target={"_blank"} href={CONFIG.MARKETPLACE_LINK}>
                        {CONFIG.MARKETPLACE}
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="fs-6 d-flex justify-content-center">
                    1  {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}. Excluding gas fees.
                  </p>
                  <p className="fs-6"></p>
                    {blockchain.account === "" || blockchain.smartContract === null ? (
                      <div style={{ alignItems: "center", width: "100%" }}>
                        <div className="d-flex justify-content-center banner-counter-button">
                          <div>
                          {(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ?
                            <a target={"_blank"} href={CONFIG.DEEPLINK} className="mint-button">
                              Connect
                            </a>
                            :
                            <button className="mint-button" onClick={(e) => {
                                e.preventDefault();
                                dispatch(connect());
                                getData();
                              }}>
                              Connect
                            </button>
                          }
                          </div>
                        </div>
                        <p className="fs-6 mt-2 d-flex justify-content-center">
                            Connect to the {CONFIG.NETWORK.NAME} network
                        </p>
                        {blockchain.errorMsg !== "" ? (
                          <>
                            <p className="fs-6">
                              {blockchain.errorMsg}
                            </p>
                          </>
                        ) : null}
                      </div>
                    ) : (  
                      <>
                        <p className="fs-4 d-flex justify-content-center">
                          NFTs Minted :  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                        </p>
                        <div className="d-flex justify-content-center banner-counter-button">
                          <div className="banner-counter">
                            <button className="subtractOne" onClick={decrementMintAmount}> - </button>
                            <input type="number" className="inputField" min="1" step="1" id="nft_amount" readOnly value={mintAmount} onChange={(e) => { setCounter(e.target.value) }} />
                            <button className="addOne" onClick={incrementMintAmount}>+</button>
                          </div>
                          <div className="mx-sm-5">
                            <button className="mint-button" onClick={(e) => {
                                e.preventDefault();
                                claimNFTs();
                                getData();
                              }}>{claimingNft ? "Minting In Process" : "Mint Now"}
                            </button>
                          </div>
                        </div>
                        <p className="fs-6 mt-2 d-flex justify-content-center">
                          {feedback}
                        </p>
                      </>
                    )
                  }
                </>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center banner-counter-button">
            <CrossmintPayButton
                collectionTitle="Thirst NFT Bronze"
                collectionDescription="Thirst NFT is a unique collection 125 handmade nft's."
                collectionPhoto="https://thirstnfts.com/thirst_nft_collection.png"
                clientId="7c49dd8f-fa0e-463e-9bba-d26f6ad16912"
                mintConfig={{"type":"erc-721","totalPrice":"0.33","_mintAmount":"1"}}
                className="crossmint-button"
            />
          </div>
          <div className="col-lg-12">
            <img src={Bannerimg} alt="banner" />
          </div>
        </div>
      </div>
    </>
  );
}

export default BronzeMint;