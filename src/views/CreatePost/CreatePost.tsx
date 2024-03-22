import { useState } from "react";
import "./CreatePost.css";
import { addDoc, collection } from "firebase/firestore"; // Import Firestore functions
import { db } from "../../firebase"; // Import Firebase database
import { useNavigate } from "react-router-dom";
import { storage } from "../../firebase"; // Import Firebase storage
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"; // Import storage functions
import { v4 } from "uuid"; // Import UUID generator

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [products, setProducts] = useState("");
  const [postText, setPostText] = useState("");
  const [imageUpload, setImageUpload] = useState<File | null>(null);

  // Reference to the 'posts' collection in Firestore
  const postRef = collection(db, "posts");

  // Navigation hook for redirecting after creating a post
  let navigate = useNavigate();

  // URL of the uploaded image
  let imageUrl = "";

  // Function to create a new post
  const createPost = async () => {
    try {
      // Upload image to Firebase Storage if an image is selected
      if (imageUpload) {
        const imageRef = ref(storage, `postImages/${imageUpload.name + v4()}`);
        await uploadBytes(imageRef, imageUpload);
        imageUrl = await getDownloadURL(imageRef);
      }
      // Add post data to Firestore
      if (imageUrl) {
        await addDoc(postRef, {
          post,
          imageUrl,
          products,
          postText,
        });
        // Display success message and navigate to the 'beat' page
        alert(`Your post has been created!`);
        navigate("/beat");
      } else {
        // Display error message if no image is selected
        alert("Please select an image before creating the post.");
      }
    } catch (error) {
      // Handle errors during post creation
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <div className="main">
        <div className="form-container">
          <h1 className="post-header">Create New Post</h1>
          {/* Title */}
          <div className="input-info">
            <input
              type="text"
              placeholder="Post Name"
              className="newPost"
              onChange={(event) => {
                setPost(event.target.value);
              }}
            />
          </div>

          {/* Products used */}
          <div className="input-info">
            <input
              type="text"
              placeholder="Favorite Products Used"
              className="newPost"
              onChange={(event) => {
                setProducts(event.target.value);
              }}
            />
          </div>

          {/* Caption */}
          <div className="input-info">
            <textarea
              placeholder="Give us all the details, Know Cap!"
              className="details"
              onChange={(event) => {
                setPostText(event.target.value);
              }}
            ></textarea>
          </div>

          {/* Image  */}
          <div className="input-info">
            <input
              type="file"
              className="file-input"
              onChange={(event) => {
                const file = event.target.files?.[0];
                if (file) {
                  setImageUpload(file);
                }
              }}
            />
          </div>
          <button className="post-btn" onClick={createPost}>
            Create Post
          </button>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
