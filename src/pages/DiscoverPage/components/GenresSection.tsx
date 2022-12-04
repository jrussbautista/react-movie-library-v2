import { useRef } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { useGenres } from '@/services/genresService';
import 'swiper/css';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Genre } from '@/types';

SwiperCore.use([Navigation]);

type GenresSectionProps = {
  onSelect(genreId: number): void;
  selectedGenreId?: number;
};

const GenresSection = ({ onSelect, selectedGenreId }: GenresSectionProps) => {
  const { data: genres } = useGenres();

  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  if (!genres) {
    return null;
  }

  return (
    <>
      <Heading as="h2" size="md" mb="4">
        Choose your genres
      </Heading>
      <Flex mb={10} position="relative">
        <Button ref={navigationPrevRef} mr={4}>
          <ChevronLeftIcon fontSize="2xl" />
        </Button>
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          breakpoints={{
            // when window width is >= 640px
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 4,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;

            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {genres.map((genre) => (
            <SwiperSlide key={genre.id}>
              <Button
                onClick={() => onSelect(genre.id)}
                colorScheme="red"
                variant={selectedGenreId === genre.id ? 'solid' : 'outline'}
                width="100%"
              >
                {genre.name}
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button ml={4} ref={navigationNextRef}>
          <ChevronRightIcon fontSize="2xl" />
        </Button>
      </Flex>
    </>
  );
};

export default GenresSection;
