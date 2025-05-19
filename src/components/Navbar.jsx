import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const randomUser = {
  avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
};

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isModalOpen, setIsModalOpen] = useState(false); // Para manejar la apertura y cierre del modal
  const [modalImage, setModalImage] = useState(''); // Guardamos la imagen seleccionada para mostrarla en el modal
  const bgColor = useColorModeValue('#ffffff', '#2d3748');
  const textColor = useColorModeValue('#2b6cb0', '#edf2f7');
  const navigate = useNavigate(); // Usamos useNavigate para redirigir a otra página

  // Función para abrir el modal y mostrar la imagen
  const handleOpenModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(''); // Limpiar la imagen al cerrar el modal
  };

  // Función para navegar a la página de comentarios
  const handleNavigateToComments = () => {
    navigate('/comments'); // Redirige a la página de comentarios
  };

  // Función para navegar a la página de artículos (HomePage)
  const handleNavigateToHome = () => {
    navigate('/'); // Redirige a la página de inicio (HomePage)
  };

  return (
    <Box
      bg={bgColor}
      px={6}
      py={4}
      color={textColor}
      boxShadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          _hover={{ color: '#1d72b8' }}
          transition="color 0.3s"
          onClick={handleNavigateToHome} // Redirige al hacer clic
          cursor="pointer"
        >
          Mi Blog
        </Text>

        <HStack spacing={6} ml={10}>
          {/* Enlace de Artículos redirige a la HomePage */}
          <Link
            fontWeight="medium"
            fontSize="lg"
            _hover={{
              color: '#1d72b8',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s ease-in-out"
            onClick={handleNavigateToHome}
          >
            Artículos
          </Link>
          {/* Enlace de Opiniones actualizado con navegación */}
          <Link
            href="#"
            fontWeight="medium"
            fontSize="lg"
            _hover={{
              color: '#1d72b8',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s ease-in-out"
            onClick={handleNavigateToComments}
          >
            Opiniones
          </Link>
          <Link
            href="#"
            fontWeight="medium"
            fontSize="lg"
            _hover={{
              color: '#1d72b8',
              transform: 'scale(1.05)',
            }}
            transition="all 0.3s ease-in-out"
          >
            Contacto
          </Link>
        </HStack>

        <Spacer />

        <HStack spacing={4}>
          <Tooltip label={colorMode === 'light' ? 'Modo oscuro' : 'Modo claro'} aria-label="Tema">
            <IconButton
              aria-label="Cambiar tema"
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              variant="ghost"
              color="current"
              _hover={{ bg: '#1d72b8', transform: 'scale(1.1)' }}
              transition="all 0.3s ease"
            />
          </Tooltip>

          <Text fontWeight="medium">{randomUser.name}</Text>
          <Avatar
            size="sm"
            name={randomUser.name}
            src={randomUser.avatar}
            onClick={handleOpenModal}
            cursor="pointer"
            _hover={{ transform: 'scale(1.1)' }}
            transition="transform 0.2s ease-in-out"
          />
        </HStack>
      </Flex>

      {/* Modal para mostrar la imagen*/}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <img src={modalImage} alt="Perfil" style={{ maxWidth: '100%', maxHeight: '400px' }} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
