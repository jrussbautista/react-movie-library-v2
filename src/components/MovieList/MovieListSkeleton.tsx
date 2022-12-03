import { SimpleGrid, Skeleton, Stack } from '@chakra-ui/react';

type MovieListSkeletonProps = {
  count?: number;
};

const MovieListSkeleton = ({ count = 20 }: MovieListSkeletonProps) => {
  const skeletonLines = [...Array(count).keys()];
  return (
    <SimpleGrid minChildWidth="240px" spacing="20px">
      {skeletonLines.map((line) => (
        <Stack key={line} sx={{ position: 'relative', paddingTop: '150%' }}>
          <Skeleton
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
            }}
          />
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default MovieListSkeleton;
