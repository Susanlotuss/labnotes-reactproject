import { createContext, useContext } from "react";
import { 
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    return context
}

const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
}

const logout = () => signOut(auth);

export function AuthProvider({ children }) {
    const user = {
        login: true,
    }

    return <authContext.Provider value={{ user, logout, loginWithGoogle }}>{children}</authContext.Provider>
}
