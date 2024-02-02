export const getServer = () => {
  return `${location.hostname}:${location.port}` !== 'localhost:8080'
    ? ''
    : 'http://localhost:3000'
}
