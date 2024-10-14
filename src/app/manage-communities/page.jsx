'use client';
import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { motion } from 'framer-motion';

const ManageCommunities = () => {
  const [communities, setCommunities] = useState([]); // Start with an empty array
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCommunity, setNewCommunity] = useState({
    name: '',
    image: null,
    createdAt: new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
  });

  useEffect(() => {
    fetchCommunities(); // Fetch communities on component mount
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const fetchCommunities = () => {
    // Simulated fetch call (optional, if you want to load initial communities)
    // const fetchedCommunities = [
    //   { id: 1, name: 'Community A', image: './imageA.jpg', createdAt: '2024-01-01' },
    //   { id: 2, name: 'Community B', image: './imageB.jpg', createdAt: '2024-01-02' },
    // ];
    // setCommunities(fetchedCommunities);
  };

  const addCommunity = (event) => {
    event.preventDefault(); // Prevent form submission
    const newCommunityData = {
      ...newCommunity,
      id: communities.length + 1, // Assign a unique ID based on current length
    };
    setCommunities([...communities, newCommunityData]); // Add new community to the list
    setIsModalOpen(false); // Close the modal after adding
    setNewCommunity({ name: '', image: null, createdAt: new Date().toISOString().slice(0, 10) }); // Reset form
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setNewCommunity({ ...newCommunity, image: reader.result }); // Set the image as data URL
    };

    if (file) {
      reader.readAsDataURL(file); // Read file as data URL
    }
  };

  return (
    <div className='bg-gradient-to-r from-[#152331] to-[#000000] min-h-screen relative overflow-hidden'>
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            color: { value: "#ffffff" },
          },
        }}
      />

      {/* Header Section */}
      <div className='min-h-screen flex flex-col items-center justify-center px-20 py-40 relative z-10'>
        <motion.img
          className='w-96 h-96 rounded-full shadow-lg object-cover'
          src='./flexin.png' // Assuming the logo path is the same as in Welcome
          alt='logo'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className='text-white text-7xl font-bold leading-tight mt-10'
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Manage Your Communities
        </motion.h1>
        <motion.button
          className="mt-10 bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsModalOpen(true)} // Open modal on button click
        >
          Add Community
        </motion.button>
      </div>

      {/* Community List Section */}
      <div className='flex flex-col items-center p-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black'>
        <h2 className="text-4xl text-white font-bold mb-10">Your Communities</h2>
        <div className="grid grid-cols-3 gap-10">
          {communities.length > 0 ? ( // Only display if there are communities
            communities.map((community) => (
              <motion.div
                key={community.id}
                className="relative group bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-300 ease-in-out"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-black text-xl font-semibold">{community.name}</h3>
                <img src={community.image} alt={community.name} className="rounded-lg h-32 object-cover mb-2" />
                <p className="text-gray-600">Created At: {community.createdAt}</p>
              </motion.div>
            ))
          ) : (
            <p className="text-white">No communities created yet. Add one to get started!</p> // Message when there are no communities
          )}
        </div>
      </div>

      {/* Modal for Adding Community */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"> {/* Increased opacity and z-index */}
          <div className="bg-white rounded-lg p-8 shadow-lg w-96 relative z-50"> {/* Added z-index */}
            <h2 className="text-xl font-bold mb-4">Add New Community</h2>
            <form onSubmit={addCommunity}>
              <div className="mb-4">
                <label className="block text-gray-700">Community Name</label>
                <input
                  type="text"
                  value={newCommunity.name}
                  onChange={(e) => setNewCommunity({ ...newCommunity, name: e.target.value })}
                  required
                  className="border rounded-md w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  required
                  className="border rounded-md w-full p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Created At</label>
                <input
                  type="date"
                  value={newCommunity.createdAt}
                  onChange={(e) => setNewCommunity({ ...newCommunity, createdAt: e.target.value })}
                  required
                  className="border rounded-md w-full p-2"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                  onClick={() => setIsModalOpen(false)} // Close modal
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Add Community
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCommunities;
