import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = ({ onClose }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/auth/forgot-password', {
                email
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMessage('Password reset email has been sent. Please check your inbox.');
            setError('');
        } catch (error) {
            setMessage('');
            setError('Failed to send reset email. Please try again.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-sm">
                <h2 className="text-lg font-semibold mb-4">Forgot Password</h2>
                <form onSubmit={handleSubmit}>
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
                        />
                    </div>
                    {message && <p className="text-green-500 mb-4">{message}</p>}
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
                    >
                        Send Reset Link
                    </button>
                </form>
                <button
                    type="button"
                    onClick={onClose}
                    className="mt-4 text-blue-500 hover:underline"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ForgotPassword;