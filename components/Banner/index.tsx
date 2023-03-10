import * as React from 'react'
import Carousel from '../Carousel'
import Card from '../Card'
import useBanners from '@/hooks/Banner/useBanners'
import {Banner} from '@/interfaces/banner'

const Banner = () => {
  const [payload, ] = React.useState({page: 1, perPage: 10})
  const { data } = useBanners(payload)
  const items = data?.data.map((item: Banner) => ({
    image: item.images ? `${process.env.apiUrl}${item.images[0].url}`: '',
    title: item.description,
    content: item.linkTo
  }))

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
