import './Meaning.css';
import Nav from '../../componets/Nav/Nav';
import BrandSpotlight from '../BrandSpotlight/BrandSpotlight';


const Meaning = () => {
  return (
    <>
      <Nav />
      <h2 className='def-header'>Know Cap</h2>
      <h3 className='def-header-1'>[nō 'kap]</h3>
      <p className='paragraph'>Know Cap is a play on the expression no cap, meaning "no lie" or "for real". Here at Know Cap we are about the real deal facts about makeup, especially in a world where authenticity should matter. Search your favorite brands for information on their products or head over to The Beat to see them in action from your fiends, followers and influencers and get the facts. Know Cap, Know Beauty!</p>
      <BrandSpotlight />
    </>
  )
}
export default Meaning