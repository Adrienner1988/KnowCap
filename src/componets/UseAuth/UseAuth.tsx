import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";

// Define the the user object
interface IUser {
  uid: string;
  email: string;
}

// Custom hook for managing user authentication
const useAuth = () => {
  // State to hold user information and initializing uid and email
  const [user, setUser] = useState<IUser>({
    uid: "",
    email: "",
  });

  // Tracking current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Check if a user is logged in
      if (user) {
        // If user exists, update state with user information
        if (typeof user.email === "string") {
          setUser({
            uid: user.uid,
            email: user.email,
          });
        } else {
          // Alert for invalid email or password
          alert("Invalid email or password");
        }
      } else {
        // If not logged in, reset the user state
        setUser({
          uid: "",
          email: "",
        });
      }
    });

    // Unsubscribe from the authentication state changes when the component unmounts
    return () => unsubscribe();
  }, []);

  // Handle function to sign out user
  const handleSignOut = () => {
    // Sign out the user from Firebase authentication
    signOut(auth)
      .then(() => {
        // Reset the user state after sign out
        setUser({
          uid: "",
          email: "",
        });
      })
      .catch((error) => {
        alert(`${error}`);
      });
  };

  // Return the user object and sign out function
  return { user, handleSignOut };
  //Return them together so that other components can easily access the current user's authentication status and perform sign-out actions
};

export default useAuth;
