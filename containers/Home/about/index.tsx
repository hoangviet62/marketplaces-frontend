import * as React from 'react'
import { Box, styled, Typography } from '@mui/material'

const CustomWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  boxShadow: `0 0 0 100vmax ${theme.palette.primary.dark}`,
  clipPath: 'inset(0 -100vmax)',
  color: theme.palette.common.white
}))

const About: React.FC = () => {
  return (
    <CustomWrapper>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        textAlign="center"
        sx={{ pt: 4 }}
      >
        About us
      </Typography>
      <Typography
        gutterBottom
        component="p"
        textAlign="center"
        sx={{ pt: 5, mb: 0, pb: 5 }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ducimus
        modi, ipsum ad quas atque aliquam sunt deserunt velit voluptatum odio
        error maiores beatae repellat voluptatem suscipit tempore unde possimus
        id praesentium at pariatur doloribus perferendis. Inventore, harum
        eligendi. Quia quos exercitationem itaque quas officia fuga unde tempore
        modi facilis!
      </Typography>
    </CustomWrapper>
  )
}

export default About
