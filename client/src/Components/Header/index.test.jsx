import Header from './index';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

describe('Header', () => {
    it('Header renders correctly', () => {
        const { container, getByTestId } = render(<BrowserRouter><Header /></BrowserRouter>);
        const span_element = getByTestId('span');
        const value = span_element.innerHTML;
        expect(value).toBe('UK News');
    });
    it('Header contains link', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(screen.getAllByRole('link')[0]).toHaveAttribute('href', '/LandingPage');
    });
    it('Header contains link', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        expect(screen.getAllByRole('link')[1]).toHaveAttribute('href', '/Search');
    });
    it('Header Snapshot test', () => {
        const tree = renderer.create(<BrowserRouter>
            <Header />
        </BrowserRouter>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
