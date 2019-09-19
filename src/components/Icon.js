import React from 'react';

const centerFlex = {
  display: 'flex',
  justifyContent: 'center'
};

const cloudinarySvg = imageName =>
  `https://res.cloudinary.com/burncartel/image/upload/c_fit,q_70/v1568138570/icons/${imageName}.svg`;

const Icon = ({ iconType, width, customText, hideText }) => (
  <div
    className="Icon-container"
    style={{ width: `${width}px`, height: `auto` }}
  >
    <div className="Icon" style={{ ...centerFlex, paddingBottom: '0.2em' }}>
      <img
        className="Icon-svg image"
        src={cloudinarySvg(iconType)}
        alt={iconType}
        style={{
          width: width,
          height: width
        }}
      />
    </div>
    {hideText ? null :
    <div className="Icon-title" style={centerFlex}>
      <span
        className="Icon-title-content"
        style={{ fontSize: '0.8em', textAlign: 'center', color: 'whitesmoke' }}
      >
        {customText ? customText : iconType}
      </span>
    </div>
    } 
  </div>
);

Icon.defaultProps = {
  width: 60
};


export default Icon;
