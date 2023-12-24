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
      <p className='paragraph'>Know Cap is a play on the expression no cap, meaning "no lie" or "for real". <br>Here at Know Cap we are about the real deal facts about makeup, especially in a world where authenticity should matter.Search your favorite brands for information on their products or head over to The Beat to see them in action from your fiends, followers and influencers and get the facts. Know Cap, Know Beauty!</p>

      {/* brand spotlight */}
      <h3 className='spotlight-brand'>Brand Spotlight</h3>
      <p className='spotlight-info'>This will be a brand image with a bit of information, when I learn how to render and image on the front end.</p>
        
      <div className='spotlight'>
        <img className='brand-spotlight-image' src="src\Images\malani.jpg" alt="malani-lipstick" />
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