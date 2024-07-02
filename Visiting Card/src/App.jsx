import { react, useState } from 'react'
import './App.css'
import logo from './assets/logo.jpg'
import profile from './assets/profile.svg'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import qrcode from './assets/qrcode.png'
import twitter from './assets/twitter.png'
import whatsapp from './assets/whatsapp.png'
import gmail from './assets/gmail.png'
import facebook from './assets/facebook.png'




function App() {

  const[qrimage,setQrImage] = useState("")

  const handleClick = (link) => {
    window.open(link);
  };

  async function qrhandleclick() {
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`;
      setQrImage(url);
    }
    catch (error) {
      console.log(error);
    } 
  };

  function qrbackButton(){
    setQrImage("");
  };
  
  return (
    <>
      <nav className='nav'>
        <h1 className='navheading'>Visiting</h1>
        <h1 className='navheading1'>Card</h1>
      </nav>

      <div className='container'>
        <div className='container1'>
        <img className='logo' alt='logo' src={logo}/>
        <h3 className='container1Text' >a tradition of trust</h3>
        </div>

        <img className='profile' src={profile} />

        <div className='container2'>
            <h1 className='text1'>John Doe</h1>
            <h2 className='text2'>Director Of Sales</h2>
            <h3 className='text3'>Luxury Auto Dealership</h3>
            <h3 className='text4'>Over 9 years of experience in auto sales, dedicated to bridging the gap between sales and customers.</h3>
            <h3 className='text5'>+1 [345] 678 - 888</h3>
        </div>
      </div>

      <div className='buttons'>
        <button onClick={() => handleClick('https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmail.google.com%2Fmail&ec=GAlAFw&hl=en&service=mail&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1057843045%3A1719826435131770&ddm=0')} className='button1'><img className='logo1' src={gmail}/>Email</button>
        <button onClick={() => handleClick('https://www.instagram.com/')} className='button2'><img className='logo2' src={instagram}/>Instagram</button>
        <button onClick={() => handleClick('https://www.facebook.com/')} className='button3'><img className='logo3' src={facebook}/>Facebook</button>
        <button onClick={() => handleClick('https://web.whatsapp.com/')} className='button4'><img className='logo4' src={whatsapp}/>Whatsapp</button>
        </div>

        <div>
        <hr className="horizontal-line" />
        <div className='logos' >
         {!qrimage && <img onClick={() => handleClick('https://x.com/?lang=en')} className='twitterlogo' src={twitter}/>}
          {!qrimage && <img onClick={() => handleClick('https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%2F%3Furl%3Dhttps%3A%2F%2Fwww.designhill.com%2Fdc%2F7d6nh3')} className='linkedinlogo' src={linkedin} />}
          {!qrimage && <img onClick={qrhandleclick} className='qrcodelogo' src={qrcode} />}
         
          <div className='qrBack'>
          <img src={qrimage} />
          {qrimage && <button className='backButton' onClick={qrbackButton}>Back</button>}
          </div>
         
          </div>
        </div>
    </>
  )
}

export default App
