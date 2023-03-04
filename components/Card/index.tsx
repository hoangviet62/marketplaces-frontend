import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardProps } from '@/interfaces/card-props'
import { styled } from '@mui/material/styles'
import { CardHeader, useMediaQuery, useTheme } from '@mui/material'

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
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const renderSimpleCard = () => (
    <Card elevation={2} raised
      sx={{
        maxWidth: 320,
        margin: "0 auto",
        padding: "0.1em",
      }}
    >
      <CardHeader>&nbsp;</CardHeader>
      <CardMedia
        image={image}
        component="img"
        height={200}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" align="center" component="div" sx={{fontWeight: 'bold'}}>
          {title}
        </Typography>
        <Typography variant="subtitle1" align="center" noWrap>
          {content}
        </Typography>
      </CardContent>
    </Card>
  )

  const renderBackgroundCard = () => (
    <StyledBackgroundCard sx={{
      backgroundImage: `url("${image}")`,
      borderRadius: 0,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      height: isMobile ? 'auto' : 560
    }}>
      <div style={{
        height: '100%',
        position: 'absolute',
        width: '100%',
        top: isMobile ? '40%' : 230,
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
