import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState, useEffect } from 'react';


interface IUser {
    uid: string,
    email: string
};

const useAuth = () => {
const [user, setUser] = useState<IUser>({
    uid: '',
    email: ''
})

// Tracking current user
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            if (typeof user.email === 'string') {
                setUser({
                    uid: user.uid,
                    email: user.email
                });
            } else {
                console.error('Invalid email type');
            }
        } else {
            setUser({
                uid: '',
                email: ''
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
            email: ''
        })
    }).catch((error) => {
        console.error(error);
    });
};
return { user, handleSignOut };
};

export default useAuth