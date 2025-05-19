// src/hooks/usePosts.js
import { useState, useEffect } from 'react';
import { getPosts } from '../services/api';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getPosts();
        setPosts(response.data);
      } catch (err) {
        setError('Error al obtener las publicaciones.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default usePosts;
