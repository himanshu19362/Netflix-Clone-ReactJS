import React from 'react'
import './Section.css'
// import vid from './../../videos/video1.mp4'

function Section(props) {
  return (
    <div className='section'>
        {props.messageLeft && <div className='message'>
            <h1>{props.heading}</h1>
            <p>{props.message}</p>
        </div>
        }
        <div className='video'>
            <video width="320" height="240" autoPlay loop muted><source src={props.videoUrl} type="video/mp4" /></video>
        </div>

        {!props.messageLeft && <div className='message' style={{"justifySelf": "flex-start"}}>
            <h1>{props.heading}</h1>
            <p>{props.message}</p>
        </div>
        }
    </div>
  )
}

export default Section