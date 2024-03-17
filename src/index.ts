export const greet = (name: string): void => {
  console.log(`Hello, ${name}!. Test ENV: ${process.env.TEST_ENV}`)
}

greet('World')
