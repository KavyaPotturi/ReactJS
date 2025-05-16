import React, { useState } from 'react';

export default function ToggleText() {
  const [show, setShow] = useState(false);

  return (
    <div className="p-4">
      <button 
        className="bg-blue-600 text-white px-4 py-2 rounded" 
        onClick={() => setShow(prev => !prev)}
      >
        {show ? 'Hide' : 'Show'} Text
      </button>
      {show && <p className="mt-4 text-lg">Here is some text you toggled!</p>}
    </div>
  );
}

