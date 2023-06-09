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
            <h1 className={`descname`}>THE ULTIMATE ADVERTISING MOBILE PLATFORM</h1>
                <p className="descpara">Designed to enhance brand awareness, precision targeting and powerful customer engagement.</p>
            </div>
            <div className="futureimage-section" style={{marginBottom: '5%' , marginTop: '5%'}}>
            <video class="video-main audience-video" style={{width:'60%'}} id="yiframe" src="https://faceaqses.s3.amazonaws.com/roboads_website/opal-video12.MOV" autoPlay muted loop>
                        </video>    
            </div>
            </div>

            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>ADVERTISING</h1>
                    <p className='futurepara' style={{fontSize: '1.2rem'}}>Opal robot is one of the most powerful tools on the digital signage advertising scene. With a unique ability to attract attention and interact with targeted audiences, Opal can empower brands, shape customer engagement and lead to action. Opal can be used at corporate events, retail shops, tradeshows, malls, product launches and crowded public places. Moving around fully autonomously, Opal can engage with the right targets at the right time to deliver the right messages.</p>
                </div>
            <div className="futureimage-section">
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>


            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>TELEPRESENCE</h1>
                    <p className='futurepara'>With Opal's telepresence module, your customer service team can initiate live video calls from anywhere, allowing them to engage with customers in a whole new way. Whether it's providing assistance, answering queries, or offering personalized recommendations, Opal's telepresence feature brings a human touch to your brand's interactions. Seamlessly integrated into Opal's compact design ensuring that your customers receive the highest level of service and support, enhancing their overall experience.</p>
                                </div>       
                        </div>

            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>AVATARS</h1>
                    <p className='futurepara' style={{fontSize: '1.2rem'}}>With Opal's avatar integration, you can bring a whole new dimension to customer interactions. By seamlessly incorporating virtual avatars into Opal's capabilities, you can create engaging and interactive experiences for your audience. Avatars can act as virtual representatives, guiding customers, providing information, or even entertaining them with captivating performances. This innovative integration enables personalized interactions, captivating your customers' attention and leaving a lasting impression. </p>
                </div>
            <div className="futureimage-section">
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>

            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src={avatar} alt="Avatar" style={{ width: '18rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>CUSTOMIZATIONS</h1>
                    <p className='futurepara'>Opal offers a wide range of customization options to suit your specific needs. From games and photobooth experiences to augmented reality (AR) features, ordering kiosks, and queuing systems, Opal provides a diverse array of capabilities to enhance customer engagement. Additionally, Opal's display can seamlessly integrate with third-party APIs, granting access to an extensive range of external resources and services. This integration empowers Opal to deliver a comprehensive and tailored experience that aligns perfectly with your unique requirements.</p>
                    <button className="transparentbuttonwhite" style={{fontSize:'22px'}}>RENT NOW</button>
                    <button className="blackbutton" style={{color:'black', backgroundColor: 'white', fontSize:'22px'}}>VIEW INVENTORY</button>

                </div>       
                        </div>


            <div className="lastsection" style={{backgroundColor:'#f0f0f0', paddingBottom:'20px'}}>
            <div className="text-section">
                    <h1 className='descname'>THE MOST MEMORABLE ADVERTISING EXPERIENCE</h1>
                    <p className='futurepara' style={{fontSize: '1.2rem'}}><span style={{fontWeight: '900'}}>OPAL</span> mobile robots are one of the most powerful tools on the digital signage advertising scene. With a unique ability to attract attention and interact with targeted audiences, they empower brands, shape customer engagement and lead to action.</p>
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


            <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>DEPTH CAMERA</h1>
                    <p className='futurepara' style={{fontSize: '1.2rem'}}>Opal prioritizes security by leveraging advanced depth cameras, enabling the robot to navigate efficiently in busy environments while simultaneously detecting potential obstacles. By utilizing high-level depth cameras, Opal ensures a safe and reliable operation, allowing it to seamlessly maneuver through crowded spaces with precision and awareness. This sophisticated technology enhances the overall safety of Opal, promoting a secure and seamless experience for both the robot and its surroundings.</p>
                </div>
            <div className="futureimage-section">
            <img src='https://www.intelrealsense.com/wp-content/uploads/2019/02/stereo_DT_d435_front-crop1a.png' alt="Avatar" style={{ width: '28rem', marginRight: '5%', textAlign: 'center' }} />                          </div>
                        </div>

            <div className="futuresection" style={{backgroundColor:'#232323', paddingBottom:'20px'}}>
            <div className="futureimage-section" >
            <img src='https://www.ydlidar.com/Public/upload/images/2019-11-15/5dce6efad9164.png' alt="Avatar" style={{ width: '38rem', marginRight: '15%' }} />                 </div>
                <div className="futuretext-section" style={{color: 'white'}}>
                    <h1 className='descname'>LiDAR</h1>
                    <p className='futurepara'>Opal incorporates cutting-edge Lidar technology to enhance its performance and safety. By utilizing Lidar sensors, Opal can accurately perceive its surroundings in real-time, creating a detailed and dynamic map of the environment. This enables Opal to navigate with precision, avoiding obstacles and ensuring a smooth and efficient operation, even in complex and ever-changing settings. The implementation of Lidar technology empowers Opal to deliver a reliable and secure experience, making it an ideal solution for navigating busy environments and delivering exceptional performance.</p>
                                   </div>       
                        </div>

                        <div className="lastsection" style={{backgroundColor:'#232323', paddingBottom:'5%'}}>
            <div className="text-section" style={{color: 'white'}}>
                    <h1 className='descname'>ULTRASONIC SENSORS</h1>
                    <p className='futurepara' style={{fontSize: '1.2rem'}}>Opal is equipped with an advanced ultrasonic sensor that provides unparalleled detection capabilities, starting from a mere 1 centimeter. This ultrasonic sensor enables Opal to accurately sense and identify objects in its vicinity, even those in close proximity. By leveraging this technology, Opal can navigate with precision and avoid potential collisions, ensuring a safe and efficient operation in various environments. The ultrasonic sensor's high sensitivity and precise detection range contribute to Opal's exceptional performance and reinforce its commitment to safety and reliability.</p>
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