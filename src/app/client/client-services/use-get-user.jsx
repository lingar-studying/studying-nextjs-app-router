import {useEffect, useState} from "react";


const useGetUser = ()=>{
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        fetchCurrentUser();
    }, []);
    const fetchCurrentUser = async () => {
        try {
            const res = await fetch("/api/auth/me");
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
            } else {
                setUser(null);
            }
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    return {loading, user};


}

export default useGetUser;
