import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
    const [username, setUsername] = useState<string>("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/auth/login");
        } else {
            fetchUserInfo();
        }
    }, [navigate]);

    const fetchUserInfo = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/users/1');
            const userData = res.data;
            setUsername(userData.username);
        } catch (err) {
            console.error("Fetch qilishda xatolik!", err);
        }
    };

    return (
        <div>
            <h1>Xush kelibsiz, {username}!</h1>
            {/* Qo'shimcha UI kodlari shu yerda bo'lishi mumkin */}
        </div>
    );
};

export default Home;
