import React, { useState } from 'react';
import './PostForm.css'; // Import the CSS file
import Navbar from './Navbar';

const PostForm = ({ user, assignUser }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (title && content ) {
      const newPost = {
        title,
        content
      };
      let token = localStorage.getItem('token');
      const res = await fetch('https://demo-flask-app-1kry.onrender.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newPost),
      });
      const data = await res.json();
      if (res.status === 201) {
        alert('Post created successfully');
        setTitle('');
        setContent('');
      } else {
        alert(`Error: ${data.message}`);
      }

    }
  };

  return (
    <>
    <Navbar/>
    <h2>Add a Post</h2>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Post</button>
    </form>
    </>
  );
};

export default PostForm;
