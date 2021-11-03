import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../../context/user/auth";

export function withPublic(Component) {
    return function WithPublic(props) {
        const auth = useAuth();
        // const router = useRouter();
        // useEffect(() => {
        //     if (auth.user) {
        //         router.replace("/dashboard");
        //         return <div margitTop="5rem">Loading...</div>;
        //     }
        // }, [auth.user]);
        return <Component auth={auth} {...props} />;
    };
}

export function withProtected(Component) {
    return function WithProtected(props) {
        const auth = useAuth();
        const router = useRouter();
        useEffect(() => {
            if (!auth.user) {
                router.replace("/");
                return <div margitTop="5rem">Loading...</div>;
            }
        }, [auth.user]);
        if (!auth.user) {
            return <div margitTop="5rem">Loading...</div>;
        }
        return <Component auth={auth} {...props} />;
    };
}
