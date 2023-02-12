import ResultBox from './ResultBox';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Component ResultBox', () => {
    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
    });

    const testCasesPLNToUSD = [
        { amount: '100', expectResult:'PLN 100.00 = $28.57'},
        { amount: '20', expectResult: 'PLN 20.00 = $5.71' },
        { amount: '200', expectResult: 'PLN 200.00 = $57.14' },
        { amount: '345', expectResult: 'PLN 345.00 = $98.57' },
    ];

    for (const testObj of testCasesPLNToUSD) {

        it('should render proper info about conversion when PLN -> USD', () => {
            render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.expectResult);

            // unmount component
            cleanup()
        });
    };

    const testCasesUSDToPLN = [
        { amount: '100', expectResult:'$100.00 = PLN 350.00'},
        { amount: '20', expectResult: '$20.00 = PLN 70.00' },
        { amount: '200', expectResult: '$200.00 = PLN 700.00' },
        { amount: '345', expectResult: '$345.00 = PLN 1,207.50' },
    ];

    for (const testObj of testCasesUSDToPLN) {

        it('should render proper info about conversion when USD -> PLN', () => {
            render(<ResultBox from="USD" to="PLN" amount={parseInt(testObj.amount)} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.expectResult);

            // unmount component
            cleanup()
        });
    };

    const testCasesPLNToPLN = [
        { amount: '100', expectResult:'PLN 100.00 = PLN 100.00'},
        { amount: '20', expectResult: 'PLN 20.00 = PLN 20.00' },
        { amount: '200', expectResult: 'PLN 200.00 = PLN 200.00' },
        { amount: '345', expectResult: 'PLN 345.00 = PLN 345.00' },
    ];

    for (const testObj of testCasesPLNToPLN) {

        it('should render proper info about conversion when PLN -> PLN', () => {
            render(<ResultBox from="PLN" to="PLN" amount={parseInt(testObj.amount)} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.expectResult);

            // unmount component
            cleanup()
        });
    };

    const testCasesUSDToUSD = [
        { amount: '100', expectResult:'$100.00 = $100.00'},
        { amount: '20', expectResult: '$20.00 = $20.00' },
        { amount: '200', expectResult: '$200.00 = $200.00' },
        { amount: '345', expectResult: '$345.00 = $345.00' },
    ];

    for (const testObj of testCasesUSDToUSD) {

        it('should render proper info about conversion when USD -> USD', () => {
            render(<ResultBox from="USD" to="USD" amount={parseInt(testObj.amount)} />);
            const output = screen.getByTestId('output');
            expect(output).toHaveTextContent(testObj.expectResult);

            // unmount component
            cleanup()
        });
    };


    const testCasesMinus = [
        { amount: '-100', expectResult:'Wrong Value'},
        { amount: '-20', expectResult: 'Wrong Value' },
        { amount: '-200', expectResult: 'Wrong Value' },
        { amount: '-345', expectResult: 'Wrong Value' },
    ];

    for (const testObj of testCasesMinus) {
    it('should render Wrong Value when input is < 0', () => {
        render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);
        const output = screen.getByTestId('output');
        expect(output).toHaveTextContent('Wrong Value');

        // unmount component
        cleanup()
    });
}
  });