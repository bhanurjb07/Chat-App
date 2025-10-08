import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
     <div className='chat-user'>
          <img src={assets.profile_richard} alt="" />
          <p>Richard Sanford <img src={assets.blue_dot} alt="" /></p>
          <img src={assets.help_icon} className='help' alt="" />
      </div>

      <div className='chat-msg'>
        <div className='s-msg'>
          <p className='msg'>Lorem ipsum is plaeholder text commenly used in...</p>
          <div>
            <img src={assets.profile_richard} alt='' />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className='s-msg'>
          <img className='msg-img' src={assets.pic1} />
          <div>
            <img  src={assets.profile_richard} alt='' />
            <p>2:30 PM</p>
          </div>
        </div>

        <div className='r-msg'>
          <p className='msg'>Lorem ipsum is plaeholder text commenly used in...</p>
          <div>
            <img src={assets.profile_richard} alt='' />
            <p>2:30 PM</p>
          </div>
        </div>
      </div>


      {/* <--!Bottm!--> */}
      <div className="chat-input">
        <input type='text' placeholder='Send a message' />
        <input type='file' id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor='image' >
          <img src={assets.gallery_icon} alt='' />
        </label>
        <img src={assets.send_button} alt='' />
      </div>

    </div>
  )
}

export default ChatBox
