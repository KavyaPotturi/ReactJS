import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>BMI Calculator</h2>
      <input type="number" placeholder="Weight (kg)" onChange={e => setWeight(e.target.value)} />
      <input type="number" placeholder="Height (cm)" onChange={e => setHeight(e.target.value)} />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <h3>Your BMI: {bmi}</h3>}
    </div>
  );
}

export default App;
