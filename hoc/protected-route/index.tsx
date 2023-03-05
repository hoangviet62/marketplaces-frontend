/* eslint-disable @typescript-eslint/no-explicit-any */
import CartMenu from '@/components/CartMenu'
import UnauthorizedPage from '@/components/UnauthorizedPage'
import { User } from '@/enums'
import useUserCart from '@/hooks/Cart/useUserCart'
import { useUser, AuthLoader } from '@/hooks/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ProtectedRoute = ({ children }: any) => {
  const { data } = useUser()
  const router = useRouter()
  const { refetch, data: userCart } = useUserCart()

  useEffect(() => {
    if (data && !userCart) {
      refetch()
    }
  }, [data])
  
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

  return (
    <>
      <CartMenu />
      {children}
    </>
  )
}

export default ProtectedRoute
