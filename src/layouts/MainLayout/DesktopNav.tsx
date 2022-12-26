import { NavLink, useNavigate } from 'react-router-dom';
import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { NAV_ITEMS } from '@/constants';
import SearchBar from './SearchBar';
import { routes } from '@/routes';

const DesktopNav = () => {
  const navigate = useNavigate();

  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  const handleSubmitSearch = (queryText: string) => {
    const to = `${routes.searchMovies}?queryText=${queryText}`;
    navigate(to);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <SearchBar onSubmitSearch={handleSubmitSearch} />
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink to={navItem?.href ?? '#'}>
            {({ isActive }) => (
              <Text
                p={2}
                fontSize="sm"
                fontWeight={isActive ? 700 : 400}
                color={isActive ? 'red.500' : linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
                whiteSpace="nowrap"
              >
                {navItem.label}
              </Text>
            )}
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
