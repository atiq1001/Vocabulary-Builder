import { Card, CardHeader } from '@mui/material';
import { useState } from 'react';
import './MyCard.css';

function MyCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  return (
    <Card
      onClick={handleClick}
      className={`card ${isFlipped ? 'flipped' : ''}`}
    >
      <div className="front">
        <CardHeader title="My Card Title" sx={{ textAlign: 'center' }} />
      </div>
      <div className="back">
        <CardHeader
          title="Flipped Card Title"
          subheader="This is the back of the card"
          sx={{ textAlign: 'center' }}
        />
      </div>
    </Card>
  );
}

export default MyCard;

