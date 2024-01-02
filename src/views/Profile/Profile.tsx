import { Timestamp, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import './Profile.css';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';

interface IPost {
  id: string,
  title: string,
  caption: string,
  imageUrl: string,
  createdAt: Timestamp
}

const Profile = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const postRef = collection(db, 'Posts');
    const q = query(postRef, orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const postsData: IPost[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IPost[];
      setPosts(postsData);
      console.log(postsData);
    })

    return () => {
      unsub();
    }
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <p>No Post Found</p>
      ) : (
        posts.map(({id,
          title,
          caption,
          imageUrl,
          createdAt}) =>
         <div className='profile-posts' key={id}>
          <div>
            <img src={imageUrl} alt='title'/>
            <div className='post-info'>
            <h2>{title}</h2>
              <p>{caption}</p>
              <p>{createdAt.toDate().toString()}</p>
              </div>
          </div>
         </div>
        )
      )}
    </>
  )
}
export default Profile