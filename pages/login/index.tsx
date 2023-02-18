import {
  Container,
  styled,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Grid
} from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import validators from '@/validators/login'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import { LoginPayload } from '@/interfaces/auth'
import { trimFormField } from '@/utils/trim-form-field'
import { useLogin, useLogout } from '@/hooks/useAuth'

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validators),
  })
  const login = useLogin()

  const router = useRouter()

  const onSubmit = (data: LoginPayload) => {
    const trimedForm = trimFormField(data)
    login.mutate(trimedForm, {
      onSuccess: () => console.log('aaa'),
    })
  }

  const handleNavigateRegister = () => router.push('/register')
  const renderRegisterCard = () => (
    <Box>
      <Card
        sx={{
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
    <Grid container spacing={2}>
      <Grid item xs={6}>
        {renderRegisterCard()}
      </Grid>
      <Grid item xs={6}>
        {renderLoginForm()}
      </Grid>
    </Grid>
  )
}

export default Login
