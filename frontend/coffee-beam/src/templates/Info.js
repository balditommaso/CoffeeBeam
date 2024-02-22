import React from "react"
import "../App.css"
import { Result, Button, Card, Col, Row, Flex, QRCode, Divider } from "antd"
import { DoubleRightOutlined, CheckOutlined, CompassOutlined, DollarOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react"

import { COFFEE_MACHINE } from "../data/data"


function Info({ setStep, setMachine, card }) {

  const [showURL, setShowURL] = useState(false);

  return (
    <Col>
      <h1>Have look to the info</h1>
      <div className="info">
      <Row align={"bottom"} className={"title-info"}>
        <Col flex={1}>
          <Row justify={"start"} align={"middle"}>
            <Col flex={1}>
              <Row justify={"start"} align={"middle"}>
                <Col flex={1}>
                  <h1>{card.location}</h1>
                  <h4>Price: {card.price}$/each</h4>
                </Col>
                <Col flex={1}>
                  <Row justify={"end"} align={"middle"} style={{cursor: "pointer"}}>
                      {!showURL && <Col onClick={() => {setShowURL(true)}}><QRCode value={card.url || '-'} /><p>Scan and pay</p></Col>}
                      {showURL && <p onClick={() => {setShowURL(false)}}>{card.url || "no URL"}</p>}
                  </Row>
                </Col>
              </Row>
              <Flex  justify={"space-evenly"} align={"center"}>
              <Col>
                  <p>
                    Point of contact: <h5>{card.owner}</h5>
                  </p>
                </Col>
                <Divider type="vertical"/>
                <Col>
                  <p>
                    Brand: <h5>{card.brand}</h5>
                  </p>
                </Col>
                <Divider type="vertical"/>
                <Col>
                  <p>
                    Coffee type: <h5>{card.coffee}</h5>
                  </p>
                </Col>
                <Divider type="vertical"/>
                <Col>
                  <p>
                    Payment method: <h5>{card.payment}</h5>
                  </p>
                </Col>
                <Divider type="vertical"/>
                <Col>
                  <p>
                    Note: <h5>{card.note}</h5>
                  </p>
                </Col>
              </Flex>
              <Row justify={"start"} align={"middle"} gutter={[40, 14]}>
                
              </Row>
            </Col>
          </Row>
          <Row className={"page-btn"} align={"middle"} justify={"start"} gutter={[8, 10]}>
            <Flex vertical gap="small" style={{ width: '100%', marginTop: "40px" }}>
              <Button type={"primary"} icon={<CompassOutlined />} onClick={() => {setStep(0)} }>
                Go Back
              </Button>
              <Button type={"primary"} icon={<CheckOutlined />} onClick={() => {setStep(2)} }>
                Paid
              </Button>
            </Flex>
          </Row>
        </Col>
      </Row>
      </div>
    </Col>
  )
}

export { Info }