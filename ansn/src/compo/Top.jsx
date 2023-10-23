import React from 'react'
import top from "../images/top.png"
import Card from "./Mcard"

const Top = () => {
    return (
        <>
            <div className="top">
                <div className="top-news" style={{position:"relative",}}>
                <img src={top} style={{ height: "90px", position:"relative", top:"30px" }} alt="" />
                <button style={{position:"absolute", right:"0px", bottom:"0px", border:"none", backgroundColor:"transparent", textTransform:"capitalize"}}>view all</button>
                </div>

                <hr />
                <div className="top-sections">
                    <div className="top1">
                        <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/10/19/2612152-giant-wheel.jpg?im=Resize=(640,360)" style={{ height: "100%", width: "70%" }} alt="" />
                        <div className="mcard-c" style={{ flexDirection: "column" }}>
                            <div className="mcard">
                                "Innovative technology revolutionizes transportation with the launch of self-driving cars, promising safer and more efficient roads."
                            </div>
                            <div className="mcard">
                                "Space exploration reaches new heights as astronauts set foot on Mars, marking a historic milestone for humanity."
                            </div>
                            <div className="mcard">

                                "Renowned artist's latest masterpiece challenges societal norms and sparks conversations on art's role in culture."!
                            </div>
                        </div>
                    </div>
                    <div className="top2">
                        <div className="macard2">
                            <div className="mcard-2">
                                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/10/20/2612280-rupees.jpg?im=Resize=(160,90)" alt="" />
                                <p>"Scientists make breakthrough in renewable energy, paving the way for a greener, sustainable future."</p>
                            </div>
                            <div className="mcard-2">
                                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/10/20/2612305-fotojet-1.jpg?im=Resize=(160,90)" alt="" />
                                <p>"Record-breaking heatwave hits the western United States, sparking concerns about climate change's impact on weather."</p>
                            </div>
                            <div className="mcard-2">
                                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/10/20/2612269-ganapath-1.jpg?im=Resize=(160,90)" alt="" />
                                <p>
                                    "Global leaders unite to address cybersecurity threats, emphasizing the need for international cooperation and data protection."
                                </p>
                            </div>
                            <div className="mcard-2">
                                <img src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2023/10/16/2611744-israel-war.png?im=Resize=(160,90)" alt="" />
                                <p>"Groundbreaking medical discovery offers hope for a cure to a previously incurable disease, changing lives worldwide."</p>
                            </div>
                        </div>

                    </div>


                </div>

                .
            </div>

        </>
    )
}

export default Top