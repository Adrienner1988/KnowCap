import { FormEvent, useState } from 'react';
import Nav from '../../componets/Nav/Nav';
import './CreatePost.css'


interface IPost {
  photoUrl: string,
  product: string,
  displayName: string,
  caption: string,
};


const CreatePost = () => {
  const [post, setPost] = useState<IPost>({
    photoUrl: '',
    product: '',
    displayName: '',
    caption: ''

  })

  //     const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     createPost();
  //   }


  const handleChange = () => {

  }

  const uploadImage = () => {

  }

  return (
    <>
      <Nav />

      <h1 className="post-header">Create New Post</h1>
      <form className="w-25 mx-auto" >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Product
          </label>
          <input
            onChange={(event) => { setPost({ ...post, product: event.target.value }) }}
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="caption" className="form-label">
            Caption
          </label>
          <input
            onChange={(event) => { setPost({ ...post, caption: event.target.value }) }}
            type="text"
            className="form-control"
            id="caption"
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="img-url" className="form-label">
            Photo URL
          </label>
          <input
            onChange={(event) => {setPost({...post, photoUrl: event.target.value})}}
            type="text"
            className="form-control"
            id="img-url"
          />
        </div> */}
        <div>
          <input type='file' onChange={handleChange} className='upload-btn' />
        </div>
        <button type="submit" className="create-post-btn" onClick={uploadImage}>
          Create Post
        </button>
      </form>
    </>
  );
};
export default CreatePost