import { useState } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const [post, setPost] = useState('');
  const [products, setProducts] = useState('');
  const [postText, setPostText] = useState('');

  const postRef = collection(db, 'posts')
  let navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postRef, {
      post, 
      products, 
      postText, 
      author: {name: auth.currentUser?.displayName, id: auth.currentUser?.uid} 
    });
    navigate('/beat')
  }

  return (
    <>
    <div className='main'>
      <div className='form-container'>
        <h1 className="post-header">Create New Post</h1>
        {/* Title */}
        <div className='input-info'>
          <label>Post Name</label>
          <input type="text" placeholder='Name of Post' onChange={(event) => {
            setPost(event.target.value)
          }} />
        </div>

        {/* Products used */}
        <div className='input-info'>
          <label>Products Used</label>
          <input type="text" placeholder='Favorite Products Used' onChange={(event) => {
            setProducts(event.target.value)
          }}/>
        </div>

        {/* Caption */}
        <div className='input-info'>
          <label>Caption</label>
          <textarea placeholder='The Deets' onChange={(event) => {
            setPostText(event.target.value)
          }}></textarea>
        </div>
        <button className='post-btn' onClick={createPost}>Create Post</button>
      </div>
      </div>
    </>
  );
};
export default CreatePost


