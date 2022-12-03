import { Link as RouterLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants';
import { Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <RouterLink to={navItem?.href ?? '#'}>
            <Text
              p={2}
              fontSize={'sm'}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
              }}
            >
              {navItem.label}
            </Text>
          </RouterLink>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
