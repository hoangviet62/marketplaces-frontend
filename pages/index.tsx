import MediaCard from '@/components/Card'
import Carousel from '@/components/Carousel'
import { CardProps } from '@/interfaces/card-props'
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
    console.log('newArr', newArr)
  }
  return (
    <div>
      {/* <Carousel
        items={mockApiItems}
        CardComponent={MediaCard}
        itemsPerView={1}
        callback={callback}
      /> */}
      <Carousel
        items={mockApiItems}
        CardComponent={MediaCard}
        itemsPerView={3}
        callback={callback}
      />
    </div>
  )
}

export default Home
