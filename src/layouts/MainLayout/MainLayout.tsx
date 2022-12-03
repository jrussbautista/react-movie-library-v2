import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Navigation from './Navigation';

const MainLayout = () => {
  return (
    <>
      <Navigation />
      <Container as="main" maxW="6xl" paddingTop="10" paddingBottom="10">
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
