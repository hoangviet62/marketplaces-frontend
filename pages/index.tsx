import MediaCard from '@/components/Card'
import Carousel from '@/components/Carousel'
import Banner from '@/components/Banner'
import { CardProps } from '@/interfaces/card-props'
import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'

const items: CardProps[] = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Test1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Random Name #2',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Random Name #2',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Random Name #2',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
]

const Home: NextPage = () => {
  const [mockApiItems, setMockApiItems] = useState<CardProps[]>(items)
  const callback = () => {
    // call api here
    let newArr = JSON.parse(JSON.stringify(items))
    newArr = newArr.concat(mockApiItems)
    setMockApiItems(newArr)
  }
  return (
    <Box>
      <Banner items={items} />
      <Container maxWidth="xl">
        <Carousel
          items={mockApiItems}
          CardComponent={MediaCard}
          itemsPerView={3}
          callback={callback}
        />
      </Container>
    </Box>
  )
}

export default Home
