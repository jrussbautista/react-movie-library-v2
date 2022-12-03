import { Link } from 'react-router-dom';
import { Card, Image, CardBody, Text, Stack } from '@chakra-ui/react';

import { Movie } from '@/types';
import { MOVIE_SRC_BASE_PATH } from '@/constants';
import { routes } from '@/routes';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const imgSrc = `${MOVIE_SRC_BASE_PATH}/${movie.poster_path}`;
  const movieLink = `/${routes.movieDetails}/${movie.id}`;
  return (
    <Link to={movieLink}>
      <Card>
        <CardBody>
          <Stack position="relative" paddingTop="130%">
            <Image
              src={imgSrc}
              alt={movie.title}
              borderRadius="lg"
              objectFit="cover"
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
            />
          </Stack>
          <Stack mt="6" spacing="3" textAlign="center">
            <Text size="lg" noOfLines={1} fontWeight="semibold">
              {movie.title}
            </Text>
            <Text color="red.600" fontSize="md">
              {movie.vote_average}/10
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MovieCard;
