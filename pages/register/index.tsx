/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  styled,
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  Link,
} from '@mui/material'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import validators from '@/validators/registration'
import Input from '@/components/Input'
import { useRouter } from 'next/router'
import { useRegister } from '@/hooks/useAuth'
import { trimFormField } from '@/utils/trim-form-field'

const StyledContainer = styled(Container)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  gap: theme.spacing(5),
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: theme.spacing(5),
}))

const Registration: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validators),
  })

  const { mutate } = useRegister()

  const router = useRouter()
  const onSubmit = (data: any) => {
    const trimedForm = trimFormField(data)
    mutate(trimedForm)
  }
  const handleNavigateRegister = () => router.push('/login')

  const renderRegistrationForm = () => (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card
        sx={{
          maxWidth: 345,
          height: '37vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Registration
          </Typography>
          <Input
            fieldName="username"
            labelName="Username"
            errors={errors}
            register={register}
            type="text"
          />
          <Input
            fieldName="email"
            labelName="Email"
            errors={errors}
            register={register}
            type="Email"
          />
          <Input
            fieldName="password"
            labelName="Password"
            errors={errors}
            register={register}
            type="password"
          />
          <Input
            fieldName="confirmPassword"
            labelName="Confirm Password"
            errors={errors}
            register={register}
            type="password"
          />

          <Input
            fieldName="mobileNumber"
            labelName="Phone Number"
            errors={errors}
            register={register}
            type="text"
          />

          <Typography component="p" sx={{ color: 'primary' }}>
            Already have account?{' '}
            <Link onClick={handleNavigateRegister}>
              Sign in.
            </Link>
          </Typography>
        </CardContent>
        <CardActions sx={{ mb: 1, mt: 'auto' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ width: '100%' }}
            disableElevation
          >
            Submit
          </Button>
        </CardActions>
      </Card>
    </form>
  )

  return (
    <StyledContainer maxWidth="xl">{renderRegistrationForm()}</StyledContainer>
  )
}

export default Registration
