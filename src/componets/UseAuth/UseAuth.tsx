import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


interface IUser {
    uid: string,
    email: string
};

const useAuth = () => {

    let navigate = useNavigate();

    const [user, setUser] = useState<IUser>({
        uid: '',
        email: ''
    });

    // Tracking current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                if (typeof user.email === 'string') {
                  setUser({
                    uid: user.uid,
                    email: user.email,
                  });
                } else {
                  console.error('Invalid email or password');
                }
              } else {
                setUser({
                  uid: '',
                  email: '',
                });
                navigate('/login');
              }
            });
        
            return () => unsubscribe();
          }, [navigate]);
        
    
    // Sign out user
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser({
                uid: '',
                email: ''
            })
        }).catch((error) => {
            alert(`${error}`);
        });
    }
    return { user, handleSignOut }   
}

export default useAuth