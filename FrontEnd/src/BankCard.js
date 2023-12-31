import React from 'react'
import './BankCard.css';
import { Link } from 'react-router-dom';

function BankCard() {
  return (
  <div class="wrapper">
        <div class="card px-4">
            <div class=" my-3">
                <p class="h8">Card number</p>
                <p class="text-muted ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div class="debit-card mb-3">
                <div class="d-flex flex-column h-100">
                    <label class="d-block">
                        <div class="d-flex position-relative">
                            <div>
                                <img src="https://www.freepnglogos.com/uploads/visa-inc-logo-png-11.png" class="visa"
                                    alt=""></img>
                                <p class="mt-2 mb-4 text-white fw-bold">Sai Kumar</p>
                            </div>
                            <div class="input">
                                <input type="radio" name="card" id="check"></input>
                            </div>
                        </div>
                    </label>
                    <div class="mt-auto fw-bold d-flex align-items-center justify-content-between">
                        <p>4989 1237 1234 4532</p>
                        <p>01/24</p>
                    </div>
                </div>
            </div>
            <div class="debit-card card-2 mb-4">
                <div class="d-flex flex-column h-100">
                    <label class="d-block">
                        <div class="d-flex position-relative">
                            <div>
                                <img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png"
                                    alt="master" class="master"></img>
                                <p class="text-white fw-bold">Sai Kumar</p>
                            </div>
                            <div class="input">
                                <input type="radio" name="card" id="check"></input>
                            </div>
                        </div>
                    </label>
                    <div class="mt-auto fw-bold d-flex align-items-center justify-content-between">
                        <p class="m-0">5540 2345 3453 2343</p>
                        <p class="m-0">05/23</p>
                    </div>
                </div>
            </div>
            <div class="btn mb-4">
                Book Now
            </div>
        </div>
    </div>
    )
}
export default BankCard