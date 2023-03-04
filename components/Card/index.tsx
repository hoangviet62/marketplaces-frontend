import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardProps } from '@/interfaces/card-props'
import { styled } from '@mui/material/styles'

const StyledBackgroundCard = styled(Card)(({}) => ({
  marginLeft: '-51px',
  minHeight: '50vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const MediaCard: React.FC<CardProps> = ({
  isBackgroundAsImage = false,
  image,
  title,
  content,
}) => {
  const renderSimpleCard = () => (
    <Card>
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {title}
        </Typography>
        <Typography variant="caption">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )

  const renderBackgroundCard = () => (
    <StyledBackgroundCard sx={{ backgroundImage: `url("${image}")`, borderRadius: 0 }}>
      <div style={{
        height: '100%',
        position: 'absolute',
        width: '100%',
        top: '33%',
        left: '1%'
      }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="common.white">
            {title}
          </Typography>
          <Typography variant="body1" component="div" sx={{ width: 0.75 }} color="common.white">
            {content}
          </Typography>
        </CardContent>
      </div>
    </StyledBackgroundCard>
  )

  return (
    <>{isBackgroundAsImage ? renderBackgroundCard() : renderSimpleCard()}</>
  )
}

export default MediaCard
