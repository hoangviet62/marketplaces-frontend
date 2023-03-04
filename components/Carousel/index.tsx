import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselProps } from '@/interfaces/carousel-props'

import 'swiper/swiper.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'
import MediaCard from '../Card'

type SwiperProps = {
  isBanner: boolean
}

const StyledSwiper = styled(Swiper, {
  shouldForwardProp: (prop) => prop !== 'isBanner',
})<SwiperProps>(({ theme, isBanner }) => ({
  '& .swiper-wrapper': {
    cursor: 'auto !important',
    paddingBottom: isBanner ? '0' : '50px',
    marginTop: isBanner ? '0' : '50px',
    marginLeft: isBanner ? '50px' : 0,
  },
  '& .swiper-pagination-bullet': {
    background: isBanner ? theme.palette.common.white : theme.palette.primary.dark,
  },
  '& .swiper-button-prev:after': {
    color: isBanner ? theme.palette.common.white : theme.palette.primary.dark,
  },
  '& .swiper-button-next:after': {
    color: isBanner ? theme.palette.common.white : theme.palette.primary.dark,
  },
  '& swiper-button-next.swiper-button-disabled': {
    opacity: '1 !important',
    cursor: 'pointer !important',
    pointerEvents: 'auto !important',
  },
}))

const Carousel: React.FC<CarouselProps> = ({
  items,
  callback,
  CardComponent = MediaCard,
  itemsPerView = 1,
  isBanner = false,
}) => {
  const [isLastItem, setLastItem] = useState<boolean>(false)

  const handleNext = () => {
    if (isBanner) return
    if (!isLastItem) {
      return
    }

    callback && callback()
  }

  const AddInComponents = [Navigation, Scrollbar, A11y, EffectFade];
  if (isBanner) AddInComponents.push(Pagination)

  return (
    <Box position="relative">
      <StyledSwiper
        isBanner={isBanner}
        grabCursor
        loop={isBanner}
        pagination={{
          clickable: true,
          dynamicBullets: !isBanner,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          128: {
            slidesPerView: 1,
          },
          256: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: isBanner ? 1 : 2,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: isBanner ? 1 : 4,
            spaceBetween: 10
          },
        }}
        // allowTouchMove={false}
        // spaceBetween={30}
        slidesPerView={itemsPerView}
        modules={AddInComponents}
        onReachEnd={() => setLastItem(true)}
        style={{
          margin: !isBanner ? '0 50px' : '0',
          position: 'unset',
        }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <CardComponent
              image={item.image}
              title={item.title}
              content={item.content}
              isBackgroundAsImage={isBanner}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next" onClick={handleNext}></div>
      </StyledSwiper>
    </Box>
  )
}

export default Carousel
