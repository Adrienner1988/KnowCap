import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import useAuth from '../../componets/UseAuth/UseAuth';
import { useNavigate } from 'react-router-dom';
import './Profile.css'

interface IPost {
  id: string;
  post: string;
  imageUrl: string;
  postText: string;
  products: string;
  CreatedAt: firebase.firestore.Timestamp;
  author: {
    name: string;
    id: string;
  }
}

const Profile = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const getPosts = async () => {
      try {
        const postRef = collection(db, 'posts');
        const data = await getDocs(postRef);

        const mappedData: IPost[] = data.docs.map((doc) => ({
          id: doc.id,
          post: doc.data().post,
          imageUrl: doc.data().imageUrl,
          postText: doc.data().postText,
          products: doc.data().products,
          author: doc.data().author,
          CreatedAt: doc.data().CreatedAt ? doc.data().CreatedAt.toDate() : null,
        }));

        const userPosts = mappedData.filter(post => post.author.id === user.uid);

        // Sort the user's posts by CreatedAt timestamp
        userPosts.sort((a, b) => {
          const timestampA = a.CreatedAt?.toMillis() || 0;
          const timestampB = b.CreatedAt?.toMillis() || 0;
          return timestampB - timestampA;
        });

        setPosts(userPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    getPosts();
  }, [user, navigate]);

  return (
    <>
    <h1 className='profile-header'>Profile</h1>
      <div className='profile-posts'>
        {posts.length === 0 ? (
          <p>No Post Found</p>
        ) : (
          posts.map((post) => (
            <div className='row' key={post.id}>
              <div className="column">
                <div className="content">
                  <div><h4>{post.post}</h4></div>
                  <img className='postImage' src={post.imageUrl} />
                  <div><p className='postText'>{post.postText}</p></div>
                  <div><p>Favorite Products Used: {post.products}</p></div>
                  <div><p>Created By: {post.author.name}</p></div>
                  <div>
                    <p>Created At: {post.CreatedAt
                      ? post.CreatedAt.toDate().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
                      : 'Unknown Date'}
                    </p></div>
                    
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Profile
