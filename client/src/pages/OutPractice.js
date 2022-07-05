import { useQuery, useMutation } from '@apollo/client';
import React from 'react';
import auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Score from '../components/Score'
import Out from '../components/Out'
import Calculator from '../components/Calculator'

const dartOut = {
    score: 150,
    out: "T20 T18 D18"
}


export default function OutPractice () {
    return (
        <div>
            <div>
                <Score dartOut = {dartOut}></Score>
                <Out dartOut = {dartOut}></Out>
            </div>
            <div>
                <Calculator></Calculator>
            </div>
        </div>

    )

}
