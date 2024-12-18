import { LuArrowUpDown } from "react-icons/lu";
import React, { Fragment } from "react";
import {  Form } from "react-bootstrap";

const Card = ({ amount, exchangeRates }) => {
    return (
        <Fragment>
            <div className="credit-card bg-dark text-white p-3 mb-3 rounded">
                <Form>
                    <Form.Control
                        as="select"
                        onChange={e => handleAmountChange(amount, e.target.value)}
                    >
                        {Object.keys(exchangeRates).map((value, i) => (
                            <option key={i} value={value}>
                                {value}
                            </option>
                        ))}
                    </Form.Control>
                    <Form.Control
                        type="number"
                        value={card.amount}
                        onChange={(e) =>
                            handleAmountChange(Number(e.target.value), card.currency)
                        }
                    />
                </Form>
            </div>
            {index < cards.length - 1 && (
                <div className="text-center my-3">
                    <LuArrowUpDown size={24} />
                </div>
            )}
        </Fragment>
    )
}

export default Card
