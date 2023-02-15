/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CarouselProps {
  items: any[]
  isBanner?: boolean
  callback?: () => void
  CardComponent?: React.FC<any>
  itemsPerView?: number
  itemsPerViewWithMobileDevice?: number
}
