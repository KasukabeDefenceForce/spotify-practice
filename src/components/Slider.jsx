// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Card from '../components/Card';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Slider = ({ items }) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {items.map((song, id) => {
                const { album, artists } = song;
                const name = artists.join(", ");
                return (
                    <SwiperSlide key={id}>
                        <Card
                            image={album.images[1].url}
                            songName={song.name}
                            artist={name}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};
