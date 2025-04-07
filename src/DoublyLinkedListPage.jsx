// DoublyLinkedListPage.jsx
import React, { useState } from "react";
import { DoublyLinkedList } from "./DoublyLinkedList";

const list = new DoublyLinkedList();
["Home", "About", "Contact"].forEach(page => list.visit(page));

const DoublyLinkedListPage = () => {
  const [current, setCurrent] = useState(list.getCurrent());

  const handleBack = () => {
    list.back();
    setCurrent(list.getCurrent());
  };

  const handleForward = () => {
    list.forward();
    setCurrent(list.getCurrent());
  };

  return (
    <div>
      <h2>Browser Navigation</h2>
      <p>Current Page: {current}</p>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleForward}>Forward</button>
    </div>
  );
};

export default DoublyLinkedListPage;
