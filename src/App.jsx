import React from 'react';
import Card from './Card.jsx';

const App = () => {
  return (
    <div>
      <Card 
        name="Asokere Success"
        bio={
          <>
            I'm an Electronics and Computer Engineering student
            and a Frontend developer<br></br> in training who loves building and learning new things.
          </>
        }
      />
    </div>
  );
};

export default App;
