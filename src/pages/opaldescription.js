import '../styles/opaldesc.css'
import { useState,useEffect } from 'react';
import avatar from '../avatar.png'
import opalsensors from '../opalsensors.jpg'
export default function OpalDesc(){
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const container = document.querySelector(".desc4ktext");
          const containerOffset = container.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollDistance = window.scrollY;
          const containerHeight = container.offsetHeight;
      
          const containerInView =
            scrollDistance > containerOffset - windowHeight + 100 &&
            scrollDistance < containerOffset + containerHeight - 100;
      
          if (containerInView) {
            container.classList.add("animate");
          }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);




      useEffect(() => {
        const handleScroll = () => {
          const container = document.querySelector(".futuretext-section");
          const containerOffset = container.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollDistance = window.scrollY;
          const containerHeight = container.offsetHeight;
      
          const containerInView =
            scrollDistance > containerOffset - windowHeight + 100 &&
            scrollDistance < containerOffset + containerHeight - 100;
      
          if (containerInView) {
            container.classList.add("animate");
          } 
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);


      

    return(
        <div>
            <div className="desc4k" style={{marginTop: '-2%' , background:'#232323', marginBottom: '-100px'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white'}}>
            <h1 className={`descname`}>UNLIMITED UTILITY</h1>
                <p className="descpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="futureimage-section" style={{marginBottom: '5%' , marginTop: '5%'}}>
            <video class="video-main audience-video" style={{width:'60%'}} id="yiframe" src="https://faceaqses.s3.amazonaws.com/roboads_website/opal-video12.MOV" autoPlay muted loop>
                        </video>    
            </div>
            </div>

            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>ADVERTISING</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            <div className="futureimage-section">
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>


            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>TELEPRESENCE</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                </div>       
                        </div>

            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>CREATE AVATARS</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            <div className="futureimage-section">
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>

            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>SPACE FOR ADD-ONS</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <button className="transparentbuttonwhite" style={{fontSize:'22px'}}>RENT NOW</button>
                    <button className="blackbutton" style={{color:'black', backgroundColor: 'white', fontSize:'22px'}}>VIEW INVENTORY</button>

                </div>       
                        </div>


            <div className="lastsection" style={{backgroundColor:'#f0f0f0', paddingBottom:'20px'}}>
            <div className="text-section">
                    <h1 className='descname'>THE MOST MEMORABLE ADVERTISING EXPERIENCE</h1>
                    <p className='futurepara'><span style={{fontWeight: '900'}}>OPAL</span> mobile robots are one of the most powerful tools on the digital signage advertising scene. With a unique ability to attract attention and interact with targeted audiences, they empower brands, shape customer engagement and lead to action.</p>
                </div>
            <div className="futureimage-section">
            <video class="video-main audience-video" style={{width:'70%'}} id="yiframe" src="https://faceaqses.s3.amazonaws.com/roboads_website/audience11.mp4" autoPlay muted loop>
                        </video>              
                          </div>
                        </div>
            <div className="futuresection">
            <div className="futureimage-section">
            <video class="video-main audience-video" style={{width:'70%'}} id="yiframe" src="https://faceaqses.s3.amazonaws.com/roboads_website/audience11.mp4" autoPlay muted loop>
                        </video>               
                         </div>
                <div className="futuretext-section">
                    <h1 className='descname' style={{width: '80%'}}>THE FUTURE OF DIGITAL SIGNAGE</h1>
                    <p className='futurepara'><span style={{ fontWeight: '900'}}>OPAL</span> can be used at corporate events, conferences, malls, product launches, crowded public places and trade shows. Moving around fully autonomously, the mobile robots engage with the right targets at the right time to deliver the right messages.</p>
                </div>
                        </div>


                        <div className="desc4k" style={{marginTop: '-2%' , background:'#232323', marginBottom: '-100px'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white'}}>
            <h1 className={`descname`}>COMPLETELY AUTONOMOUS</h1>
                <p className="descpara">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            <div className="futureimage-section" style={{marginBottom: '5%' , marginTop: '5%'}}>
            <video class="video-main audience-video" style={{width:'60%'}} id="yiframe" src="https://faceaqses.s3.amazonaws.com/roboads_website/opal-video12.MOV" autoPlay muted loop>
                        </video>    
            </div>
            </div>
            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>DEPTH CAMERA</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
            <div className="futureimage-section">
            <img src='https://www.intelrealsense.com/wp-content/uploads/2019/02/stereo_DT_d435_front-crop1a.png' alt="Avatar" style={{ width: '28rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>

            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src='https://www.ydlidar.com/Public/upload/images/2019-11-15/5dce6efad9164.png' alt="Avatar" style={{ width: '38rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>LiDAR</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                   </div>       
                        </div>

                        <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'5%'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>ULTRASONIC SENSORS</h1>
                    <p className='futurepara'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <button className="transparentbuttonwhite" style={{fontSize:'22px'}}>RENT NOW</button>
                    <button className="blackbutton" style={{color:'black', backgroundColor: 'white', fontSize:'22px'}}>VIEW INVENTORY</button>

                </div>
            <div className="futureimage-section">
            <img src='https://icon-library.com/images/motion-detection-icon/motion-detection-icon-6.jpg' alt="Avatar" style={{ width: '28rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>
                        


                    <div className="desc4k" style={{background: 'white'}}>
                                        <img src={opalsensors} alt="4K Display" style={{ width: '45rem'}} />
                <div className="horizontalbuttoncontainer">
                    <button className="transparentbutton">RENT NOW</button>
                    <button className="blackbutton">VIEW INVENTORY</button>
                </div>
            </div>

        </div>
    )

}