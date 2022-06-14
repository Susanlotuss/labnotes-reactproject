import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useState } from "react";

import text from "../img/textturizer (2).png";
import wool from "../img/wool_000.jpg";

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
      <>
          <div className="bg-black"><img src={wool} alt="backgroundImage" style={{padding: 0, height: "100vh", position: "absolute", objectFit: "cover"}}/><img src={text} alt="title-app" style={{padding: 50, position: "absolute"}}/>
            <div>
              <button type="button" onClick={handleGoogleSignIn} className="top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-3xl px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 absolute">
                <svg className="w-6 h-7 mr-5 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
              </button>
            </div>
          </div>
      </>
     );
  }

  export default Home;