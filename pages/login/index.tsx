import {
  Container,
  styled,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
} from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import validators from '@/validators/login'
import Input from '@/components/Input'
import { useRouter } from 'next/router'

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  gap: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(5),
}))

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validators),
  })

  const router = useRouter();

  const onSubmit = (data) => console.log(data)

  const handleNavigateRegister = () => router.push('/register')
  const renderRegisterCard = () => (
    <Box>
      <Card
        sx={{
          maxWidth: 345,
          height: '20vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Register
          </Typography>
          <Typography component="p">
            Does your company already have an account? Register as a new account
            or as a member of an existing account.
          </Typography>
        </CardContent>
        <CardActions sx={{ mb: 1, mt: 'auto' }}>
          <Button
            type="submit"
            variant="outlined"
            sx={{ width: '100%' }}
            disableElevation
            color="secondary"
            onClick={handleNavigateRegister}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </Box>
  )

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card
        sx={{
          maxWidth: 345,
          height: '20vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Login
          </Typography>
          <Input
            fieldName="username"
            labelName="Username"
            errors={errors}
            register={register}
            type="text"
          />
          <Input
            fieldName="password"
            labelName="Password"
            errors={errors}
            register={register}
            type="password"
          />

          <Typography component="p" sx={{ color: 'primary' }}>
            Forget your password?
          </Typography>
        </CardContent>
        <CardActions sx={{ mb: 1, mt: 'auto' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '100%' }}
            disableElevation
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  )

  return (
    <StyledContainer maxWidth="xl">
      {renderLoginForm()}
      {renderRegisterCard()}
    </StyledContainer>
  )
}

export default Login
