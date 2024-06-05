import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import NoteForm from './NoteForm'

test('<NoteForm /> updates parent state and calls onSubmit', async () => {
  const handleSubmit = vi.fn()
  const user = userEvent.setup()

  const { container } = render(<NoteForm handleSubmit={handleSubmit} />)

  //   console.log({ parent: container.parentElement })

  const input = screen.getByPlaceholderText('write note content here')
  const sendButton = screen.getByText('save')

  await user.type(input, 'testing a form...')
  await user.click(sendButton)

  expect(handleSubmit.mock.calls).toHaveLength(1)
  //   console.log({
  //     results: handleSubmit.mock.results,
  //     calls: handleSubmit.mock.calls,
  //   })
  expect(handleSubmit.mock.calls[0][0].content).toBe('testing a form...')
})
