"use client"
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const ThumbsSwiper = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='w-[100vw]'>
            <Swiper
                slidesPerView={3}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
                <SwiperSlide>
                    رفع درد مفاصل
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={1}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default ThumbsSwiper;