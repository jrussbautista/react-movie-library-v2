import { Link } from 'react-router-dom';
import { Card, Image, CardBody, Text, Stack, Flex } from '@chakra-ui/react';

import { Movie } from '@/types';
import { MOVIE_SRC_BASE_PATH } from '@/constants';
import { routes } from '@/routes';
import Rating from '@/components/Rating/Rating';
import movieUtils from '@/utils/movieUtils';

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const imgSrc = `${MOVIE_SRC_BASE_PATH}/${movie.poster_path}`;
  const movieLink = `/${routes.movieDetails}/${movie.id}`;
  const rating = movieUtils.calculateMovieRating(movie.vote_average);

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
          <Flex
            mt="6"
            textAlign="center"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text size="lg" noOfLines={1} mb={2} fontWeight="semibold">
              {movie.title}
            </Text>
            <Rating value={rating} />
          </Flex>
        </CardBody>
      </Card>
    </Link>
  );
};

export default MovieCard;
