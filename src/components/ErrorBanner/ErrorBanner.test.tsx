import { render, screen } from '@testing-library/react';
import ErrorBanner from './ErrorBanner';

describe('<ErrorBanner />', () => {
  test('should display correct default title and description', () => {
    render(<ErrorBanner />);
    const defaultDescription = 'Looks like something went wrong';
    const defaultTitle = 'Uo oh! Something went wrong';
    expect(screen.getByText(defaultTitle)).toBeInTheDocument();
    expect(screen.getByText(defaultDescription)).toBeInTheDocument();
  });

  test('should display correct title and description', () => {
    const description = 'New description';
    const title = 'New Title';
    render(<ErrorBanner description={description} title={title} />);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
