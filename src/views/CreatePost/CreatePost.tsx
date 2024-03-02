import { useState } from 'react';
import './CreatePost.css';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';


const CreatePost = () => {
  const [post, setPost] = useState('');
  const [products, setProducts] = useState('');
  const [postText, setPostText] = useState('');
  const [imageUpload, setImageUpload] = useState(null);

  const postRef = collection(db, 'posts');
  let navigate = useNavigate();
  let imageUrl = '';

  const createPost = async () => {
    try {
      if (imageUpload) {
        const imageRef = ref(storage, `postImages/${imageUpload.name + v4()}`);
        await uploadBytes(imageRef, imageUpload);
        imageUrl = await getDownloadURL(imageRef);
      }
      if (imageUrl) {
        await addDoc(postRef, {
          post,
          imageUrl,
          products,
          postText,
        });
        alert(`Your post has been created!`);
        navigate('/beat');
      } else {
        alert('Please select an image before creating the post.');
      }
    } catch (error) {
      console.error('Error creating post:', error);
    }
  }

  return (
    <>
      <div className='main'>
        <div className='form-container'>
          <h1 className="post-header">Create New Post</h1>
          {/* Title */}
          <div className='input-info'>
            <input type="text" placeholder='Post Name' className='newPost'  onChange={(event) => {
              setPost(event.target.value)
            }} />
          </div>

          {/* Products used */}
          <div className='input-info'>
            <input type="text" placeholder='Favorite Products Used' className='newPost' onChange={(event) => {
              setProducts(event.target.value)
            }} />
          </div>

          {/* Caption */}
          <div className='input-info'>
            <textarea placeholder='Give us all the details, Know Cap!' className='details' onChange={(event) => {
              setPostText(event.target.value)
            }}></textarea>
          </div>

          {/* Image  */}
          <div className='input-info'>
            <input type='file'className='file-input' onChange={(event) => { 
              setImageUpload(event.target.files[0]);
            }} />
          </div>
          <button className='post-btn' onClick={createPost}>Create Post</button>
        </div>
      </div>
    </>
  )
}
export default CreatePost


