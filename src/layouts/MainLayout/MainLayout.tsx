import { Container } from '@chakra-ui/react';
import Navigation from './Navigation';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navigation />
      <Container as="main" maxW="6xl" paddingTop="10" paddingBottom="10">
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
