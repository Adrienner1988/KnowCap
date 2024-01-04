import './Meaning.css';
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";


const Meaning = () => {
  return (
    <>
    <img className='meaning-logo' src='src\Images\KCLightBrwn.png' alt="logo" />
      <h2 className='def-header'>Know Cap</h2>
      <h3 className='def-header-1'>[nō 'kap]</h3>
      
      <p className='paragraph'>Know Cap is a play on the expression no cap, meaning "no lie" or "for real". <br></br>Here at Know Cap we are about the facts about makeup, especially in a world where authenticity should matter.<br></br>Search your favorite brands for information on their products or head over to The Beat to see them in action from your fiends and influencers and get the facts.</p>
      <h4 className='know-cap'><em>Know Cap, Know Beauty!</em></h4>

      <hr></hr>

      {/* brand spotlight */}
      <div className='spotlight'>
        <img className='brand-spotlight-image' src="src\Images\malani.jpg" alt="malani-lipstick" />

        <h3 className='spotlight-brand'>Brand Spotlight</h3>
        <h2 className='brandName'>Milani</h2>

        <p className='spotlight-info'>Start a lip color love affair with bold Milani lipsticks. Their collection features liquid lipsticks, lip cremes, lip plumpers and traditional tube lipsticks that can deliver serious pigmentation and supercharged staying power. Collect them all, because the hype is right -- Milani lipsticks get great word of mouth.</p><br></br>
      </div>
      <hr></hr>

      {/* inspo reel */}
      <h1 className='inspo-header'>MAKEUP INSPIRATION</h1>
      <div className='inspo-reel'>
        <img src='src\Images\blackBeauty.jpg' className='reel-image' />
        <img src='src\Images\orangeEyeShadow.jpg' className='reel-image' />
        <img src='src/Images/prettyInPink.jpg' className='reel-image' />

        <h4 className='looksQ'>DO YOU LIKE THESE LOOKS?</h4>

        <div className='bottom-bar'>
          <ul>
            <li> <FaRegHeart /> Like </li>
            <li> <FaRegComment /> Comment </li>
            <li> <TbLocationShare /> Share </li>
          </ul>
        </div>
      </div>

    </>
  )
}
export default Meaning