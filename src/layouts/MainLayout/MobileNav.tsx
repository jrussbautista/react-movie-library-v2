import {
  Flex,
  Stack,
  useColorModeValue,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/constants';
import { NavItem } from '@/types';

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as="div"
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <NavLink to={href ?? '#'}>
          {({ isActive }) => (
            <Text
              fontWeight={isActive ? 600 : 400}
              color={
                isActive ? 'red.500' : useColorModeValue('gray.600', 'gray.200')
              }
            >
              {label}
            </Text>
          )}
        </NavLink>
      </Flex>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          label={navItem.label}
          href={navItem.href}
        />
      ))}
    </Stack>
  );
};

export default MobileNav;
