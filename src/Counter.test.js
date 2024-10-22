import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';
import { act } from 'react';


describe('Counter Component', () => {
    test('initial count value is 0', () => {
        render(<Counter />);
        const countElement = screen.getByText(/Counter: 0/i);
        expect(countElement).toBeInTheDocument();
    });

    test('increment button functionality', () => {
        render(<Counter />);
        const incrementButton = screen.getByText(/Increment/i);
        fireEvent.click(incrementButton);
        const countElement = screen.getByText(/Counter: 1/i);
        expect(countElement).toBeInTheDocument();
    });

    test('decrement button functionality', () => {
        render(<Counter />);
        const decrementButton = screen.getByText(/Decrement/i);
        const incrementButton = screen.getByText(/Increment/i);
        
        // Increment first
        fireEvent.click(incrementButton);
        
        // Then decrement
        fireEvent.click(decrementButton);
        const countElement = screen.getByText(/Counter: 0/i);
        expect(countElement).toBeInTheDocument();
    });
});
