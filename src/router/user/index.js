const USER = () => import('./../../views/user/index')

export const userRouter = [
  {
    path: '/user',
    name: 'user',
    component: USER
  }
]
