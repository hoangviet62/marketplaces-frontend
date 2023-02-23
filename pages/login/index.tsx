import {
  styled,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Grid,
  Paper,
} from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import validators from '@/validators/login'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import { LoginPayload } from '@/interfaces/auth'
import { trimFormField } from '@/utils/trim-form-field'
import { useLogin } from '@/hooks/useAuth'
import Container from '@/components/Container'
import { User } from '@/enums'

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: zodResolver(validators),
  })
  const login = useLogin()
  const router = useRouter()

  const onSubmit = (data: LoginPayload) => {
    const trimedForm = trimFormField(data)
    login.mutate(trimedForm, {
      onSuccess: ({ data }) => {
        if (data?.role === User.ADMIN) {
          router.push('/admin')
        } else if (data?.role === User.CUSTOMER) {
          router.push('/customers')
        } else {
          router.push('/')
        }
      },
    })
  }

  const handleNavigateRegister = () => router.push('/register')
  const renderRegisterCard = () => (
    <Card
      sx={{
        height: '100%',
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
  )

  const renderLoginForm = () => (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card>
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
    <Container>
      <Grid
        spacing={3}
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12} sm={6}>
          {renderLoginForm()}
        </Grid>
        <Grid item xs={12} sm={6}>
          {renderRegisterCard()}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
