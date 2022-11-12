import React from 'react'
import './Headerfriend.scss'
import Arrow from '../../Assets/Arrow.png'
import {
    Link,
} from "react-router-dom";

const Headerfriend = () => {

    const NA = "NA"
    return (
        <div className="td__headerbar-items">
            <span>UI/UX &gt; <Link to="/" className='refer-page'>Refer & Earn </Link>&gt; Friends Referred</span>
            <Link to="#/">
                <span className='go__back'><img src={Arrow} alt={NA} />go back</span>
            </Link>
        </div>
    )
}

export default Headerfriend
