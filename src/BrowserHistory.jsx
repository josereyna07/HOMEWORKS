import React, { useState } from "react";
import { DoublyLinkedList } from "./DoublyLinkedList";

const history = new DoublyLinkedList();
["Home", "About", "Services"].forEach(page => history.visit(page));

const BrowserHistory = () => {
  const [current, setCurrent] = useState(history.getCurrent());

  const goBack = () => {
    history.back();
    setCurrent(history.getCurrent());
  };

  const goForward = () => {
    history.forward();
    setCurrent(history.getCurrent());
  };

  return (
    <div>
      <h2>🌐 Browser Navigation</h2>
      <p>Current Page: {current}</p>
      <button onClick={goBack}>← Back</button>
      <button onClick={goForward}>→ Forward</button>
    </div>
  );
};

export default BrowserHistory;
