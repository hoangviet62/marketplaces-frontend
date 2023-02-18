import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardProps } from '@/interfaces/card-props'
import { styled } from '@mui/material/styles'
import { Container } from '@mui/material'

const StyledBackgroundCard = styled(Card)(({ theme }) => ({
  marginLeft: '-50px',
  minHeight: '50vh',
  height: '50vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}))

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
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
        <Typography gutterBottom variant="h5" component="div" color="common.white">
          {title}
        </Typography>
        <Typography variant="body2" color="common.white">
          {content}
        </Typography>
      </CardContent>
    </Card>
  )

  const renderBackgroundCard = () => (
    <StyledBackgroundCard sx={{ backgroundImage: `url("${image}")`, borderRadius: 0 }}>
      <StyledContainer maxWidth="xl">
        <CardContent sx={{ width: '30%', ml: 2 }}>
          <Typography gutterBottom variant="h5" component="div" color="common.white">
            {title}
          </Typography>
          <Typography variant="body2" color="common.white">
            {content}
          </Typography>
        </CardContent>
      </StyledContainer>
    </StyledBackgroundCard>
  )

  return (
    <>{isBackgroundAsImage ? renderBackgroundCard() : renderSimpleCard()}</>
  )
}

export default MediaCard
