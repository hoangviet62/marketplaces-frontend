/* eslint-disable @typescript-eslint/no-explicit-any */
import UnauthorizedPage from '@/components/UnauthorizedPage'
import { User } from '@/enums'
import { useUser, AuthLoader } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const ProtectedRoute = ({ children }: any) => {
  const { data } = useUser()
  const router = useRouter()

  if (
    (router.pathname.includes(User.ADMIN) && data?.data?.role !== User.ADMIN) ||
    (router.pathname.includes(User.CUSTOMER) &&
      data?.data?.role !== User.CUSTOMER)
  ) {
    return (
      <AuthLoader renderLoading={() => <div></div>}>
        <UnauthorizedPage />
      </AuthLoader>
    )
  }

  return children
}

export default ProtectedRoute
