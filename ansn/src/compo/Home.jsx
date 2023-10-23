import React from 'react'
import Nav from './Nav'
import Education from "./Education"
import India from "./India"
import Sports from "./Sports"
import Crime from './Crime'
import Top from "./Top"


const Home = () => {
  return (
    <>
      <Nav />
      <div class="breaking-news container">
        <span className='breack-teg'>breackng news:-</span>
        <marquee behavior="" direction="left" class="breaking-news-text"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum iusto vitae autem molestias voluptates, amet aspernatur modi cumque ipsum itaque eos et aliquam est fugit accusamus quis quam magni quia?</marquee>
      </div>
      <img style={{position:"relative", left:"120px"}} src="https://tpc.googlesyndication.com/simgad/5310061630173511184" alt="" />
      <br />
      <div className="hero ">
        <div className="hero-items1">
          <iframe style={{ height: "100%", width: "100%" }} src="https://www.youtube.com/embed/UehhEvtIZow?si=OY84WqeRNtDo9rpV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
        <div className="hero-mini">
          <div className="hero-items2">
            <iframe style={{ height: "100%", width: "100%" }} src="https://www.youtube.com/embed/NV-jAOz7iuA?si=mOaqeE7farsr-KrI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <div className="hero-items3">
            <iframe style={{ height: "100%", width: "100%" }} src="https://www.youtube.com/embed/OO9dzLR0Pj8?si=LA1a1EqD9nBcGYXL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div><br />
      <img style={{position:"relative", left:"120px"}} src="https://s0.2mdn.net/dfp/257985/4667917813/1697002591591/1000X60/1000x60-ribbon-wc.jpg" alt="" />
      <br /><br />
      <div className="section">
        <div className="left"></div>
        <div className="mid">
        <Top/>
<Education/>
<India/>
<Crime/>
<Sports/>
        </div>
        <div className="right"></div>
      </div>

    </>
  )
}

export default Home