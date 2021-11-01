import { createContext, useContext, useState, useEffect } from "react";
import { auth, provider } from "../../firebase/clientApp";
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return unsubscribe;
    }, []);

    const login = async () => {
        await signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                setToken(token);
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
