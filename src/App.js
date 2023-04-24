import logo from './images/logo.png';
import googleplay from './images/google-play.png'
import applestore from './images/app-store.png'

import mobile from './images/mckup-img-a.png'
import card1 from './images/quick.png'
import card2 from './images/secure.png'
import card3 from './images/saving.png'
import card4 from './images/247.png'
import mobile2 from './images/sec-mobile.png'

import gstore from './images/an-badge.png'
import istore from './images/is-badge.png'
import team_cover from './images/team-cover.png'

// import whtsp from './images/wapps.png'

import './App.css';
import { BsAndroid2, BsApple, BsFillEnvelopeAtFill, BsFillGeoAltFill, BsFillRocketTakeoffFill, BsFillTelephoneFill, BsPlayCircle } from "react-icons/bs";
import { FaCogs, FaUsers } from "react-icons/fa"
import Footer from './Footer';



import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Collapse } from 'react-bootstrap';
import Particle from './components/Particle';
import $ from 'jquery'
// import MobileFooter from './MobileFooter';
import ScreenSlide from './components/ScreenSlide';
import { useState } from 'react';
// import ScreenSlide from './components/ScreenSlide';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  $(function () {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 50) {
        $(".header").addClass("active");
        $(".nav-text-color").addClass('nav-text-color2');
      }
      else {
        //remove the background property so it comes transparent again (defined in your css)
        $(".header").removeClass("active")
        $(".nav-text-color").removeClass('nav-text-color2');
      }
    });
  });

  return (
    <>
      <section >
        <div className='animatin-bg' width="100vw" height='100vh' >
          <Particle  /> 
          {['md'].map((expand) => (

            <Navbar key={expand} expand={expand} className='nav-sec header shadow ' style={{ height: '70px', position: 'fixed', top: 0, width: '100%', zIndex: '10' }}>
              <Container className=''>

                <Navbar.Brand href="#">
                  <div className=' App-logo-div shadow'>
                    <img className='App-logo p-2' src={logo} alt="logoimg" />
                  </div>
                </Navbar.Brand>
                <Navbar.Toggle style={{ backgroundColor: '#009d3c' }} aria-controls='navbarScroll' />
                <Navbar.Collapse id="navbarScroll " className=' text-dark  text-center'  >
                  <Nav className="justify-content-end flex-grow-1 back-drop " style={{ zIndex: '200' }}>
                    <Nav.Link className="nav-text-color nav-hover" id='s1' href="#1" onClick={toggle}> WELCOME </Nav.Link>
                    <Nav.Link className="nav-text-color nav-hover" id='s2' href="#2">FEATURES</Nav.Link>
                    <Nav.Link className="nav-text-color nav-hover" id='s3' href="#3">OVERVIEW</Nav.Link>
                    <Nav.Link className="nav-text-color nav-hover" id='s4' href="#4">SPECIFICATION</Nav.Link>
                    <Nav.Link className="nav-text-color nav-hover" id='s5' href="#5">SCREENSHOTS</Nav.Link>
                    <Nav.Link className="nav-text-color nav-hover" id='s6' href="#6">TEAM</Nav.Link>
                    <Nav.Link className="nav-text-color nav-hover" id='s7' href="#7">CONTACT US</Nav.Link>
           
                    <Nav.Link className='nav-icon-btns' rel="noopener noreferrer" target='_blank'
                      href='https://play.google.com/store/apps/details?id=manalsoftech.com.cargoproject'>
                      <img style={{ width: '40px', marginTop: '-5px' }} src={googleplay} alt='googleplayimg'></img>
                    </Nav.Link>


                    <Nav.Link className='nav-icon-btns' rel="noopener noreferrer" target='_blank'
                      href='https://apps.apple.com/us/app/gocaargo/id1500122344'><img className='' src={applestore}
                        style={{ width: '32px' }} alt='googleplayimg'></img>
                    </Nav.Link>
                  


                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          ))}


       
            <div className='container' id='1'>
              <div className='home-sec  row mt-5'>
                <div className='col-md-8 mt-5 text-white'>
                  <h1 className='bold mt-5 main-text-home' >Move anywhere faster, Cheaper, Secure</h1>

                  <div className='d-flex container mt-5 home-btn' >
                    <button className=' btn text-white'>
                      <span className='text-white' style={{ fontSize: '50px' }} > <BsPlayCircle /> </span>watch Intro
                    </button>
                    <button className=' home-get-btn ms-2'  >
                      Get Now
                    </button>
                  </div>

                </div>
                <div className='col-md-4 img-hide1' style={{ textAlign: 'right' }}>
                  <img className=' mt-5' style={{ height: '70%' }} src={mobile} alt='mo-bile'></img>
                </div>
              </div>
            </div>
          </div>
 

        {/* FEATUER section -START- */}
        <div className='Container bg-white p-2' id='2' style={{ scrollMarginTop: '0px' }}   >
          <div className='card-main mt-5'  >
            <h1 className='text-center bold mt-5 p-5 '>
              Go Caargo Features
            </h1>
            <h5 className='text-center text-secondary'>
              Core of the apps
            </h5>
            <div className="container mt-5 mb-5 d-flex justify-content-center">

              <div className="row g-0">

                <div className="col-md-3 border-right">
                  <div className="cards">
                    <div className="first bg-white p-4 text-center">
                      <img src={card1} alt='cardimages' />

                      <h5 className='mt-2'>Quick Fix</h5>
                      <p className="line1 mt-3 bold fs-6 text-secondary">No App Switching to get best rates needed all taxi are available on one app.</p>

                    </div>
                  </div>
                </div>

                <div className="col-md-3 border-right">
                  <div className="cards">
                    <div className=" second bg-white p-4 text-center">
                      <img src={card2} alt='cardimages' />

                      <h5 className='mt-2'>Be Secure</h5>
                      <p className="line2 mt-3 bold fs-6 text-secondary">No Need To Pay heavy Brokerage Freight Insurance Available on Lowest rate .</p>

                    </div>
                  </div>

                </div>
                <div className="col-md-3 border-right">
                  <div className="cards">
                    <div className=" second bg-white p-4 text-center">
                      <img src={card3} alt='cardimages' />

                      <h5 className='mt-2'>Saving Is Earning</h5>
                      <p className="line2 mt-3 bold fs-6 text-secondary">Get Quotes . Just Compare and Select , Get the most economical rates .</p>

                    </div>
                  </div>

                </div>

                <div className="col-md-3">

                  <div className="cards">
                    <div className=" third bg-white p-4 text-center">
                      <img src={card4} alt='cardimages' />
                      <h5 className='mt-2'>24/7</h5>
                      <p className="line3 mt-3 bold fs-6 text-secondary">We are Serving you all around the clock .Get Quotes anytime through App.</p>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
        {/* FEATUER section -End- */}


        {/* OVERVIEW section  -START- */}
        <div className='overview-sec   bg-light' id="3" style={{ scrollMarginTop: '30px' }}>
          <div className='container p-3'>
            <div className=''>
              <h1 className='text-center p-5'>About App</h1>
            </div>

            <div className='row '>
              <div className='col-md-6 text-center' >

                <img className='about-mobile mt-5  ' src={mobile}  alt='mobileimage'></img>
              </div>
              <div className='col-md-6 mt-5 '>

                <h1 className=' text-set2 about-set mt-5'>
                  Manage Travel, Manage Money, Manage Time from anywhere.
                </h1>
                <p className='mt-5 text-secondary bold'>
                  A single app which support all your travel and transport needs , no need to install numerous apps for commute of man and material .
                </p>

                <div className=' '>
                  <div className="btn-holder d-flex  mt-5 ">


                    <div className=''>
                      <button className="glow-on-hover ms-2  p-2 mt-2" type="button" >
                        <a rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none', color: 'white', zIndex: '1' }} className=" mks-btn " href="https://play.google.com/store/apps/details?id=manalsoftech.com.cargoproject">
                          <p className="bwicon"> <BsAndroid2 className=' ml-2' /> Available on<p className='ms-auto fs-4'>google store</p></p></a>

                      </button>

                      <button className="glow-on-hover me-auto ms-2 mt-2 p-2" type="button">
                        <a rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none', color: 'white' }} className=" mks-btn " href="https://apps.apple.com/us/app/gocaargo/id1500122344">
                          <p className="bwicon"> <BsApple className='' /> Available on <p className='fs-4'>  Apple store</p></p></a>

                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* OVERVIEW section  -END- */}


        {/* SPECIFICATION section START */}
        <div className='specifi-sec bg-white'>
          <div className='container ' id="4" style={{ scrollMarginTop: '70px' }}>
            <h1 className='text-center bold p-4 specifi-heading'>
              Why Go Caargo ?
            </h1>
            <div className='container'>
              <p className='bold text-center fs-6 text-secondary'>
                All Modes of transport are available on a single app , whether its Air , Road , or Rail , just wait for a while we will be able support you in your water travel too

              </p>
            </div>
            <div className='row speci-rev  p-4'>
              <div className='col-md-6 text-center'>
                <div className='specifi-img d-flex mt-5'>
                  <img className='' src={mobile} alt='SPECIFICATION' style={{ width: '55%', marginLeft: '30px' }} />
                  <img className='' src={mobile2} style={{ width: '55%', marginLeft: '-100px' }} alt='SPECIFICATION'></img>
                </div>
              </div>
              <div className='col-md-6 '>
                <div className='d-flex mt-5 speci-rev '>
                  <div className='specifi-span-round text-white mx-3'>
                    <span className='fs-1 p-3'><FaUsers /></span>
                  </div>
                  <div>
                    <h5 className='bold'>Zero swap</h5>
                    <h5 className='text-secondary '>
                      All modes of travel on a single app no need to fill up your wallpaper covered with different app for travel solution , looking for best rates and invest your valuable time.s
                    </h5>
                  </div>

                </div>
                <div className='d-flex mt-3 speci-rev '>
                  <div className='specifi-span-round text-white mx-3 '>
                    <span className='fs-1 p-3'><BsFillRocketTakeoffFill /></span>
                  </div>
                  <div>
                    <h5 className='bold'>BE SURE</h5>
                    <h5 className='mt-2 text-secondary'>
                      Worried about cargo theft , insurance premium looks heavy , gocaargo is providing free insurance , save on brokerage and let the legal hassle on us.
                    </h5>
                  </div>


                </div>
                <div className='d-flex mt-3'>
                  <div className='specifi-span-round text-white mx-3'>
                    <span className='fs-1 p-3'><FaCogs /></span>
                  </div>
                  <div>
                    <h5 className='bold'>Book Anytime</h5>
                    <h5 className='mt-2 text-secondary'>
                      No need to wait till next morning and call numerous transporters to get the best freight transport price . we are available 24/7 put your requirement on the app and get quotes directly to your in box.
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* SPECIFICATION section END */}


        {/* SCREENSHOT section START */}
        <div className='screen-sec bg-light'>
          <div className='container' id='5' style={{ scrollMarginTop: '50px' }}>
            <div className='screenshot-sec '>

              <h1 className='text-center bold display-4 p-4'> Screenshot </h1>
              <h5 className='text-center text-secondary '> Easiest Sleek interface</h5>
            </div>
            <div className=' '  >

            <ScreenSlide />
          </div>

          </div>
          



        </div>
        {/* SCREENSHOT section END */}


        {/* DOWNLOAD section START */}
        <div className='download-sec'>
          <div className='container p-5 '>
            <h1 className='text-center text-white mt-3'>
              <p className='p-4 text-white'> Download Now </p>
            </h1>
            <h5 className='text-center text-white mt-3'>
              Download our Go Caargo App from Google play <br /> store and get amazing cashback offers.
            </h5>
            <div className='text-center mt-4'>

              <a className='btn mb-5' rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none', background: 'none' }} href="https://apps.apple.com/us/app/gocaargo/id1500122344"  > <img className='' src={istore} alt='applestore'></img> </a>
              <a className='btn mb-5' rel="noopener noreferrer" target='_blank' style={{ textDecoration: 'none', background: 'none' }} href='https://play.google.com/store/apps/details?id=manalsoftech.com.cargoproject' > <img src={gstore} className='' alt='googleplay'></img> </a>
            </div>
          </div>


        </div>
        {/* DOWNLOAD section END */}


        {/* Our TEAM section START */}
        <div className='team-sec bg-white p-4' id='6' style={{ scrollMarginTop: '20px' }} >
          <div className='container'>
            <h1 className='text-center p-5'>Our Team
            </h1>  <h5 className='text-center mt-3 text-secondary'>Meet Innovative people</h5>



            <div className='col-md-12'>
              < div className='row container'>
                <div className='col-md-3 '>
                  <div className='team-leader-1 ' >
                    <img className='team-cover  teams' style={{ width: '100%', height: '100%' }} src={team_cover} alt='teamimage'></img>
                  </div>
                  <p className='fs-5  text-center'> Kamran Khan <p className='fs-5 bold text center text-secondary'> Founder & CEO </p></p>
                </div >


                <div className='col-md-3'>
                  <div className='team-leader-2  ' >
                    <img className='team-cover  teams' style={{ width: '100%', height: '100%' }} src={team_cover} alt='teamimage' ></img>
                  </div>
                  <p className='fs-5  text-center'> Varsha Chourasia <p className='fs-5 bold text center text-secondary'> Director & CEO </p></p>
                </div>


                <div className='col-md-3'>
                  <div className='team-leader-3  '>
                    <img className='team-cover teams' style={{ width: '100%', height: '100%' }} src={team_cover} alt='teamimage' ></img>
                  </div>
                  <p className='fs-5  text-center'> Irfan Khan <p className='fs-5 bold text center text-secondary'> Project Manager </p></p>


                </div>

                <div className='col-md-3 '>
                  <div className='team-leader-4  ' >
                    <img className='team-cover teams' style={{ width: '100%', height: '100%' }} src={team_cover} alt='teamimage'></img>
                  </div>
                  <p className='fs-5  text-center'> Furkan Khan <p className='fs-5 bold text center text-secondary'> CFO</p></p>

                </div>

              </div>



            </div>
          </div>
        </div>
        {/* OUR TEAM section END */}


        {/* CONTACT section START */}
        <div className='contact-sec darkns ' id='7' style={{ scrollMarginTop: '30px' }}>
          <div className='container  text-white'>
            <h1 className='text-center bold p-5 text-set'>Contact us
              <p className='text-center fs-5 bold mt-3 text-set'> Feel free to contact</p></h1>


            <div className='row showdark text-set mt-3'>
              <div className='col-md-6 mt-5'>
                <p className='fs-5 te'><BsFillTelephoneFill className='fs-2 ms-2 green' /> +91 76 92 86 86 86</p>

                <p className='fs-5 mt-4'><BsFillEnvelopeAtFill className='fs-2 ms-2 green' /> info@gocaargo.com</p>

                <p className='fs-6 mt-4'><span className='bold fs-5'> <BsFillGeoAltFill className='fs-2 ms-2 green' /> QUMBA TRANSPORT AND TECHNOLOGY PVT LTD <br />
                  <p className='ms-5'>D-79, shopping Complex Above SBI ATM, Neaar LIG Gurudwara AB ROAD, LIG, INDORE </p></span> </p>

                <p className='fs-6 mt-4'><span className='bold fs-5'> <BsFillGeoAltFill className='fs-2 ms-2 green' /> Corporate Office <br />
                  <p className='ms-5'>2nd Floor, 60, Opp. New Gurudwara, Freeganj, Ujjain (M.P.) 456010 INDIA</p></span> </p>

                <p className='fs-6 mt-4'><span className='bold fs-5'> <BsFillGeoAltFill className='fs-2 ms-2 green' /> QUMBA TRANSPORT AND TECHNOLOGY PVT LTD <br />
                  <p className='ms-5'>2nd Floor, 22, Athrav Building, Near Vasavada Petrol Pump, Freeganj, Ujjain (M.P.) 456010 INDIA</p></span> </p>


              </div>
              <div className='col-md-6 mt-5'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.753864607444!2d75.78987181524246!3d23.179181816272685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396375b1e21ae101%3A0xee2f986b2d629d67!2sGo+Caargo+-+A+Complete+Online+Transportation+Solution!5e0!3m2!1sen!2sin!4v1546674806670" alt='kshgj' width="100%" height="450" frameBorder="0" style={{ border: "0" }} title="myFrame"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-sec'>
          <Footer />
        </div>

        {/* CONTACT section END */}
      </section>

    </>
  );
}

export default App;
