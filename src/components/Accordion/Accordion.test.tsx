import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Accordion } from './';

describe('Accordion', () => {
  test('renders', () => {
    render(<Accordion title="Accordion Tittle">This is the content</Accordion>);

    expect(screen.getByText('Accordion Tittle')).toBeInTheDocument();
  });

  test('should show children after click', () => {
    render(<Accordion title="Accordion Tittle">This is the content</Accordion>);

    expect(screen.queryByText('This is the content')).not.toBeInTheDocument();

    act(() => {
      screen.getByText('Accordion Tittle').click();
    });

    expect(screen.getByText('This is the content')).toBeInTheDocument();
  });

  test('should show the content by default if open is true', () => {
    render(
      <Accordion title="Accordion Tittle" open>
        This is the content
      </Accordion>
    );

    expect(screen.getByText('This is the content')).toBeInTheDocument();
  });
});
