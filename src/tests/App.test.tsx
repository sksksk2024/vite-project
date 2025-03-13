import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Make sure this is imported
import App from './../App';

global.IntersectionObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
  root = null;
  rootMargin = '';
  thresholds = [];
} as unknown as typeof IntersectionObserver;

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    // Check if the app renders by looking for a unique element in the app
    expect(screen.getByText(/Hesadasfasf/i)).toBeInTheDocument();
  });

  test('renders Header component', () => {
    render(<App />);
    // Verify that the Header component exists in the document
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Assuming Header is the "banner" role
  });

  test('renders Hero component', () => {
    render(<App />);
    // Verify if the Hero component renders (check by an expected text or element inside Hero)
    expect(screen.getByTestId('hero')).toBeInTheDocument(); // Add data-testid="hero" in Hero component
  });

  test('renders Content component', () => {
    render(<App />);
    // Check that Content component is rendered
    expect(screen.getByTestId('content')).toBeInTheDocument(); // Add data-testid="content" in Content component
  });

  test('renders Today component', () => {
    render(<App />);
    // Check if Today component renders
    expect(screen.getByTestId('today')).toBeInTheDocument(); // Add data-testid="today" in Today component
  });

  test('renders Footer component', () => {
    render(<App />);
    // Check if Footer renders
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Assuming Footer has "contentinfo" role
  });
});
