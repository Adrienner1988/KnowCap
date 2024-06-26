import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


// Define the the user object
interface IUser {
  uid: string;
  email: string;
}

const navigate = useNavigate();
// Custom hook for managing user authentication
const useAuth = () => {
  // State to hold user information and initializing uid and email
  const [user, setUser] = useState<IUser>({
    uid: "",
    email: "",
  });


  // Tracking current user
  // useEffect hook to run on component mount to listen for authentication state changes
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
          navigate("/meaning")
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
    // Cleanup function to unsubscribe from the authentication state changes when the component unmounts
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
