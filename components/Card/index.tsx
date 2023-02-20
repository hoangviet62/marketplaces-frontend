import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardProps } from '@/interfaces/card-props'
import { styled } from '@mui/material/styles'
import { Box, Container } from '@mui/material'

const StyledBackgroundCard = styled(Card)(({ theme }) => ({
  marginLeft: '-50px',
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
    <Card sx={{ minWidth: 345 }}>
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
        top: '38%',
        left: '7%'
      }}>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <Typography variant="caption" component="div" sx={{ width: 0.75 }}>
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
