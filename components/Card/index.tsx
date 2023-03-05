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
    <Card elevation={2} sx={{maxHeight: 271, minWidth: 280}}>
      <CardHeader>&nbsp;</CardHeader>
      <CardMedia
        image={image}
        component="img"
        height={150}
        width={150}
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          align="center"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body1" align="center" noWrap>
          {content}
        </Typography>
      </CardContent>
    </Card>
  )

  const renderBackgroundCard = () => (
    <StyledBackgroundCard
      sx={{
        backgroundImage: `url("${image}")`,
        borderRadius: 0,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: isMobile ? 'auto' : 560,
      }}
    >
      <div
        style={{
          position: 'fixed',
          left: 'var(--swiper-navigation-sides-offset, -20px)',
          right: 'auto',
          top: `var(--swiper-navigation-top-offset, ${isMobile ? 30 : 40 }%)`,
        }}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="common.white"
          >
            {title}
          </Typography>
          <Typography
            variant="body1"
            component="div"
            sx={{ width: 0.75 }}
            color="common.white"
          >
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
