import axios from 'axios';

// Crear una instancia de Axios para la configuración base
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Función para obtener todas las publicaciones
export const getPosts = async () => {
  try {
    const response = await api.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error al obtener las publicaciones:', error);
    throw error;
  }
};

// Función para obtener todos los comentarios de todas las publicaciones
export const getAllComments = async () => {
  try {
    const response = await api.get('/comments/all');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los comentarios:', error);
    throw error;
  }
};

// Función para agregar un comentario
export const addComment = async (postId, commentData) => {
  try {
    const response = await api.post(`/comments`, {
      postId,
      ...commentData
    });
    return response.data;
  } catch (error) {
    console.error('Error al agregar el comentario:', error);
    throw error;
  }
};



