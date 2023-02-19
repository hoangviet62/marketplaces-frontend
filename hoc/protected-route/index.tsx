import UnauthorizedPage from '@/components/UnauthorizedPage'
import { User } from '@/enums'
import { useUser } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const ProtectedRoute = ({ children }) => {
  const { data } = useUser()
  const router = useRouter()

  if (
    (router.pathname.includes(User.ADMIN) && data?.role !== !User.ADMIN) ||
    (router.pathname.includes(User.CUSTOMER) && data?.role !== !User.CUSTOMER)
  ) {
    return <UnauthorizedPage />
  }

  return children
}

export default ProtectedRoute
