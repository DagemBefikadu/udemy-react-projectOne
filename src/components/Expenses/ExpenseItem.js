import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from "../UI/Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)



  function clickHandler () {
    setTitle('Updated!');
    console.log('Clicked');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}7</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;