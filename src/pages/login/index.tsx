import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdEyeOff } from "react-icons/io"; // close
import { IoIosEye } from "react-icons/io"; // open
import LoginLogo from "../../assets/LoginLogo.jpg"

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate('/home');
        }
        else if (!token) {
            navigate("/auth/login")
        }
    }, [navigate]);

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.get('https://fakestoreapi.com/users/1');
            const AdminData = response.data;

            if (email === AdminData.email && password === AdminData.password) {
                localStorage.setItem('token', 'fake-admin-token');
                navigate('/home');
                setError('');
            } else {
                setError('Noto‘g‘ri email yoki parol!');
            }
        } catch (err) {
            console.error('Login xatosi', err);
            setError('Xato yuz berdi. Iltimos, qayta urinib ko‘ring.');
        }
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center px-6 my-12">
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    <div
                        className="w-full h-full lg:min-h-screen border-2 bg-gray-400 hidden lg:block lg:w-full bg-cover rounded-l-lg"
                        style={{ backgroundImage: `url(${LoginLogo})` }} // o'zgartirildi
                    ></div>

                    <div className="w-full lg:w-2/3 lg:my-auto lg:pl-20 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <h3 className="pt-4 text-2xl text-center"> Xush Kelibsiz!</h3>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="email"
                                    name="email"
                                    type="text"
                                    placeholder="Email kiriting"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                    Parol
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline pr-10"
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Parolni kiriting"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                                <button
                                    type="button"
                                    className="absolute mt-7 inset-y-0 right-0 pr-3 flex items-center text-gray-500 focus:outline-none focus:text-gray-700"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <IoIosEye className='text-xl' /> : <IoMdEyeOff className='text-xl' />}
                                </button>
                                {error && <p className="text-xs italic text-red-500">{error}</p>}
                            </div>
                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Kirish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
