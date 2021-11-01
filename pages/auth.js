import React from "react";
import { useAuth } from "../context/user/auth";

function SignInScreen() {
    const { user, login, logout } = useAuth();

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
            {user?.displayName ? (
                <>
                    {user.displayName}
                    <button onClick={() => logout()}>logout</button>
                </>
            ) : (
                <button onClick={() => login()}>LOGIN</button>
            )}
        </div>
    );
}

export default SignInScreen;
