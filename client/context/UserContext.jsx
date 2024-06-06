import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    axios.defaults.baseURL = 'http://localhost:8000';
    axios.defaults.withCredentials = true;
    const [user, setUser] = useState(null);
    useEffect(() => {
        try {
            if (!user) {
                const email = localStorage.getItem('email');
                const pin = localStorage.getItem('pin');
                if (email && pin) {
                    axios.post('/profile', { email, pin }).then(({ data }) => {
                        if (data.error) {
                            console.log(data.error);
                            localStorage.removeItem('pin');
                            localStorage.removeItem('email');
                            location.href = '/login'
                        }
                        setUser(data);
                    }).catch((error) => {
                        localStorage.removeItem('pin');
                        localStorage.removeItem('email');
                        console.log(error.message);
                        location.href = '/login'
                        
                    })
                }

            }
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}