'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const AddPost = () => {
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setContent((prevContent) => `${prevContent} [File: ${e.target.files[0].name}]`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('title', title);
    formData.append('content', content);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('http://localhost:5000/posts', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error creating post');
      }

      await response.json();
      setMessage('Post created successfully!');

      // Clear the form fields
      setUserId('');
      setTitle('');
      setContent('');
      setFile(null);
    } catch (err) {
      console.error(err);
      setError('Error creating post. Please try again.');
    }
  };

  return (
    <div className='bg-gradient-to-r from-[#152331] to-[#000000] min-h-screen relative overflow-hidden'>
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
      <div className="container mx-auto p-4 relative z-10">
        <motion.h1
          className="text-4xl text-white font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Add New Post
        </motion.h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-white bg-opacity-80 rounded-lg p-8 shadow-lg">
          <div>
            <label htmlFor="userId" className="block text-lg">User ID</label>
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-lg">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="content" className="block text-lg">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>
          <div>
            <label htmlFor="file" className="block text-lg">Upload File</label>
            <input
              type="file"
              id="file"
              onChange={handleFileChange}
              className="border rounded p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <motion.button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Post
          </motion.button>
        </form>
        {message && <p className="text-green-500 mt-4 text-center">{message}</p>}
        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
      </div>
    </div>
  );
};

export default AddPost;
