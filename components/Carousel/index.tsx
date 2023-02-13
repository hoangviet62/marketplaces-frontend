import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { CarouselProps } from '@/interfaces/carousel-props'

import 'swiper/swiper.min.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { alpha, styled } from '@mui/material/styles'
import { Box, useTheme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  paddingBottom: '3rem',
  '& .swiper-wrapper': {
    cursor: 'auto !important',
    margin: '0 50px 50px 50px',
  },
  '& .swiper-pagination-bullet': {
    background: alpha(theme.palette.primary.main, 0.5),
  },
  '& .swiper-button-prev:after': {
    color: alpha(theme.palette.primary.main, 0.5),
  },
  '& .swiper-button-next:after': {
    color: alpha(theme.palette.primary.main, 0.5),
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
  CardComponent,
  itemsPerView = 1,
  itemsPerViewWithMobileDevice = 1,
}) => {
  const [isLastItem, setLastItem] = useState<boolean>(false)

  const theme = useTheme()
  const handleNext = () => {
    if (!isLastItem) {
      return
    }

    callback()
  }

  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box position="relative">
      <StyledSwiper
        grabCursor
        pagination={{
          clickable: true,
          dynamicBullets: true,
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
        style={{ marginLeft: '80px', marginRight: '80px', position: 'unset' }}
      >
        {items?.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{ marginLeft: isMobile ? '17%' : '0' }}
          >
            <CardComponent
              image={item.image}
              title={item.title}
              content={item.content}
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
