import { NAV_ITEMS } from '@/constants';
import { NavItem } from '@/types';
import {
  Flex,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const MobileNavItem = ({ label, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={onToggle}>
      <Flex
        py={2}
        as={'div'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <RouterLink to={href ?? '#'}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}
          >
            {label}
          </Text>
        </RouterLink>
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
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
