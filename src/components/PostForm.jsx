// PostForm.jsx
import React, { useState } from 'react';

const PostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && image) {
      const newPost = {
        title,
        description,
        image: URL.createObjectURL(image), // This will create a temporary URL for the image
      };
      onAddPost(newPost);
      setTitle('');
      setDescription('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
