import React from 'react';
import {Digit} from './Digit.js';

const formatTime = (dateObject) => {
  let formattedTime = formatLeadingZero(dateObject.getHours()) + ':';
  formattedTime += formatLeadingZero(dateObject.getMinutes()) + ':';
  formattedTime += formatLeadingZero(dateObject.getSeconds());

  return formattedTime;

};

const formatLeadingZero = (num) => {
  return num < 10 ? '0' + num.toString() : num.toString();
};

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
          );

        })
      }
    </div>
  );
};
