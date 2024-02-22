import React, { useState } from "react"
import "../App.css"
import { Result, Button, Row, Col } from "antd"
import { Dashboard } from "./Dashboard"
import { Filter } from "./Filter"


function Explore({ setMachine }) {

  const [filter, setFilter] = useState({})

  return (
    <div className="explore">
      <Col>
        <h1>Where are you?</h1>
        <div>
          <Row>
            <Dashboard filter={filter} setMachine={setMachine}/>
            <Filter setFilter={setFilter}/>
          </Row>
        </div>
      </Col>
    </div>
  )
}

export { Explore }