import React from 'react';
import {Digit} from './Digit.js'
import {formatTime} from '../../lib/clockHelpers'

export const Clockface = ({dateObject}) => {

    const formattedTime = formatTime(dateObject);
    console.log(formattedTime);

    return (
        <div className="digits">
            {formattedTime
                .split('')
                .map((n, i) => {
                    const intNum = parseInt(n, 10);
                    return(
                        <Digit key={i} num={intNum}/>
                    )

                })
            }
        </div>
    )
};
