// NoHeaderFooterLayout.js

import React from 'react';

const SpecialLayout = ({ children }) => {
  return (
    <div className="relative">
      <main>
        {children}
      </main>
    </div>
  );
};

export default SpecialLayout;    