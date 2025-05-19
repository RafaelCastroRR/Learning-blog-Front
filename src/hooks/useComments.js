// hooks/useComments.js
import { useState, useEffect } from 'react';
import { getAllComments, addComment } from '../services/api'; // Asegúrate de importar addComment

const useComments = (postId = null) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para obtener los comentarios
  const fetchComments = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllComments();
      // Filtramos si se proporciona postId
      const filteredComments = postId
        ? data.filter((comment) => comment.postId === postId)
        : data;
      setComments(filteredComments);
    } catch (error) {
      setError('Hubo un error al cargar los comentarios.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Función para agregar un comentario
  const handleAddComment = async (postId, content, userName) => {
    setLoading(true);
    setError(null);

    try {
      const commentData = { content, userName, postId };
      const newComment = await addComment(postId, commentData);
      // Una vez agregado el comentario, actualizamos la lista de comentarios
      setComments((prevComments) => [...prevComments, newComment]);
    } catch (error) {
      setError('Hubo un error al agregar el comentario.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [postId]); // Refrescar comentarios si cambia el postId

  return {
    comments,
    loading,
    error,
    handleAddComment,
  };
};

export default useComments;
