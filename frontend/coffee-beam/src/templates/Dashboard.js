import React from "react"
import "../App.css"
import { Result, Button, Card, Col, Row, Divider } from "antd"
import { DoubleRightOutlined, SearchOutlined, CompassOutlined, DollarOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react"

import { COFFEE_MACHINE } from "../data/data"


function Dashboard({ filter, setMachine}) {

  useEffect(() => {
    console.log("Filter changed");
  }, [filter])

  return (
    <div className="dashboard">
      <Col style={{overflow: "auto", position: "relative", display: "flex", flexWrap: "wrap", overflowY: "auto"}}>
        {COFFEE_MACHINE.map(card => (
          
          <div className="card" onClick={() => {setMachine(card)}}>
            <Row>
              <DoubleRightOutlined style={{marginRight: "10px"}} />
              <Col>
                <Row style={{textAlign: "center"}}>
                  <h4 style={{margin: "3px", textAlign: "center"}}>{card.location}</h4>
                  <p style={{margin: "3px", textAlign: "center", marginLeft: "20px"}}>{card.owner}</p>
                </Row>
                <Divider style={{margin: "2px"}}/>
                <cite>Price: {card.price}$</cite>
              </Col>
            </Row>
            
          </div>
          
        ))}
      </Col>
    </div>
  )
}

export { Dashboard }