import React from 'react';

function TextArea() {
  return (
    <div className="grid grid-row">
      <label htmlFor="text-area">Comments</label>
      <textarea className="" placeholder="Write here" id="text-area"></textarea>
    </div>
  );
}

export default TextArea;
