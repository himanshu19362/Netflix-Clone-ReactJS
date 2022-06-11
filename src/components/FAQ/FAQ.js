import React from 'react'
import FAQItem from '../FAQ_Item/FAQItem'
import './FAQ.css'

function FAQ() {
    let title1 = "What is Netflix ?"
    let title2 = "How much does Netflix cost ?"
    let title3 = "Where can I watch ?"
    let title4 = 'How do I cancel ?'
    let text1 = `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`

    let text2 = `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`

    let text3 = `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    
    let text4 = `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
    return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <FAQItem title={title1} text={text1}/>
        <FAQItem title={title2} text={text2}/>
        <FAQItem title={title3} text={text3}/>
        <FAQItem title={title4} text={text4}/>

    </div>
  )
}

export default FAQ