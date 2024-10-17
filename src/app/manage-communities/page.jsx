'use client';
import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import axios from 'axios';
import toast from 'react-hot-toast';

const ManageCommunities = () => {
  const [communities, setCommunities] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCommunity, setNewCommunity] = useState({
    name: '',
    image: null,
    createdAt: new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    fetchCommunities(); 
  }, []);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const fetchCommunities = () => {};

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append('file', file);
    fd.append('upload_preset', 'mycloud1');
    fd.append('cloud_name', 'drluzvt3t');
    axios
      .post('https://api.cloudinary.com/v1_1/drluzvt3t/image/upload', fd)
      .then((result) => {
        toast.success('file uploading successful');
        console.log(result.data);
        setNewCommunity({ ...newCommunity, image: result.data.url });
      })
      .catch((err) => {
        console.log(err);
        console.log('Something went sideways');
      });
  };

  const addCommunity = (event) => {
    event.preventDefault();
    const newCommunityData = {
      ...newCommunity,
      id: communities.length + 1,
    };
    console.log(newCommunityData);
    axios.post('http://localhost:5000/community/add', newCommunityData)
    .then((result) => {
      toast.success('community added');
    }).catch((err) => {
      console.log(err);
      toast.error('something went wrong');
    });
    // setCommunities([...communities, newCommunityData]);
    setIsModalOpen(false);
    setNewCommunity({ name: '', image: null, createdAt: new Date().toISOString().slice(0, 10) });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setNewCommunity({ ...newCommunity, image: reader.result });
    };

    if (file) {
      reader.readAsDataURL(file);
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
        <img
          className='w-96 h-96 rounded-full shadow-lg object-cover transition-transform duration-500 transform hover:scale-105'
          src='./flexin.png'
          alt='logo'
        />
        <h1
          className='text-white text-7xl font-bold leading-tight mt-10 transition-opacity duration-500 opacity-0 hover:opacity-100'
        >
          Manage Your Communities
        </h1>
        <button
          className="mt-10 bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105"
          onClick={() => setIsModalOpen(true)}
        >
          Add Community
        </button>
      </div>

      {/* Community List Section */}
      <div className='flex flex-col items-center p-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black'>
        <h2 className="text-4xl text-white font-bold mb-10">Your Communities</h2>
        <div className="grid grid-cols-3 gap-10">
          {communities.length > 0 ? (
            communities.map((community) => (
              <div
                key={community.id}
                className="relative group bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              >
                <h3 className="text-black text-xl font-semibold">{community.name}</h3>
                <img src={community.image} alt={community.name} className="rounded-lg h-32 object-cover mb-2" />
                <p className="text-gray-600">Created At: {community.createdAt}</p>
              </div>
            ))
          ) : (
            <p className="text-white">No communities created yet. Add one to get started!</p>
          )}
        </div>
      </div>

      {/* Modal for Adding Community */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg w-96 relative z-50">
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
                  onChange={uploadFile}
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
                  onClick={() => setIsModalOpen(false)}
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
