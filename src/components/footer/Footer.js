import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

import cityAndGuilds from "../../assets/images/footer/city_and_guilds.png";
import firstAid from "../../assets/images/footer/dog_first_aid.JPG";
import Map from "../map/Map";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="container">
        <div id="contFooter">
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              large={4}
              xl={4}
              className="col"
              style={{
                width: "220px",
                fontFamily: "Chewy, cursive",
                color: "#696969",
                fontWeight: "200"
              }}
            >
              <h5
                style={{
                  textAlign: "center",
                  color: "#75a8a6",
                  fontSize: "1.5em"
                }}
              >
                Address
              </h5>
              <table>
                <tbody>
                  <tr>
                    <td>38 Mill Lane</td>
                  </tr>
                  <tr>
                    <td>Warmley</td>
                  </tr>
                  <tr>
                    <td>Bristol</td>
                  </tr>
                  <tr>
                    <td>BS30 8BN</td>
                  </tr>
                  <tr>
                    <td>(opposite the Mill Lane Methodist Church car park )</td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontWeight: "bold", fontFamily: "Helvetica neue" }}>
                Please do not park on or block the drive as this is private
                access to the neighbouring houses. There is plenty of street
                parking available.{" "}
              </p>
            </Col>
            <Col
              xs={12}
              sm={6}
              md={6}
              large={4}
              xl={4}
              className="col"
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Map />
            </Col>
            <Col
             xs={12}
             sm={6}
             md={6}
             large={4}
             xl={4}
              className="col"
              style={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "flex-end"
              }}
            >
              <img
                alt="city&guilds"
                src={cityAndGuilds}
                style={{ height: "65px", paddingTop: "20px" }}
              />
              <img alt="firstaid" src={firstAid} style={{ height: "65px" }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
