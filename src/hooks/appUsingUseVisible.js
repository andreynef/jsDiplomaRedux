import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
// <a target="_blank" rel="noopener noreferrer" href={'https://www.yelp.com/'} style={{textDecoration: 'none', color:'black'}}>

import useVisible from './useVisible';


function Auth() {
  const [colorHexCode, setColorHexCode] = useState('#000000');
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <div className="AppNoRedux">
      <h3>React color picker - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>

      <div>
        <b>Selected Hex Color: </b>
        <span className="color-box" style={{ background: colorHexCode }}></span>
        {colorHexCode}
      </div>
      <br />

      <input type="text" readOnly value={colorHexCode} onClick={e => setIsVisible(!isVisible)} />
      {isVisible && <div style={{ position: 'absolute' }} ref={ref}>
        <SketchPicker
          color={colorHexCode}
          onChange={e => setColorHexCode(e.hex)} />
      </div>}
    </div>
  );
}

export default AppNoRedux;

// Use the above hooks in the Auth.js file to manage show/hide color picker on click.
//   We are also showing the selected color in box along with the color code for live view.