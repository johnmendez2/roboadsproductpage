import '../styles/opaldesc.css'
import { useState,useEffect } from 'react';
import avatar from '../avatar.png'
export default function OpalMobDesc(){
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
             <div className="desc4k" style={{marginTop: '-2%' , background:'#232323'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white'}}>
            <h1 className={`descname`}>COMPLETELY AUTONOMOUS</h1>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
                       </div>
            <div className="desc4k" style={{backgroundColor:'#232323'}}>
            <div className="desc4ktext" style={{color: 'white'}}>
                    <h1 className='descname'>DEPTH CAMERA</h1>
                    <p className='descpara' style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className='headersection'>
                    <img src='https://www.intelrealsense.com/wp-content/uploads/2019/02/stereo_DT_d435_front-crop1a.png' alt="Avatar"style={{ width: '58%' }} />
                    </div>
                                    </div>

            <div className="desc4k" style={{backgroundColor:'#232323'}}>
                           <div className="desc4ktext" style={{color: 'white'}}>
                    <h1 className='descname'>LiDAR</h1>
                    <p className='descpara' style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                   </div>
                                   <div className='headersection'>
                    <img src='https://www.ydlidar.com/Public/upload/images/2019-11-15/5dce6efad9164.png' alt="Avatar"style={{ width: '58%' }} />
                    </div>       
                        </div>

                        <div className="desc4k" style={{backgroundColor:'#232323', paddingBottom:'5%'}}>
            <div className="desc4ktext" style={{color: 'white'}}>
                    <h1 className='descname'>ULTRASONIC SENSORS</h1>
                    <p className='descpara' style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className='headersection'>
                    <img src='https://icon-library.com/images/motion-detection-icon/motion-detection-icon-6.jpg' alt="Avatar"style={{ width: '58%' }} />
                    </div>  
                    <button className="transparentbuttonwhitemob" style={{fontSize:'4vw'}}>RENT NOW</button>
                    <button className="blackbuttonmob" style={{color:'black', backgroundColor: 'white', fontSize:'4vw', border: '2.4px solid white'}}>VIEW INVENTORY</button>
                    
                </div>
                                   </div>
                        


                    <div className="desc4k">
            <div className='desc4ktext'>
            <h1                     className={`descname`}>FLEXIBLE 4K DISPLAY</h1>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
                                                       <div className="horizontalbuttoncontainermob" style={{marginBottom:'5%'}}>
                    <button className="transparentbuttonmob" style={{fontSize:'3.8vw'}}>RENT NOW</button>
                    <button className="blackbutton" style={{fontSize:'3.8vw'}}>VIEW INVENTORY</button>
                </div>
            </div>
            <div className="desc4k" style={{marginTop: '-2%' , background:'#232323'}}>
            {/* <div className="desc4k" style={{marginTop: '-2%' , background:'linear-gradient(171.8deg, rgb(5, 111, 146) 13.5%, rgb(6, 57, 84) 78.6%)'}}> */}
            <div className='desc4ktext' style={{color:'white',padding: '10px'}}>
            <h1 className={`descname`}>UNLIMITED UTILITY</h1>
                <p className="descpara" style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
            </div>
            </div>
            <div className="desc4k" style={{backgroundColor:'#232323'}}>
                <div className="desc4ktext" style={{color: 'white',padding: '10px'}}>
                    <h1 className='descname'>TELEPRESENCE</h1>
                    <p className='descpara' style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className='headersection'>
                    <img src={avatar} alt="Avatar"style={{ width: '58%' }} />
                    </div>
                                </div>       
                        </div>

                        <div className="desc4k" style={{backgroundColor:'#232323'}}>
                <div className="desc4ktext" style={{color: 'white',padding: '10px'}}>
                    
                    <h1 className='descname'>CREATE AVATARS</h1>
                    <p className='descpara' style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className='headersection'>
                    <img src={avatar} alt="Avatar"style={{ width: '58%' }} />
                    </div>
         
                                </div>       
                        </div>

            <div className="desc4k" style={{backgroundColor:'#232323'}}>
                <div className="desc4ktext" style={{color: 'white', padding: '10px'}}>
                    <h1 className='descname'>SPACE FOR ADD ONS</h1>
                    <p className='descpara' style={{paddingLeft: '0', width: '100%', fontSize: '1.3rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div className='headersection'>
                    <img src={avatar} alt="Avatar"style={{ width: '58%' }} />
                    </div>
                    <div className="horizontalbuttoncontainermob" style={{marginBottom:'5%'}}>
                    <button className="transparentbuttonwhitemob" style={{fontSize:'3.8vw'}}>RENT NOW</button>
                    <button className="blackbutton" style={{color:'black', backgroundColor: 'white', fontSize:'4vw', border: '2.4px solid white'}}>VIEW INVENTORY</button>
                </div>
                </div>       
                        </div>


            <div className="lastsection" style={{backgroundColor:'#f0f0f0', paddingBottom:'20px'}}>
            <div className="text-section" style={{marginLeft: '0px', padding: '15px'}}>
                    <h1 className='descname'>THE MOST MEMORABLE ADVERTISING EXPERIENCE</h1>
                    <p className='futurepara' style={{fontSize:'1.3rem', width: '100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                        </div>
                        
                        <div className="lastsection" style={{backgroundColor:'#f0f0f0', paddingBottom:'20px', padding: '10px'}}>
            <div className="text-section" style={{marginLeft: '0px', padding: '15px'}}>
                    <h1 className='descname'>THE FUTURE OF DIGITAL SIGNAGE</h1>
                    <p className='futurepara' style={{fontSize:'1.3rem', width: '100%'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                        </div>

        </div>
    )

}