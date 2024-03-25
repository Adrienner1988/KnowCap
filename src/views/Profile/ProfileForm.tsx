import { useState } from "react";
import { updateProfile } from "firebase/auth";
import  useAuth from "../../componets/UseAuth/UseAuth";
import { User } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase";
import { collection } from "firebase/firestore";
import { v4 } from "uuid"; 

const ProfileForm = () => {
  const { user } = useAuth();
  const [newDisplayName, setNewDisplayName] = useState('');
  const [imageUpload, setImageUpload] = useState(null);

  const handleUpdateProfile = async () => {
    try {
      const firebaseUser = user as User;

      // Upload the new profile picture
      let imageUrl = '';
      if (imageUpload) {
        const imageRef = ref(storage, `profileImages/${imageUpload.name + imageUpload.name + v4()}`);
        await uploadBytes(imageRef, imageUpload);
        imageUrl = await getDownloadURL(imageRef);
      }

      // Update the user profile
      await updateProfile(firebaseUser, {
        displayName: newDisplayName,
        photoURL: imageUrl, // Set the photoURL to the uploaded image URL
      });

      // Update the user document in Firestore with the new photoURL
      const userRef = collection(db, "users").doc(user.uid);
      await userRef.update({
        photoURL: imageUrl,
      });
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error updating profile. Please try again.");
    }
  }

  return (
    <div>
      <h2>Update Your Profile</h2>
      <p>User Email: {user.email}</p>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="User Profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      )}
      <label>
        Display Name:
        <input
          type="text"
          id="displayName"
          name="displayName"
          value={newDisplayName}
          onChange={(e) => setNewDisplayName(e.target.value)}
        />z
      </label>
      <br />
      <label>
        Upload New Photo:
        <input
          type="file"
          id="photoUpload"
          name="photoUpload"
          onChange={(e) => setImageUpload(e.target.files[0])}
        />
      </label>
      <br />
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  )
}

export default ProfileForm;
