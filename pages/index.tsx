import Banner from '@/components/Banner'
import { CardProps } from '@/interfaces/card-props'
import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useState } from 'react'
import About from './Home/components/About'
import Category from './Home/components/Category'
import categories from './Home/components/category/data.json'
import News from './Home/components/News'
import Product from './Home/components/Product'

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
        <Category data={categories.data} />
        <Product items={mockApiItems} callback={callback} />
        <News data={categories.data.slice(0, 3)} />
        <About />
      </Container>
    </Box>
  )
}

export default Home
