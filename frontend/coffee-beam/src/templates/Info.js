import React from "react"
import "../App.css"
import { Result, Button, Card, Col, Row, Flex } from "antd"
import { DoubleRightOutlined, SearchOutlined, CompassOutlined, DollarOutlined} from '@ant-design/icons';
import { useEffect, useState } from "react"

import { COFFEE_MACHINE } from "../data/data"


function Info({ setStep, card }) {


  return (
    <div className="info">
    <h1>Have look to the info</h1>
    <Row align={"bottom"} className={"title-info"}>
      <Col flex={1}>
        <Row justify={"start"} align={"middle"}>
          <Col flex={1}>
            <Row justify={"start"} align={"middle"}>
              <Col flex={1}>
                <h1>{card.location}</h1>
              </Col>
              <Col flex={1}>
                <Row justify={"end"} align={"middle"}>
                <QRCode value={card. || '-'} />
                          </Row>
                        </Col>
                      </Row>
                      <Row justify={"start"} align={"middle"}>
                        <Col>
                          <h6>
                            {comic.release_date && <cite>PUBBLICATO: {moment(comic.release_date).format("l")} </cite>}
                          </h6>
                        </Col>
                        {comic.certified && (
                          <Col flex={1}>
                            <Row className={"certified"} align={"middle"} justify={"end"}>
                              <CheckOutlined />
                              <cite>Certificato dall'editore</cite>
                            </Row>
                          </Col>
                        )}
                      </Row>
                    </Col>
                  </Row>
                  <Row className={"page-btn"} align={"middle"} justify={"start"} gutter={[8, 10]}>
                    <Col>
                      <Button type={"primary"} icon={<HomeFilled />} onClick={() => navigate(`/${service}/comics`)}>
                        Torna ai volumi
                      </Button>
                    </Col>
                    {comic.series && (
                      <Col>
                        <Button
                          type={"primary"}
                          icon={<BookFilled />}
                          onClick={() => navigate(`/${service}/series/${comic.series?.id}/comics`)}
                        >
                          Vedi collana
                        </Button>
                      </Col>
                    )}
                    {comic.comicset && (
                      <Col>
                        <Button
                          type={"primary"}
                          icon={<SearchOutlined />}
                          onClick={() => navigate(`/${service}/comicsets/${comic.comicset?.id}/comics`)}
                        >
                          Vedi Serie
                        </Button>
                      </Col>
                    )}
                    <Col>
                      <Button
                        type={"primary"}
                        icon={<EditFilled />}
                        onClick={() => navigate(`/${service}/comics/${comic.id}/update`)}
                      >
                        Modifica
                      </Button>
                    </Col>
                    {service === EnvService.PUB && (
                      <Col>
                        <Button type={"primary"} icon={<CheckOutlined />} onClick={() => certifyFields()}>
                          Certifica
                        </Button>
                      </Col>
                    )}
                    <Col>
                      <Button
                        type={"primary"}
                        danger
                        icon={<DeleteFilled />}
                        onClick={() =>
                          Modal.confirm({
                            content: `Sicuro di voler eliminare "${comic?.title}"?`,
                            onOk: () => {
                              if (idComic) ComicsAPI.deleteComic(parseInt(idComic), service).then(() => navigate(-1))
                            },
                            className: "confirm-del",
                          })
                        }
                      >
                        Elimina
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
    </div>
  )
}

export { Info }