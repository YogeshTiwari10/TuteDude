import React from 'react'
import './Friends.scss'
import rectangle from '../../Assets/rectangle.png'

const Friends = () => {
  const NA="NA"
  return (
    <>
    <div className='main__body'>

      <div className='referals__friends'>
        <div className='referals__friends__code'>
          <div className='code-name'>Referal Code</div>
          <div className='code-number'>E D C H 5 4</div>
        </div>
        <div className='balance'>
          <div className='balance-name'> Wallet Balance</div>
          <div className='balance-amount'>₹ 500</div>
        </div>
      </div>

      <div className="enrolled">
        <span> Friends Who Enrolled (3)</span>
        <div className="enrolled-list">
          <div className='box'>
          <div className="row1">
              <span>Dhiraj Saxena</span>
              <span>14 Sept, 2022</span>
            </div>
            <div className="row2"><span>Courses Enrolled(6)</span></div>
            <div className="row3">
              <span>UI/UX</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
            </div>
            <div className="row4">
              <span>Phython</span>
              <span>MERN</span>
              <span>Java</span>
            </div>
            <div className="row5">
              <span>Referral Amount</span><span>&nbsp;&nbsp;₹185</span>
            </div>
          </div>
          <div className='box'>
            <div className="row1">
              <span>Subhash Mishra</span>
              <span>15 Sept, 2022</span>
            </div>
            <div className="row2"><span>Courses Enrolled(23)</span></div>
            <div className="row3">
              <span>UI/UX</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <img src={rectangle} alt={NA} className="referral-scrollbar"></img>

            </div>
            <div className="row4 row42">
              <span>Phython</span>
              <span>MERN</span>
              <span>Java</span>
              <span>C++</span>
            </div>
            <div className="row5">
              <span>Referral Amount</span><span>&nbsp;&nbsp;₹485</span>
            </div>
          </div>
          <div className='box'>
          <div className="row1">
              <span>Prafull Kumar</span>
              <span>16 Sept, 2022</span>
            </div>
            <div className="row2"><span>Courses Enrolled(23)</span></div>
            <div className="row3">
              <span>UI/UX</span>
              <span>Photoshop</span>
              <span>Illustrator</span>
              <img src={rectangle} alt={NA}  className="referral-scrollbar"></img>

            </div>
            <div className="row4 row42">
              <span>Phython</span>
              <span>MERN</span>
              <span>Java</span>
              <span>C++</span>
            </div>
            <div className="row5">
              <span>Referral Amount</span><span>&nbsp;&nbsp;₹185</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="footer"><span>Terms & Conditions</span></div>
      </>
  )
}

export default Friends
