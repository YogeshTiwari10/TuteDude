import React from 'react'
import Works from '../Works/Works'
import './Main.scss'
import {
    Link,
  } from "react-router-dom";



const Main = () => {
    return (
        <div className='td__main'>
            <div className='td__main-top'>
                 <div className="wrraper">
                    <div className="wrraper-top">
                    <div className='element_1'>
                        <span className='referral-heading'>Referral Earning</span>
                        <span className='referral-content'>₹ 2,500</span>
                    </div>
                    <div className='element_2'>
                        <span className='referral-heading'>Total Referrals</span>
                        <span className='span2 referral-content'>7</span>
                    </div>
                    <div className='element_3'>
                        <span className='referral-heading'>Wallet Balance</span>
                        <span className='referral-content'>₹ 500</span>
                    </div>
                    </div>
                    <div className='element_4'>
                    <div className='element_5'>
                        <span className='referral-heading'>Wallet Balance</span>
                        <span className='referral-content'>₹ 500</span>
                    </div>
                        <button>Withdraw Balance</button>
                        </div>
                 </div>
                <div className='referal__code'>
                    <span>Your Referral Code</span>
                    <div>EDCH54</div>
                </div>
            </div>
            <div className='td__main-middle'>
                <Works />
            </div>
            <div className='td__main-bottom'>
                <div className='td__friends'>
                <Link to="/friend"> Friends Who Enrolled</Link>
                </div>
                
                <div className='td__tandcond'>
                    {// eslint-disable-next-line
                    }<a href='#'>Terms & Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default Main
