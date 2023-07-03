import React from "react";
import './style.css'

const Cards = ()=>{
    return (
        <div class="my-fruits">
            <div class="fruit-div">
               <img src='images/cherries.png' id="fruits"/>
               <p>Cherries: Ksh.10.00</p>
            </div>
            <div class="fruit-div">
                <img src='images/orange.png' id="fruits"/>
                <p>Orange: Ksh 20.00</p>
            </div>
            <div class="fruit-div">
                <img src="images/strawberry.png" id="fruits"/>
                <p>Strawberry: Ksh 50.00</p>
            </div>
        </div>
    );
};

export default Cards;