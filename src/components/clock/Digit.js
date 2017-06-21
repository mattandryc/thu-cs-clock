import React from 'react';
import _ from 'lodash';

const number_names = 'zero one two three four five six seven eight nine'.split(' ');

export const Digit = ({num}) => {

  if (isNaN(num)) {
    return (<div className={'dots'}></div>);
  }

  return (
    <div className={`${number_names[num]}`}>
      {
        _.times(7, (i) => {
          return (<span className={`d-block-${i + 1}`} key={i}></span>);
        })
      }
    </div>
  );
};
