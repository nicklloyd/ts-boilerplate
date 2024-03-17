import { greet } from './index'

describe('greet function', () => {
  it('greets the world', () => {
    console.log = jest.fn()
    greet('World')
    expect(console.log).toHaveBeenCalledWith('Hello, World!. Test ENV: test')
  })
})
