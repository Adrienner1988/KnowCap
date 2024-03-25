import { FormEvent, useEffect, useState } from "react";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { auth } from "../../firebase";
import "./TheBeat.css";
import "firebase/compat/firestore";

// / Define the interface for a post
interface IBeat {
  id: string;
  post: string;
  imageUrl: string;
  postText: string;
  products: string;
  author: {
    name: string; 
    id: string;
  };
}

// State variables to hold post data and editing information
const TheBeat = () => {
  const [postList, setPostList] = useState<IBeat[]>([]);
  const [editPost, setEditPost] = useState('');
  const postRef = collection(db, 'posts');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  // Fetch posts from Firestore when component mounts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await getDocs(postRef);
        // logging just the arrays already in the database to shorten the information to parse through
        // logs the array of post data retrieved from Firestore to the console. Mapping to iterate over each doc, retrieves the data, and adds an additional field id to each object.
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

        // Explicitly define the type for mapped data
        // Mapping the retrieved data into an array of objects with the structure defined by the IBeat interface.
        const mappedData: IBeat[] = data.docs.map((doc) => ({
          // post properties
          post: doc.data().post,
          postText: doc.data().postText,
          imageUrl: doc.data().imageUrl,
          products: doc.data().products,
          id: doc.id,
          author: {
            name: doc.data().author?.name || '',
            id: doc.data().author?.id || '',
          },
        }));

        setPostList(mappedData);
      } catch (error) {
        alert("Error fetching posts");
      }
    };
    getPosts();
  }, []);

  // Update a post in Firestore
  const updatePost = async (id: string, updatedPostText: string) => {
    if (!updatedPostText) return;

    const postDoc = doc(db, "posts", id);
    const updateFields = { postText: updatedPostText };

    try {
      await updateDoc(postDoc, updateFields);
      setEditPost("");
      fetchPosts();
    } catch (error) {
      alert("Error updating post");
    }
  };

    // Fetch specific post from Firestore to update
    const fetchPosts = async () => {
      try {
        const data = await getDocs(postRef);
        const mappedData = data.docs.map((doc) => ({
          post: doc.data().post,
          postText: doc.data().postText,
          imageUrl: doc.data().imageUrl,
          products: doc.data().products,
          id: doc.id,
          author: {
            name: doc.data().author.name,
            id: doc.data().author.id,
          },
        }));
        setPostList(mappedData);
      } catch (error) {
        alert("Error fetching posts");
      }
    };

  // Handle click event for editing a post
  const handleEditClick = (postId: string) => {
    const postToEdit = postList.find((post) => post.author.id === postId);
    setEditPost(postToEdit?.postText || "");
    setEditingPostId(postId);
  };

  // Handle form submission for editing a post
  const handleEditSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (editingPostId) {
      updatePost(editingPostId, editPost);
      setEditingPostId(null);
    }
  };

  // Delete a post from Firestore
  const deletePost = async (id: string) => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this post?"
    );

    if (confirmDeletion) {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
    }
    setPostList((prevPostList) =>
      prevPostList.filter((post) => post.author.id !== id)
    );
  };

  return (
    <>
      <div className="header">
        <h1 className="post-header">The Beat</h1>
      </div>

      <div className="the-beat">
        {/* Edit form */}
        <div className="edit-form">
          {editPost && (
            <form onSubmit={handleEditSubmit}>
              <textarea
                className="edit-textarea"
                value={editPost}
                onChange={(event) => setEditPost(event.target.value)}
              />
              <button className="changes-btn" type="submit">
                Save Changes
              </button>
              <button className="cancel-btn" onClick={() => setEditPost("")}>
                Cancel
              </button>
            </form>
          )}
        </div>

        {/* mapped post */}
        <div className="displayPost">
          {postList.map((post) => {
            return (
              <div className="row" key={post.id}>
                <div className="column">
                  <div className="content">
                    <div>
                      <h4>{post.post}</h4>
                    </div>
                    <img className="postImage" src={post.imageUrl} />
                    <div>
                      <p className="postText">{post.postText}</p>
                    </div>
                    <div>
                      <p>Favorite Products Used: {post.products}</p>

                      <p>{post.author.name}</p>
                    </div>

                    {/* update post */}
                    <div className="update-post">
                      {post.id === auth.currentUser?.uid && (
                        <button
                          className="update-btn"
                          onClick={() => {
                            handleEditClick(post.id);
                          }}
                        >
                          Update Post
                        </button>
                      )}
                    </div>

                    {/* delete post */}
                    <div className="delete-post">
                      {post.id === auth.currentUser?.uid && (
                        <button
                          className="delete-btn"
                          onClick={() => {
                            deletePost(post.id);
                          }}
                        >
                          Delete Post
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default TheBeat;
