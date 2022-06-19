import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Score/style.css'
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { format } from 'date-fns';

const Score = ( {dartOut} ) => {

    const [score, setScore] = useState(dartOut.score);
    return (
        <div>
            {score}
        </div>
    )
}

export default Score;