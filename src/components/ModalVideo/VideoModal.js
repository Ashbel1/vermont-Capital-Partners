
import React from 'react'
import { Link } from 'react-router-dom'

const VideoModal = () => {
  
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <React.Fragment>
      <div className="video-btn">
        <ul>
          <li>
            <Link onClick={ClickHandler} to="/coming-soon" className="btn-wrap"><i className="fi flaticon-play-buttton" aria-hidden="true"></i></Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default VideoModal;