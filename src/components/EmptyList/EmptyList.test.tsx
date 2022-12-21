import { render, screen } from '@testing-library/react';
import EmptyList from './EmptyList';

describe('<EmptyList />', () => {
  test('should display correct default description', () => {
    render(<EmptyList />);
    const defaultDescription = 'List is empty';
    expect(screen.getByText(defaultDescription)).toBeInTheDocument();
  });

  test('should display correct description', () => {
    const description = 'New description';
    render(<EmptyList description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
