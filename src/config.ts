const env: 'development' | 'production' = process.env.REACT_APP_ENV as any;

export const baseUrl: string = {
  development: 'http://localhost:9090',
  production: 'http://18.216.213.41:9090',
}[env];
