import Nav from '../../componets/Nav/Nav'
import './Profile.css'

const Profile = () => {

  const handleChange = () => {

  }

  const uploadImage = () => {

  }
// display current users post horizontal 
// add followers
// like button

  return (
    <>
      <Nav />
      <div className='profile-image'>
        <input type='file' onChange={handleChange} />
        <button className='profile-img-btn' onClick={uploadImage}>Upload</button>
        <img src='https://as2.ftcdn.net/v2/jpg/05/89/93/27/1000_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg' alt='avatar' className='avatar'/>
      </div>

      
    </>
  );
};
export default Profile