import React from "react"
import "../App.css"
import { Result, Button, Card, Col, Row, Flex } from "antd"
import { DoubleRightOutlined, SearchOutlined, CompassOutlined, DollarOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react"

import { COFFEE_MACHINE } from "../data/data"


function Close({ setMachine }) {


  return (
    <div className="close">
      <h1 style={{width: "660px"}}>Thank you for choosing Coffee Beam!</h1>
      <Flex vertical gap="small" style={{ width: '100%' }}>
        <Button type="primary" onClick={() => {setMachine(null)}} block>
          Back to research
        </Button>
      </Flex>
    </div>
  )
}

export { Close }