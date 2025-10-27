export const routes = {
  home: {name: 'Home', href: '/'},
  login: {name: 'Login', href: '/login'},
  register: {name: 'Register', href: '/register'}
} as const;

export type RouteKeys = keyof typeof routes;