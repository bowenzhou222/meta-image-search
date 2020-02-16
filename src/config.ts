const env: 'development' | 'production' = process.env.REACT_APP_ENV as any;

export const baseUrl: string = {
  development: 'http://localhost:9090',
  production: 'https://meta-image-search-api.herokuapp.com',
}[env];
