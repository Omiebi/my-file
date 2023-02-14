import React from "react";
import flag from "../../Resources/images/Flag.png";
import Addmoney from "../../Resources/images/AddMoney.png";
import Sendmoney from "../../Resources/images/sendmoney.png";
import Buy from "../../Resources/images/BuyLogo.png";
import Sell from "../../Resources/images/sellLogo.png";
import Dollar from "../../Resources/images/dollarsign.png";
import Bills from "../../Resources/images/PaybillsLogo.png";
import NftLogo from "../../Resources/images/NFTlogo.png";
import bitcoin from "../../Resources/images/Bitcoinlogo.png";
import eth from "../../Resources/images/ETH.png";
import chainlink from "../../Resources/images/Chainlink.png";
import linechart from "../../Resources/images/linechart.png";
import linechartnew from "../../Resources/images/linechartNew.png";
import linechartpic from "../../Resources/images/linechartpic.png";

import "./Home.css";
import Asset from "../Asset/Asset";
import Button from "../Button/Button";
import Table from "../Table/Table";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className="home">
      <div className="top-container">
        <div className="left-content">
          <h3>Total Fiat Value</h3>
          <div className="fiat">
            <h1>108,569,000.00</h1>
            <div className="button-flag">
              <img src={flag} alt="flag" className="button-icon" />
              <p className="button-NGN">NGN</p>
            </div>

            <div className="money-icon">
              <img src={Addmoney} alt="money-icon" className="money-image" />
              <h3>Add money</h3>
            </div>

            <div className="send-icon">
              <img src={Sendmoney} alt="send-icon" />
              <h3>Send money</h3>
            </div>
          </div>

          <div>
            <div className="home-action">
              <p>Quick Actions</p>
              <span className="more-info">Show more</span>
            </div>
          </div>
          <div className="Home-info">
            <Asset img={Buy} text={"Buy Asset"} />
            <Asset img={Sell} text={"Sell Asset"} />
            <Asset img={Dollar} text={"Dollar Asset"} />
            <Asset img={Bills} text={"Bills Asset"} />
            <Asset img={NftLogo} text={"NftLogo Asset"} />
          </div>
        </div>
        <div className="right-content">
          <div className="card-container">
            <Card
              title="Read Latest Happenings"
              info="Read the lastest gist on crypto and block chain on roqqu Hub"
              buttonText="Learn more"
              top
            />

            <Card
              title="Refer to earn"
              info="Refer your friends and earn 0.5% on all their transactions when they sign up"
              buttonText="Learn more"
              bottom
            />
          </div>
        </div>
      </div>

      <div className="trending-assets">
        <button className="top-trending-assets">Top Trending Assets</button>
        <button className="top-losers">Top Losers</button>
      </div>

      <div className="chain-container">
        <Button img={bitcoin} text="BITCOIN BTC" />
        <Button img={eth} text="ETHEREUM ETH" />
        <Button img={chainlink} text="ChainLink Link" />
      </div>

      <div className="linecharts">
        <button className="linechart-pic">
          <img src={linechart} alt="linechart" />
        </button>
        <button className="linechart-dollar">
          <p>$21,290.32</p>
          <p>0.39%</p>
        </button>

        <div className="linecharts">
          <button className="linechart-pic">
            <img src={linechartnew} alt="linechart" />
          </button>
          <button className="linechart-dollar">
            <p>$21,290.32</p>
            <p>0.39%</p>
          </button>
        </div>

        <div className="linecharts">
          <button className="linechart-pic">
            <img src={linechartpic} alt="linechart" />
          </button>
          <button className="linechart-dollar">
            <p>$21,290.32</p>
            <p>0.39%</p>
          </button>
        </div>
      </div>

      <div>
        <p>More Coins</p>
      </div>

      <Table bitcoin={bitcoin} linechart={linechart} />
    </div>
  );
};

export default Home;
