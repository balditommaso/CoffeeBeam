import React from "react"
import "../App.css"
import { Result, Button, Divider, Input, InputNumber, Slider, Radio } from "antd"
import { Checkbox, Col, Row } from 'antd'
import { useEffect, useState } from "react"


const DecimalStep = () => {

  const [inputValue, setInputValue] = useState(1)
  const onChange = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue(value);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={0}
          max={10}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
          step={0.1}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={0}
          max={1}
          style={{
            margin: '0 16px',
          }}
          step={0.01}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  )
}

function Filter({ setFilter }) {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

  const [sort, setSort] = useState(null);

  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setSort(e.target.value);
  };

  return (
    <div className="filter">
      <h3>Filter</h3>
      <div>
        <Checkbox.Group orientation="vertical" onChange={onChange}>
          <Col>
            <Divider orientation="center">Location</Divider>
            <Input placeholder="Wilson Hall" />
            <Divider orientation="center">Payment</Divider>
            <Checkbox value="Pay online">Pay online</Checkbox>
            <Checkbox value="Pay cash">Pay cash</Checkbox>
            <DecimalStep/>

            <Divider orientation="center">Coffee</Divider>
            <Checkbox value="Espresso">Espresso</Checkbox>
            <Checkbox value="Beans">Beans</Checkbox>
            <Checkbox value="Powder">Powder</Checkbox>
          </Col>

    </Checkbox.Group>
      </div>
      <h3 style={{marginTop: "15px"}}>Sort</h3>
      <Radio.Group onChange={onChangeRadio} value={sort}>
        <Radio value={"location"}>Location</Radio>
        <Radio value={"price"}>Price</Radio>
        <Radio value={"owner"}>Owner</Radio>
      </Radio.Group>
    </div>
  )
}

export { Filter }