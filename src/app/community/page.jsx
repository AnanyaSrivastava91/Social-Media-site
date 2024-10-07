'use client';
import React, { useState } from 'react';
import { FaHeart, FaCommentDots, FaUserCircle } from 'react-icons/fa';

const CommunityPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'user_1',
      content: 'Excited to join this amazing community!',
      imageUrl: 'https://via.placeholder.com/400',
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      username: 'user_2',
      content: 'Just finished a new project! Check it out!',
      imageUrl: 'https://via.placeholder.com/400',
      likes: 0,
      comments: [],
    },
  ]);

  const handleLike = (postId) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, comment] }
        : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#780206] to-[#061161] p-4">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-r from-black to-gray-950">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-3xl font-bold">Community</div>
          <FaUserCircle className="text-white text-3xl cursor-pointer" />
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Main Content Area */}
        <div className="w-3/4 p-4">
          <h1 className="text-4xl text-white font-bold mb-6">Community Feed</h1>

          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              onLike={handleLike}
              onAddComment={handleAddComment}
            />
          ))}

          {/* Create Post Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-white font-bold text-xl mb-4">Create a Post</h2>
            <textarea
              className="w-full p-4 rounded-lg mb-4 bg-gray-700 text-white"
              placeholder="What's on your mind?"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Post
            </button>
          </div>
        </div>

        {/* Sidebar (Trending Topics) */}
        <div className="w-1/4 p-4 bg-gray-900 rounded-lg shadow-lg">
          <h2 className="text-white font-bold text-2xl mb-4">Trending Topics</h2>
          <ul className="text-white space-y-2">
            <li>#NewProjects</li>
            <li>#JavaScriptTips</li>
            <li>#AIRevolution</li>
            <li>#MERNStack</li>
            <li>#SpringBoot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Post = ({ post, onLike, onAddComment }) => {
  const [comment, setComment] = useState('');
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      onAddComment(post.id, comment);
      setComment(''); // Clear the input field
      setCommentModalOpen(false); // Close the modal
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
      <h4 className="text-white font-bold">{post.username}</h4>
      <p className="text-white">{post.content}</p>
      <img
        src={post.imageUrl}
        alt="Post"
        className="w-full h-60 object-cover rounded-lg my-4"
      />
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => onLike(post.id)}
          className="text-red-500 flex items-center"
        >
          <FaHeart className="mr-2" /> {post.likes} Likes
        </button>

        <button
          onClick={() => setCommentModalOpen(true)}
          className="text-blue-500 flex items-center"
        >
          <FaCommentDots className="mr-2" />
        </button>
      </div>

      {/* Comment Modal */}
      {isCommentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full">
            <h5 className="font-bold mb-2">Add a Comment</h5>
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                placeholder="Your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border p-2 rounded-lg w-full mb-2"
              />
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setCommentModalOpen(false)}
                  className="text-red-500"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="text-white">
        {post.comments.length > 0 && <h5 className="font-bold">Comments:</h5>}
        {post.comments.map((comment, index) => (
          <p key={index} className="bg-gray-700 p-2 rounded-lg my-2">
            {comment}
          </p>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
