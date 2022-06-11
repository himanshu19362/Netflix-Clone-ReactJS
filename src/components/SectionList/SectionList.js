import React from 'react'
import Section from '../Section/Section'

function SectionList() {
    let url1 = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
    let url2 = "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
    

    let heading1 = "Enjoy on your TV."
    let heading2 = "Watch everywhere."
    // let heading3 = "Enjoy on your TV"

    let message1 = 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.'
    let message2 = 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'

  return (
    <div className='section-list'>
        <Section messageLeft={true} videoUrl={url1} heading={heading1} message={message1}/>
        <Section messageLeft={false} videoUrl={url2} heading={heading2} message={message2}/>
        
        
        {/* <Section messageLeft={true} videoUrl={url1} heading={heading1}/>
        <Section messageLeft={true} videoUrl={url1} heading={heading1}/> */}
    </div>
  )
}

export default SectionList
