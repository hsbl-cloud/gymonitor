import React from "react"
import moment from 'moment'
import { Row, Col, Button } from 'react-bootstrap'
import { Input, Form } from "antd"
import './index.scss'
export default function ClockIn() {
    return (
        <div className="clock-in">
            
            <div className="title-welcome">
                <p>Welcome to Apartment Gym</p>

                <div className="clock-info">
                    <p>{moment().format('MMM DD, YYYY')}</p>
                    <p>{moment().format('HH.MM')}</p>
                </div>
            </div>

            <div className="clock-in-input">
                <Form
                className="w-100 d-flex justify-content-center flex-column align-items-center"
                layout="vertical"
                >
                    <Form.Item
                    label="Name"
                    className="w-100"
                    >
                        <Input placeholder="Your Name" />
                    </Form.Item>

                    <Form.Item
                    className="w-100 d-flex justify-content-center flex-column align-items-center"
                    label="Unit"
                    >
                        <Input className="w-100" placeholder="Your Unit" />
                    </Form.Item>
                </Form>

                <Button className="btn btn-primary"> Clock In</Button>
            </div>

            <div className="learn-more">
                <div className="btn btn-outline-primary">
                    learn more
                </div>
            </div>
        </div>
    )
}