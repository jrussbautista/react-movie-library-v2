import { Alert, AlertIcon } from '@chakra-ui/react';

type EmptyListProps = {
  description?: string;
};

const EmptyList = ({ description = 'List is empty' }: EmptyListProps) => {
  return (
    <Alert status="info">
      <AlertIcon />
      {description}
    </Alert>
  );
};

export default EmptyList;
