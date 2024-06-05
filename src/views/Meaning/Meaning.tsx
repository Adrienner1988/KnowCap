import './Meaning.css';
// import { FaRegHeart } from "react-icons/fa6";
// import { FaRegComment } from "react-icons/fa";
// import { TbLocationShare } from "react-icons/tb";
import { counterMakeup, rainbow, orangeEyeShadow, prettyInPink, blackNWhite, malani } from "../../Images";


const Meaning = () => {
  return (
    <>
      <div className="img-container">
        <img src={counterMakeup} className="header-img" />
        <div className="overlay-text">
          <h2 className='def-header'>Know Cap</h2>
          <h3 className='def-header-1'>[nō 'kap]</h3>
          <p className="phrase"> Unveiling the Truth in Makeup, Where Authenticity Reigns. <br></br> <em>Know Cap, Know Beauty!</em></p>
        </div>
      </div>

      <h1 className='aboutUs'>WHO WE ARE</h1>
      <p className='paragraph'>Know Cap is a play on the expression no cap, meaning "no lie" or "for real". <br></br>Here at Know Cap we are about the facts about makeup, especially in a world where authenticity should matter.<br></br>Search your favorite brands for information on their products or head over to The Beat to see them in action from your friends and influencers and get the facts.</p>


      <hr></hr>

      {/* inspo reel */}
      <h1 className='inspo-header'>FIND INSPIRATION</h1>
      <div className='inspo-reel'>
        <div className='wrapper'>
          <div className='reel-images'>
            <img src={rainbow} className='reel-image' />
            <img src={prettyInPink} className='reel-image' />
            <img src={orangeEyeShadow} className='reel-image' />
            <img src={blackNWhite} className='reel-image' />

            <img src={rainbow} className='reel-image' />
            <img src={prettyInPink} className='reel-image' />
            <img src={orangeEyeShadow} className='reel-image' />
            <img src={blackNWhite} className='reel-image' />
          </div>
        </div>
      </div>

      {/* <h4 className='looksQ'>DO YOU LIKE THESE LOOKS?</h4>

      <div className='bottom-bar'>
        <ul>
          <li> <FaRegHeart /> Like </li>
          <li> <FaRegComment /> Comment </li>
          <li> <TbLocationShare /> Share </li>
        </ul>
      </div> */}

      <hr></hr>
      {/* brand spotlight */}
      <div className='spotlight'>
        <img className='brand-spotlight-image' src={malani} alt="malani-lipstick" />

        <h3 className='spotlight-brand'>Brand Spotlight</h3>
        <h2 className='brandName'>Milani</h2>

        <h4 className='spotlight-info'>Start a lip color love affair with bold Milani lipsticks. Their collection features liquid lipsticks, lip cremes, lip plumpers and traditional tube lipsticks that can deliver serious pigmentation and supercharged staying power. Collect them all, because the hype is right -- Milani lipsticks get great word of mouth.</h4><br></br>
      </div>
    </>
  )
}
export default Meaning