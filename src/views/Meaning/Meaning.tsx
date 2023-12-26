import './Meaning.css';
import Nav from '../../componets/Nav/Nav';
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";


const Meaning = () => {
  return (
    <>
      <Nav />

      <h2 className='def-header'>Know Cap</h2>
      <h3 className='def-header-1'>[nō 'kap]</h3>
      <p className='paragraph'>Know Cap is a play on the expression no cap, meaning "no lie" or "for real". <br></br>Here at Know Cap we are about the real deal facts about makeup, especially in a world where authenticity should matter.<br></br>Search your favorite brands for information on their products or head over to The Beat to see them in action from your fiends, followers and influencers and get the facts.<br></br></p>
      <h4 className='know-cap'><em>Know Cap, Know Beauty!</em></h4>

      {/* brand spotlight */}
      <div className='spotlight'>
        <img className='brand-spotlight-image' src="src\Images\malani.jpg" alt="malani-lipstick" />

        <h3 className='spotlight-brand'>Brand Spotlight</h3>
        <h2 className='brandName'>Milani</h2>

        <p className='spotlight-info'>Start a lip color love affair with bold Milani lipsticks. Their collection features liquid lipsticks, lip cremes, lip plumpers and traditional tube lipsticks that can deliver serious pigmentation and supercharged staying power.

          <h3 className='loveIt'>Why You'll Love It</h3>

          Matte to the max! Their Color Statement Matte Lipsticks give you statement-making bold color and lip looks that last. Their much-loved matte lipstick collection features vibrant colors, ranging from electric pinks to glamorous reds. Infused with nourishing vitamins A and C, Color Statement Lipstick will feel as good as it looks. Settle for nothing less than striking.<br></br>

          Collect them all, because the hype is right -- Milani lipsticks get great word of mouth.</p>
        {/* carousel of images, pull from data base? yes! */}
      </div>

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