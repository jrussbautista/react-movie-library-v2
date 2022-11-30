import { Container } from '@chakra-ui/react';
import Header from './Header';

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <Container as="main" maxW="6xl">
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
