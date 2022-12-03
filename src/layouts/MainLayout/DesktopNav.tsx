import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants';
import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink to={navItem?.href ?? '#'}>
            {({ isActive }) => (
              <Text
                p={2}
                fontSize={'sm'}
                fontWeight={isActive ? 700 : 400}
                color={isActive ? 'red.500' : linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
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
