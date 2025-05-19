import React, { useState } from 'react';
import {
  Container,
  Heading,
  Text,
  SimpleGrid,
  Spinner,
  Alert,
  AlertIcon,
  useColorModeValue,
} from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import usePosts from '../hooks/usePosts';
import Post from '../components/Post';

const HomePage = () => {
  const { posts, loading, error } = usePosts();
  const [openPostId, setOpenPostId] = useState(null);

  const toggleDetails = (postId) => {
    setOpenPostId((prevPostId) => (prevPostId === postId ? null : postId));
  };

  const sortPosts = (posts) => {
    return posts.sort((a, b) => a.title.localeCompare(b.title)); // Ordenar alfabéticamente por título
  };

  const sortedPosts = sortPosts(posts); // Aplica la ordenación a las publicaciones

  const textColor = useColorModeValue('gray.800', 'gray.200');

  if (loading) {
    return (
      <>
        <Navbar />
        <Container maxW="container.xl" py={10} textAlign="center">
          <Spinner size="xl" color="teal.500" />
          <Text mt={2} color={textColor}>Cargando publicaciones...</Text>
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <Container maxW="container.xl" py={10}>
          <Alert status="error" borderRadius="md" variant="left-accent" colorScheme="red">
            <AlertIcon />
            {error}
          </Alert>
        </Container>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={10}>
        <Heading mb={6} fontSize="3xl" color={textColor} fontWeight="bold" textAlign="center">
          Publicaciones
        </Heading>
        {sortedPosts.length === 0 ? (
          <Text color={textColor} fontSize="lg" textAlign="center">No hay publicaciones disponibles.</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 3 }} spacing={10}>
            {sortedPosts.map((post) => (
              <Post
                key={post._id}
                post={post}
                openPostId={openPostId}
                toggleDetails={toggleDetails}
                openModal={() => openModal(post._id)} 
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </>
  );
};

export default HomePage;
