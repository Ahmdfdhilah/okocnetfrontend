import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext';
import { FaSchool, FaUsers, FaBuilding, FaIndustry, FaBriefcase, FaStore } from 'react-icons/fa';

const CMSHome = () => {
    const { userId } = useContext(AuthContext);
    const [deskripsiData, setDeskripsiData] = useState({ title: '', deskripsi: '' });
    const [bannerData, setBannerData] = useState([]);
    const [newBannerImage, setNewBannerImage] = useState(null);
    const [totalsData, setTotalsData] = useState([]);

    useEffect(() => {
        // Fetch deskripsi data
        const fetchDeskripsi = async () => {
            try {
                const response = await axios.get('http://localhost:3000/deskripsi');
                const deskripsi = response.data;
                if (deskripsi) {
                    setDeskripsiData({ title: deskripsi.title, deskripsi: deskripsi.deskripsi });
                }
            } catch (error) {
                console.error('Error fetching deskripsi data:', error);
            }
        };

        // Fetch banner data
        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:3000/banners/');
                setBannerData(response.data);
            } catch (error) {
                console.error('Error fetching banner data:', error);
            }
        };

        // Fetch totals data
        const fetchTotals = async () => {
            try {
                const response = await axios.get('http://localhost:3000/totals');
                setTotalsData(response.data.data);
            } catch (error) {
                console.error('Error fetching totals data:', error);
            }
        };

        fetchDeskripsi();
        fetchBanners();
        fetchTotals();
    }, []);

    // Function to handle form submission for deskripsi update
    const handleDeskripsiSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/deskripsi', deskripsiData);
            alert('Deskripsi updated successfully!');
        } catch (error) {
            console.error('Error updating deskripsi:', error);
            alert('Failed to update deskripsi.');
        }
    };

    // Function to handle new banner creation
    const handleBannerCreate = async () => {
        const formData = new FormData();
        formData.append('file', newBannerImage);

        try {
            // Create new banner
            const response = await axios.post(`http://localhost:3000/banners/${userId}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setBannerData([...bannerData, response.data]); // Add newly created banner to state
            setNewBannerImage(null); // Clear input field after successful creation
            alert('Banner created successfully!');
        } catch (error) {
            console.error('Error creating banner:', error);
            alert('Failed to create banner.');
        }
    };
    const handleBannerDelete = async (bannerId) => {
        try {
            // Delete banner
            await axios.delete(`http://localhost:3000/banners/${bannerId}`);
            setBannerData(bannerData.filter((banner) => banner.id !== bannerId)); // Remove deleted banner from state
            alert('Banner deleted successfully!');
        } catch (error) {
            console.error('Error deleting banner:', error);
            alert('Failed to delete banner.');
        }
    };

    const getIcon = (nama) => {
        switch (nama) {
            case 'pendidikan':
                return <FaSchool className="text-blue-500" size={40} />;
            case 'penggerak':
                return <FaUsers className="text-green-500" size={40} />;
            case 'pemerintah':
                return <FaBuilding className="text-red-500" size={40} />;
            case 'swasta':
                return <FaIndustry className="text-yellow-500" size={40} />;
            case 'usaha':
                return <FaBriefcase className="text-purple-500" size={40} />;
            case 'umkm':
                return <FaStore className="text-pink-500" size={40} />;
            default:
                return <FaUsers size={40} />;
        }
    };

    return (
        <div className="container mx-auto py-10 mt-32">
            <h1 className="text-4xl font-bold mb-8 text-center">Admin Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
                {totalsData.map((total) => (
                    <div key={total.id} className="bg-white rounded-lg shadow p-6 flex items-center">
                        <div className="mr-4">
                            {getIcon(total.nama)}
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold">
                                {total.nama.charAt(0).toUpperCase() + total.nama.slice(1)}
                            </h2>
                            <p className="text-lg font-medium">{total.total}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Edit Home Page</h2>
                <form onSubmit={handleDeskripsiSubmit} className="max-w-2xl mb-12">
                    <div className="mb-6">
                        <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={deskripsiData.title}
                            onChange={(e) => setDeskripsiData({ ...deskripsiData, title: e.target.value })}
                            className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="deskripsi" className="block text-lg font-medium text-gray-700">
                            Deskripsi
                        </label>
                        <textarea
                            id="deskripsi"
                            name="deskripsi"
                            value={deskripsiData.deskripsi}
                            onChange={(e) => setDeskripsiData({ ...deskripsiData, deskripsi: e.target.value })}
                            className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        />
                    </div>
                        <button
                            type="submit"
                            className="inline-flex px-6 py-3 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save Deskripsi
                        </button>        
                </form>

                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Manage Banners</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {bannerData.map((banner) => (
                        <div key={banner.id} className="relative rounded-lg overflow-hidden shadow-lg">
                            <img src={`http://localhost:3000${banner.foto}`} alt="Banner" className="w-full h-48 object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
                                <button
                                    onClick={() => handleBannerDelete(banner.id)}
                                    className="text-white px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-medium mb-4 text-gray-800">Create New Banner</h3>
                    <div className="flex  space-x-4">
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={(e) => setNewBannerImage(e.target.files[0])}
                            className="w-full sm:w-auto block border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                            accept="image/*"
                        />
                        <button
                            onClick={handleBannerCreate}
                            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none"
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CMSHome;