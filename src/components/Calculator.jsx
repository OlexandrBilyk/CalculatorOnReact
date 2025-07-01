import CalcButtonPole from "./CalcButtonPole";
import CalcDisplay from "./CalcDisplay";
import { useState } from "react";
import { evaluate, log } from 'mathjs';

export default function Calculator() {
    const [displayValue, setDisplayValue] = useState('0')

    function calculate(expression) {
        try {
            const result = evaluate(expression);
            return result.toString()
        } catch (err) {
            return err

        }
    }

    function handleClick(value) {
        const operations = ['+', '-', '*', '/', '%'];

        setDisplayValue(prev => {
            switch (value) {
                case 'del':
                    return prev.slice(0, -1);

                case 'C':
                    return '';

                case ',':
                    const parts = prev.split(/[\+\-\*\/\%]/);
                    const lastNumber = parts[parts.length - 1];
                    if (!lastNumber.includes('.')) {
                        return prev + '.';
                    }
                    return prev;

                case '=':
                    if (prev && !operations.includes(prev.slice(-1))) {
                        try {
                            return calculate(prev);
                        } catch {
                            return 'Error';
                        }
                    }
                    return prev;

                default:
                    if (operations.includes(value)) {
                        if (prev === '') {
                            return value === '-' ? value : '';
                        }
                        if (operations.includes(prev.slice(-1))) {
                            return prev.slice(0, -1) + value;
                        }
                        return prev + value;
                    }

                    if (!isNaN(value)) {
                        const parts = prev.split(/[\+\-\*\/\%]/);
                        const lastNumber = parts[parts.length - 1];

                        if (lastNumber === '0' && value !== '0') {
                            return prev.slice(0, -1) + value;
                        }

                        if (lastNumber.startsWith('0') && !lastNumber.includes('.') && value === '0') {
                            return prev;
                        }
                    }

                    return prev + value;
            }
        });
    }

    return (
        <div className="calc">
            <CalcDisplay value={displayValue}></CalcDisplay>
            <CalcButtonPole onBtnClick={handleClick}></CalcButtonPole>
        </div>
    )
}