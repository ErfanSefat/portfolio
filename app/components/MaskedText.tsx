import React from 'react';

const MaskedText = ({text}:{text:string}) => {
  return (
      <div className="text-transparent bg-cover bg-clip-text bg-[url('/grad.png')] hover:bg-right">
        {text}
      </div>
  );
};

export default MaskedText;
