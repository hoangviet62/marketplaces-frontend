import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
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
  paddingBottom: '3rem',
  '& .swiper-wrapper': {
    cursor: 'auto !important',
    paddingBottom: isBanner ? '0' : '50px',
    marginTop: isBanner ? '0' : '50px',
    marginLeft: isBanner ? '50px' : 0,
  },
  '& .swiper-pagination-bullet': {
    background: isBanner ? theme.palette.common.white : theme.palette.primary.main,
  },
  '& .swiper-button-prev:after': {
    color: isBanner ? theme.palette.common.white : theme.palette.primary.main,
  },
  '& .swiper-button-next:after': {
    color: isBanner ? theme.palette.common.white : theme.palette.primary.main,
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
  itemsPerViewWithMobileDevice = 1,
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
          600: {
            spaceBetween: '0',
            slidesPerView: itemsPerViewWithMobileDevice,
          },
          1024: {
            slidesPerView: itemsPerView,
          },
        }}
        allowTouchMove={false}
        spaceBetween={30}
        slidesPerView={itemsPerView}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onReachEnd={() => setLastItem(true)}
        style={{
          margin: !isBanner ? '0 80px' : '0',
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
