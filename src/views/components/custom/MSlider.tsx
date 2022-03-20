import { Swiper, SwiperSlide } from 'swiper/react';

const MSlider = () => {
    return <div className='mSlider'>
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    </div>;
}
export default MSlider;