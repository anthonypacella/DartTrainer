import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Out/style.css'
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { format } from 'date-fns';

const Calculator = (dartScore) => {

    const [calc, setCalc] = useState('0');
    const [score, setScore] = useState('0');

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
        <div>
            <div className = 'calcDisplay'>
                {calc || ''}
                {score ? <span className = "is-pulled-right">({score})</span> : ''}

            </div>
            <div className = "columns is-flex">
                <button className = "column m-4" onClick={() => updateCalc("7")}>7</button>
                <button className = "column m-4" onClick={() => updateCalc("8")}>8</button>
                <button className = "column m-4" onClick={() => updateCalc("9")}>9</button>
            </div>
            <div className = "columns is-flex">
                <button className = "column m-4" onClick={() => updateCalc("4")}>4</button>
                <button className = "column m-4" onClick={() => updateCalc("5")}>5</button>
                <button className = "column m-4" onClick={() => updateCalc("6")}>6</button>
            </div>
            <div className = "columns is-flex">
                <button className = "column m-4" onClick={() => updateCalc("1")}>1</button>
                <button className = "column m-4" onClick={() => updateCalc("2")}>2</button>
                <button className = "column m-4" onClick={() => updateCalc("3")}>3</button>
            </div>
            <div className = "columns is-flex">
                <button className = "column m-4" onClick={() => updateCalc("-")}>-</button>
                <button className = "column m-4" onClick={() => updateCalc("0")}>0</button>
                <button className = "column m-4 is-one-half" onClick={() => runCalc()}>=</button>
            </div>
            <div className = "columns is-flex">
                <button className = "column m-4 is0one-half" onClick={() => randomScore()}>Random</button>
                <button className = "column m-4" onClick={() => clearCalc()}>Clear</button>
            </div>
        </div>
    )
}

export default Calculator;