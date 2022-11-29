import { render, fireEvent } from '@testing-library/react'
import Button from '../button'

test('Pagination', () => {
  it('Shows the number of items if its not overflowing', async () => {
    const { findByRole } = render(<Button label='test' />)
    const container = await findByRole('navigation')
    expect(container.querySelectorAll('li')).toHaveLength(7)
  })
})