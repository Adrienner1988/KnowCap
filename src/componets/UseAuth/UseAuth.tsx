import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';


interface IUser {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
};

const useAuth = () => {

    const [user, setUser] = useState<IUser>({
        uid: '',
        email: '',
        displayName: '',
        photoURL: '',
    });

    // Tracking current user
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
              if (typeof user.email === 'string') {
                  setUser({
                      uid: user.uid,
                      email: user.email,
                      displayName: user.displayName,
                      photoURL: user.photoURL,
                  });
              } else {
                  alert('Invalid email or password');
              }
          } else {
              setUser({
                  uid: '',
                  email: '',
                  displayName: '',
                  photoURL:'',
              })
          }
      });
  
      return () => unsubscribe();
  }, []);
        
    
    // Sign out user
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({
                uid: '',
                email: '',
                displayName: '',
                photoURL: ''
            })
        }).catch((error) => {
            alert(`${error}`);
        });
    }
    return { user, handleSignOut }   
}

export default useAuth