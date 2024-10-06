'use client';
import React, { useState } from 'react';
import { FaHeart, FaRegCommentDots, FaUserCircle } from 'react-icons/fa';

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'user_1',
      imageUrl: 'https://via.placeholder.com/400',
      likes: 0,
      comments: [],
    },
    {
      id: 2,
      username: 'user_2',
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
    <div className="relative min-h-screen">
      {/* Background image */}
      <img
        src="./bg image.jpg"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-5">
        <img src="./flexin.png" alt="Logo" className="h-12 w-auto rounded-l-full rounded-r-full" />
        <FaUserCircle className="text-white text-3xl cursor-pointer" />
      </nav>

      {/* Feed container */}
      <div className="relative flex flex-col items-center min-h-screen pt-20">
        <h1 className="text-2xl font-extrabold uppercase mb-6 text-center text-white">
          Feed Page
        </h1>

        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={handleLike}
            onAddComment={handleAddComment}
          />
        ))}
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
    <div className="max-w-lg w-full rounded-lg shadow-lg p-10 bg-black bg-opacity-50 backdrop-blur-sm mb-6">
      <h4 className="text-white font-bold">{post.username}</h4>
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
          <FaRegCommentDots className="mr-2" />
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

export default FeedPage;
