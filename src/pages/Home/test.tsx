import { render, screen } from '@testing-library/react'

import Home from '.'

describe('<Home />', () => {
  it('should render the home', () => {
    render(<Home />)

    expect(
      screen.getByRole('heading', { name: /Hello World/i })
    ).toBeInTheDocument()
  })
})
