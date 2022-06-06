import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useState } from "react";

import googleImage from "../img/G-Recovered.png";
import text from "../img/textturizer (2).png";

function Home() {

  const { loginWithGoogle } = useAuth()
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("profile");
    } catch (error) {
      setError(error.message);
    }
  }
    return (
      <div className="Home">
        <img src={text} alt="title-app" style={{padding: "50px"}}/>
        <button><img src={googleImage} alt="googleLogo" onClick={handleGoogleSignIn} /></button>
      </div>
    );
  }

  export default Home;