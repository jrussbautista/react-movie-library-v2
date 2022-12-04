import Meta from '@/components/Meta/Meta';

import DiscoverMovies from './components/DiscoverMovies';
import GenresSection from './components/GenresSection';
import { useState } from 'react';

const DiscoverPage = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<undefined | number>(
    undefined
  );

  const handleSelectGenre = (genreId: number) => {
    setSelectedGenreId(genreId);
  };

  return (
    <>
      <Meta title="Discover Movies" />
      <GenresSection
        selectedGenreId={selectedGenreId}
        onSelect={handleSelectGenre}
      />
      <DiscoverMovies selectedGenreId={selectedGenreId} />
    </>
  );
};

export default DiscoverPage;
