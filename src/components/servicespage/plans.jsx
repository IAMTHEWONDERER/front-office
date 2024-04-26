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
<div style={{ width: 'auto', height: '750px', margin: '55px', backgroundColor: 'CE0000' }}>
<h1 style={{ fontFamily: "koulen", width: '100%', textAlign: 'center', fontSize: '4rem', padding: '40px 0px 0px 0px', margin: '30px 0 15px', color: 'white' }}>CHOOSE YOUR PLAN</h1>
<h2 style={{ fontFamily: "koulen", width: '100%', textAlign: 'center', fontSize: '28.5px', padding: '0px 60px', margin: '15px 0 30px 0 ', color: 'white' }}>Buy YOUR PLAN TODAY aND PLAN IT FOR LATER, Refund is possible during 1 month from the date of purchase (depending on the number of sessions in the package)</h2>

</div>
)
}

export default Plan;