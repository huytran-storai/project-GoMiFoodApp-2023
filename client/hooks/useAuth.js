import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function useAuth() {
    const [user, setUser] = useState(null);
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsEmailVerified(user.emailVerified);
                console.log(user);
            } else {
                setUser(null);
                setIsEmailVerified(false);
            }
        });

        return () => unsubscribe();
    }, []);

    return { user, isEmailVerified };
}
