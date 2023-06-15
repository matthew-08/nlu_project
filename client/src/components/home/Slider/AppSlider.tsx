/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-array-index-key */
import { Flex, Image } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css/pagination';
import { useNavigate } from 'react-router-dom';
import APP_CAPABILITIES from '../../../utils/capabilites';
import appImages from '../../../utils/appImages';

const capabilitySlides = APP_CAPABILITIES.map((capability) => {
  return {
    sliderImg: appImages.capabilities[capability],
    capability,
  };
});

function AppSlider() {
  const navigate = useNavigate();

  const handleNavigate = (capability: (typeof APP_CAPABILITIES)[number]) => {
    navigate(`capabilities/${capability}`, {
      state: {
        capabilityName: capability,
      },
    });
  };
  return (
    <Flex as="section" mt="2rem">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        pagination
        style={{
          accentColor: 'white',
          // @ts-ignore
          '--swiper-pagination-bullet-size': '16px',
        }}
      >
        {capabilitySlides.map((slide, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => handleNavigate(slide.capability)}
            >
              <Image
                src={slide.sliderImg}
                borderRadius="10px"
                cursor="pointer"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}

export default AppSlider;
