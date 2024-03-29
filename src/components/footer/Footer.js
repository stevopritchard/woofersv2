import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import cityAndGuilds from '../../assets/images/footer/city_and_guilds.png';
import firstAid from '../../assets/images/footer/dog_first_aid.JPG';
// import Map from "../map/Map";

import './Footer.css';

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
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h5
                style={{
                  textAlign: 'center',
                  color: '#75a8a6',
                  fontSize: '1.5em',
                  fontFamily: 'Chewy, cursive',
                  fontWeight: '200',
                }}
              >
                Address
              </h5>
              <table>
                <tbody
                  style={{
                    fontSize: '0.8em',
                  }}
                >
                  <tr>
                    <td>40 Hanham Road</td>
                  </tr>
                  <tr>
                    <td>Kingswood</td>
                  </tr>
                  <tr>
                    <td>Bristol</td>
                  </tr>
                  <tr>
                    <td>BS15 8PP</td>
                  </tr>
                </tbody>
              </table>
              <p
                style={{
                  fontSize: '0.8em',
                  textAlign: 'left',
                }}
              >
                The salon is the same building as Kingswood Bakery ( opposite
                Odds and Todd’s ) however, the entrance is the green gated door
                found on Bright Street (next to the green garage){' '}
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
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h5
                style={{
                  textAlign: 'center',
                  color: '#75a8a6',
                  fontSize: '1.5em',
                  fontFamily: 'Chewy, cursive',
                  fontWeight: '200',
                }}
              >
                Parking{' '}
              </h5>
              <br />
              <p
                style={{
                  fontSize: '0.8em',
                  textAlign: 'left',
                }}
              >
                Bright street is unfortunately residential parking only however
                there is parking on Hanham Road (opposite Odds and Todd’s). Many
                of the streets leading away from Kingswood has parking and the
                Kingswood main short stay carparks are a few minutes walk away.
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
                display: 'flex',
                flexFlow: 'column wrap',
                alignItems: 'flex-end',
              }}
            >
              <img
                alt="city&guilds"
                src={cityAndGuilds}
                style={{ height: '65px', paddingTop: '20px' }}
              />
              <img alt="firstaid" src={firstAid} style={{ height: '65px' }} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Footer;
