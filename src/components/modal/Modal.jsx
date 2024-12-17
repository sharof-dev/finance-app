import React, { Fragment, useRef, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useTransactions } from '../../contexts/TransactionContext';

function Modals({ handleClose, show, handleShow }) {
  const { setTransactions } = useTransactions()

  const name = useRef('');
  const mode = useRef('');
  const amount = useRef(null);
  const handleSubmit = () => {
    handleClose();
    const event = {
      name: name.current.value,
      mode: mode.current.value,
      amount: amount.current.value,
      date: new Date().toLocaleDateString(),
      id: new Date().getMilliseconds()
    }
    setTransactions((prev) => [...prev, event])
    console.log(event);
  }

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Add Expencec
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Expence</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Figma"
                autoFocus
                ref={name}
              />
              <Form.Label>Mode</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cash"
                autoFocus
                ref={mode}
              />
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                placeholder="Amount"
                autoFocus
                ref={amount}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Modals;