import Banner from '@/components/Banner'
import { CardProps } from '@/interfaces/card-props'
import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import About from './Home/components/About'
import Category from './Home/components/Category'
import News from './Home/components/News'
import Product from './Home/components/Product'
import categories from './Home/components/Category/data.json'

const items: CardProps[] = [
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #1',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #2',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #3',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #4',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #5',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #6',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #7',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, laudantium.',
  },
  {
    image: 'https://picsum.photos/1920/1080',
    title: 'Random Name #8',
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
      <Banner />
      <Container maxWidth="xl">
        <Category />
        <Product items={mockApiItems} callback={callback} />
        <News data={categories.data.slice(0, 3)} />
        <About />
      </Container>
    </Box>
  )
}

export default Home
