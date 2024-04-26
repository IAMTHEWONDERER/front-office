import React, { useState } from 'react';

function Plan() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      type: 'ONLINE',
      sessions: 3,
      pricePerSession: 149,
      totalPrice: 449,
    },
    {
      type: 'IN PERSON',
      sessions: [6, 12],
      pricePerSession: [149, 139],
      totalPrice: [839, 1559],
    },
    {
      type: 'ALL-IN-ONE',
      sessions: 24,
      pricePerSession: 129,
      totalPrice: 2856,
    },
  ];

  const handleClickPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
<div style={{ width: 'auto', height: '750px', margin: '55px', backgroundColor: 'red' }}></div>


  )
}

export default Plan;
