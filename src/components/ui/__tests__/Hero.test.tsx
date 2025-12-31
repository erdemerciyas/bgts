import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../Hero'

describe('Hero Component', () => {
  it('renders title and subtitle correctly', () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
        ctaText="Learn More"
        ctaLink="/test"
      />
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders badge when provided', () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
        badge="Test Badge"
      />
    )

    expect(screen.getByText('Test Badge')).toBeInTheDocument()
  })

  it('renders CTA button when ctaLink is provided', () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
        ctaText="Click Me"
        ctaLink="/test"
      />
    )

    const button = screen.getByRole('link', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('href', '/test')
  })

  it('does not render CTA button when ctaLink is not provided', () => {
    render(
      <Hero
        title="Test Title"
        subtitle="Test Subtitle"
      />
    )

    const button = screen.queryByRole('link', { name: /click me/i })
    expect(button).not.toBeInTheDocument()
  })
})
