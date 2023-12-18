import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';

const InclusionExclusions = ({inclusions,exclusions}) => {
  const [displayedContent, setDisplayedContent] = useState(
    <div>
      <ul className='bullet-container list'>
      {inclusions.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
    </div>
  );

  const [isInclusionsActive, setIsInclusionsActive] = useState(true);

  const handleButtonClick = (type) => {
    if (type === 'inclusions' && !isInclusionsActive) {
      setIsInclusionsActive(true);
      setDisplayedContent(
        <div>
          <ul className='bullet-container list'>
          {inclusions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
        </div>
      );
    } else if (type === 'exclusions' && isInclusionsActive) {
      setIsInclusionsActive(false);
      setDisplayedContent(
        <div>
          <ul className='bullet-container list'>
          {exclusions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <>
      <div className='app'>
        <div className="inclusion-container">
          <div className='left-content'>
            <button
              onClick={() => handleButtonClick('inclusions')}
              id='btn1'
              style={{ backgroundColor: isInclusionsActive ? 'green' : 'lightblue' }}
            >
              Inclusions
            </button>
            <button
              onClick={() => handleButtonClick('exclusions')}
              id='btn2'
              style={{ backgroundColor: isInclusionsActive ? 'lightblue' : 'green' }}
            >
              Exclusions
            </button>
            </div>
            <div className='bullet-container'>{displayedContent}</div>
          </div>
          </div>
    </>
  );
};

InclusionExclusions.propTypes = {
  inclusions: PropTypes.arrayOf(PropTypes.string).isRequired,
  exclusions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InclusionExclusions;
