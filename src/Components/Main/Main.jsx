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
                <div className='earning__dashboard'>
                    <div className='dashboard-top'>
                        <div className='earning__dashboard__col col1'>Referral Earning<span>₹ 2,500</span></div>
                        <div className='earning__dashboard__col col2'>Total Referrals<span>7</span></div>
                        <div className='earning__dashboard__col col3'>Wallet Balance<span>₹ 500</span></div>
                    </div>
                    <div className='dashboard-bottom'>
                        <div className='earning__dashboard__col col21' >Wallet Balance<span>₹ 500</span></div>
                        <div className='btn'><button>Withdraw Balance</button></div>
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
