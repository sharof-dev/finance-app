import React from 'react';
import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function SpendingSummary() {
  const data = {
    labels: ['Subscriptions', 'Bill Payments', 'Money Transfer', 'Food Payment'],
    datasets: [{
      data: [43.8, 25.2, 18.5, 12.5],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'],
      borderWidth: 0
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    cutout: '70%'
  };

  return (
    <Card style={{ height: '100%' }}>
      <Card.Body className='d-flex flex-column justify-content-center align-items-center'>
        <Card.Title style={{
          fontSize: '1rem',
          fontWeight: '600',
          marginBottom: '20px',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>Your Spending Summary</Card.Title>
        <div className="spending-chart w-100" style={{ maxWidth: '300px', aspectRatio: '1' }}>
          <Doughnut data={data} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default SpendingSummary;