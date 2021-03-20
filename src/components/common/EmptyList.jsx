import React from 'react';
import { ReactComponent as NoData } from '../../assets/no_data.svg';
import { ReactComponent as UpArrow } from '../../assets/uparrow.svg';

function EmptyList({ msg }) {
  return (
    <div className="emptylist__container">
      <div className="left">
        <p>{msg}</p>
        <NoData style={{ height: '500px', width: '500px' }} />
      </div>
      <div className="right">
        <UpArrow className="uparrow" />
        <h4>Add Some Here</h4>
      </div>
    </div>
  );
}

export default EmptyList;
