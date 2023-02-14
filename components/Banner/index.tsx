import * as React from 'react'
import { BannerProps } from '@/interfaces/banner-props'
import Carousel from '../Carousel'
import Card from '../Card'

const Banner: React.FC<BannerProps> = ({ items }) => {
  return (
    <Carousel
      isBanner={true}
      items={items}
      CardComponent={Card}
      itemsPerView={1}
    />
  )
}

export default Banner
