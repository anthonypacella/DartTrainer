import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../Out/style.css'
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { format } from 'date-fns';

const Out = ( {dartOut} ) => {

    const [out, setOut] = useState(dartOut.out);
    return (
        <div>
            {out}
        </div>
    )
}

export default Out;