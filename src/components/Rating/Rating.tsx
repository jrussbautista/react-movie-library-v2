import { StarIcon } from '@chakra-ui/icons';
import { Flex, Stack } from '@chakra-ui/react';

type RatingProps = {
  value?: number;
};

const Rating = ({ value = 5 }: RatingProps) => {
  const stars = Array(5)
    .fill(null)
    .map((_, i) => i + 1);

  const renderStar = (number: number) => {
    if (number <= value) {
      return <StarIcon color="red.500" />;
    } 
      return <StarIcon />;
    
  };

  return (
    <Flex>
      {stars.map((starNum) => (
        <Stack key={starNum} mr={1}>
          {renderStar(starNum)}
        </Stack>
      ))}
    </Flex>
  );
};

export default Rating;
