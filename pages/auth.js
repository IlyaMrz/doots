import React from "react";
import { auth, provider } from "../firebase/clientApp";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function SignInScreen() {
    const [token, setToken] = React.useState("");
    const [user, setUser] = React.useState(null);
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
        <div
            style={{
                maxWidth: "320px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {user?.email ? (
                <>
                    {user.email}
                    <button onClick={() => logout()}>logout</button>
                </>
            ) : (
                <button onClick={() => login()}>LOGIN</button>
            )}
        </div>
    );
}

export default SignInScreen;
