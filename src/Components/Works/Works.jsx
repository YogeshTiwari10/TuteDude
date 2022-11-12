import React from 'react'
import './Works.scss'
import Invite from '../../Assets/invite.png'
import Discount from '../../Assets/discount.png'
import Purchase from '../../Assets/purchase.png'
import Rupee from '../../Assets/rupee.png'
import Wallet from '../../Assets/wallet.png'
const Works = () => {
    const notava = "NA"
    return (
        <div className='work'>
            <span className='work__heading'>How Does It Work?</span>
            <div className='work__item'>
                <div className='itemcol item1'>
                    <div className='img-div'> <div> <img src={Invite} alt={notava} /> </div></div>
                    <div className='subdiv'>
                        <div className="item-heading">Invite your Friends</div>
                        <div className="item-content">Share the link tutedude.com with
                            your friends</div>
                    </div>
                </div>
                <div className='itemcol item2'>
                <div className='img-div'> <div> <img src={Purchase} alt={notava} /> </div></div>
                    <div className='subdiv'>
                        <div className="item-heading">Friend purchases any course</div>
                        <div className="item-content">Using you REFERRAL CODE in the payments page</div>
                    </div>
                </div>
            </div>
            <div className='work__item'>
                <div className='itemcol item3'>
                    <div className='img-div'> <div> <img src={Rupee} alt={notava} /> </div></div>
                    <div className='subdiv'>
                        <div className="item-heading">You get ₹ 200 as referral money</div>
                        <div className="item-content">Of total purchase the friend makes sharebale to your wallet</div>
                    </div>
                </div>
                <div className='itemcol item4'>
                    <div className='img-div'> <div> <img src={Discount} alt={notava} /> </div></div>
                    <div className='subdiv'>
                        <div className="item-heading">Your Friend gets ₹ 200 Off </div>
                        <div className="item-content">On his overall fee on successful purchase using your referral code </div>
                    </div>
                </div>
            </div>
            <div className='work__item'>
                <div className='itemcol item5'>
                    <div className='img-div'> <div> <img src={Wallet} alt={notava} /> </div></div>
                    <div className='subdiv'>
                        <div className='item-heading'>Transfer money from wallet</div>
                        <div className="item-content">When the wallet balance reaches ₹200 or more, you can withdraw it</div>
                    </div>
                </div>
                <div className='itemcol item5'>&nbsp;&nbsp;</div>
            </div>
        </div>
    )
}

export default Works
