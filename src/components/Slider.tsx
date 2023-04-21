// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import PCard from './Card';
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import { FreeMode } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export interface Song {
    album: {
        images: Array<{ url: string }>
    },
    artists: Array<{ name: string }>,
    name: string
}

interface Props {
    items: Array<Song>
}

export const Slider = ({ items }: Props) => {
    return (
        <div className="container py-4 px-4 justify-content-center bg-dark">
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
            >
                {items.map((song, id) => {
                    const { album, artists } = song;
                    const name = artists.map((n) => {
                        return n.name
                    }).join(",");
                    return (
                        <SwiperSlide key={id}>
                            <PCard
                                image={album.images[1].url}
                                songName={song.name}
                                artist={name}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};
