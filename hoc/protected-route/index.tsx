import { User } from '@/enums'
import { useUser } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
  const { data } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname.includes(User.ADMIN) && data?.role !== !User.ADMIN) {
      router?.push('/')
    } else if (
      router.pathname.includes(User.CUSTOMER) &&
      data?.role !== !User.CUSTOMER
    ) {
      router?.push('/')
    }
  }, [router])

  return children
}

export default ProtectedRoute
