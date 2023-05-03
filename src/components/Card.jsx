/* eslint-disable no-unused-vars */
// import React from "react";
import Pic from "./pic1.jpg";
import Pic1 from "../assets/image-avatar.png";
import './Card.css';

import { ReactComponent as Eath } from "../assets/icon-ethereum.svg";
import { ReactComponent as Eath1 } from "../assets/icon-clock.svg";

    function Card(props) {
    return (
            <div className="card">
                <img className="card-img" src={Pic} alt={props.imageAlt} />
                <div className="card-body">
                    <h3>Equilibruim #3429</h3>
                    <p>Our Equilibrium collection promotes <br />
                        balance and calm.
                    </p>
                </div>
                <div className="card-text">
                    <span >
                    <Eath/>
                    <span className="eth-color" >0.041ETH </span>
                    </span>
                    {/*  */}
                    <span>
                    <Eath1/>
                    <span>3 days left</span>
                    </span>
                </div>
                <br></br>
                <hr color="#8BACD9"></hr>
                <div className="user-card">
                    <img src={Pic1} alt="" />
                    <div>
                        <span>Creation of</span>
                        <span>Jules Wyvern</span>
                    </div>
                    </div>
                
            </div>
    );
    }
    export default Card;
