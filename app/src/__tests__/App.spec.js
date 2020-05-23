// import library of unit testing library
import { render } from '@testing-library/vue'
import App from '../App.vue'

// The case of unit testing for check render msg
test('Check if render props msg text in HelloWorld', async () => {
  const { getByTestId } = render(App, {
    props: { msg: 'Hello, My name is Clark!' }
  })

  const title = getByTestId('title')

  expect(title.innerHTML).toBe('Hello, My name is Clark!')
})
