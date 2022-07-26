import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Calculator/style.css'
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { format } from 'date-fns';

const Calculator = (dartScore) => {

    const [calc, setCalc] = useState('');
    const [score, setScore] = useState('');

    const updateCalc = (value) => {
        if ((value === '-' && calc === '') || (value === '-' && calc.slice(-1) === '-')) {
            return;
        }

        if (value != "-") {
            setScore(eval(calc + value).toString());
        }

        setCalc(calc + value);
    }

    const clearCalc = () => {
        setCalc('');
        setScore('');
    }

    function randomScore() {
        const twoDartOuts = []
    }

    function runCalc() {
        setCalc(eval(calc).toString());

    }

    return (
        <div className="calculator-grid">
            <div className="output">
                <div className="previous-operand"></div>
                <div className="current-operand"></div>
            </div>
            <button className="span-three">RANDOM</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>DEL</button>
            <button>0</button>
            <button>ENTER</button>
        </div>
    )
}

export default Calculator;