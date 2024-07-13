import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginModal from '../components/LoginModal';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setIsAuthenticated } = useContext(AuthContext);
    const [modal, setModal] = useState({ show: false, title: '', message: '' });
    const [consentGiven, setConsentGiven] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    await axios.get('https://sole-debi-crytonexa-deb22e0b.koyeb.app/auth/validate-token', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setIsAuthenticated(true);
                    navigate('/');
                } catch (error) {
                    console.error('Token verification failed:', error);
                }
            }
        };
        checkToken();
    }, [setIsAuthenticated, navigate]);

    const handleCloseModal = () => {
        setModal({ show: false, title: '', message: '' });
        if (modal.title === 'Login Successful') {
            navigate('/');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!consentGiven) {
            setModal({
                show: true,
                title: 'Consent Required',
                message: 'Please consent to storing your data.'
            });
            return;
        }

        try {
            const response = await axios.post('https://sole-debi-crytonexa-deb22e0b.koyeb.app/auth/login', JSON.stringify({
                email,
                password
            }), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setIsAuthenticated(true);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('welcomeShown', 'false');
            setModal({
                show: true,
                title: 'Login Successful',
                message: 'You have successfully logged in.'
            });
            if (consentGiven) {
                localStorage.setItem('consentGiven', 'true');
            }
        } catch (error) {
            setModal({
                show: true,
                title: 'Login Error',
                message: 'Invalid email or password. Please try again.'
            });
        }
    };

    return (
        <>
            <div className="bg-gray-100 flex justify-center items-center h-screen">
                {/* Left: Image */}
                <div className="w-1/2 h-screen hidden lg:block">
                    <img
                        src="https://placehold.co/800x/667fff/ffffff.png?text=CMS+OKOCE.net&font=Montserrat"
                        alt="Placeholder Image"
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Right: Login Form */}
                <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
                    <h1 className="text-2xl font-semibold mb-4">Login</h1>
                    <form onSubmit={handleSubmit}>
                        {/* Email Input */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-600">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="off"
                            />
                        </div>
                        {/* Consent Checkbox */}
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                id="consent"
                                name="consent"
                                className="text-blue-500"
                                checked={consentGiven}
                                onChange={(e) => setConsentGiven(e.target.checked)}
                            />
                            <label htmlFor="consent" className="text-gray-600 ml-2">
                                I consent to storing my data
                            </label>
                        </div>
                        {/* Forgot Password Link */}
                        <div className="mb-6 text-blue-500">
                            <a href="#" className="hover:underline">Forgot Password?</a>
                        </div>
                        {/* Login Button */}
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <LoginModal
                show={modal.show}
                handleClose={handleCloseModal}
                title={modal.title}
                message={modal.message}
            />
        </>
    );
};

export default Login;
