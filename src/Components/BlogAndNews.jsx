import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const BlogAndNews = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetch('newsBlog.json') 
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  const handleReadMore = (post) => {
    setSelectedPost(post); 
  };

  const closeModal = () => {
    setSelectedPost(null); 
  };

  return (
    <div className="py-8 bg-gradient-to-r from-gray-100 to-gray-200 p-4 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-6  text-gray-900 dark:text-gray-100">Blog & News</h2>
      <Marquee pauseOnHover gradient={false} speed={50} className="max-w-6xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-white shadow-lg rounded-lg p-4 m-4 w-64 flex-shrink-0"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-36 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold mb-2  text-gray-900 dark:text-gray-100">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.summary}</p>
            <p className="text-gray-500 text-xs mt-2">{`Published on: ${post.date}`}</p>
            <button
              className="btn btn-outline mt-3"
              onClick={() => handleReadMore(post)}
            >
              Read More
            </button>
          </div>
        ))}
      </Marquee>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 hover:bg-red-600"
              onClick={closeModal}
            >
              X
            </button>
            <h3 className="text-2xl font-bold mb-4  text-gray-900 dark:text-gray-100">{selectedPost.title}</h3>
            <img
              src={selectedPost.thumbnail}
              alt={selectedPost.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">{selectedPost.description}</p>
            <p className="text-gray-500 text-sm mt-4">{`Published on: ${selectedPost.date}`}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogAndNews;
