import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Heading, Box } from '@chakra-ui/react';
import CommentsList from '../components/CommentsList'; // Importamos el componente CommentsList
import Navbar from '../components/Navbar'; // Importamos el Navbar

const CommentsPage = () => {
  const { postId } = useParams(); // Extraemos el postId de la URL

  return (
    <>
      {/* Navbar se coloca aquí para que esté presente en toda la página */}
      <Navbar />

      <Container maxW="container.lg" py={10}>
        <Box>
          <Heading size="md" mb={4}>
            Comentarios
          </Heading>
          {/* Componente para mostrar los comentarios */}
          <CommentsList postId={postId} />
        </Box>
      </Container>
    </>
  );
};

export default CommentsPage;
