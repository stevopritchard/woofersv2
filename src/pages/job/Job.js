import React from 'react';
import { Row, Col } from 'react-bootstrap';
import image1 from '../../assets/images/job/job.jpg';
import './Job.css';

function Job() {
  return (
    <div className="container">
      <div id="contJob">
        <Row>
          <h2>JOB OPPORTUNITY</h2>
        </Row>
        <Row>
          <img alt="job" src={image1} />
        </Row>
        <Row>
          <Col className="col preScrollable" xs="12" sm="12" md="12" lg="12">
            <span>
              Looking for somewhere to operate your existing dog grooming
              business from?
            </span>
            <br />
            <span>
              Are you a newly qualified dog groomer and searching for a start up
              space?
            </span>
            <br />
            <span>
              We have a wonderful opportunity for a self-employed dog groomer to
              join us on a ‘rent-a-table’ basis. Giving you the chance to
              operate your business from a fully equipped dog grooming salon
            </span>
            <br />
            <h3>WHAT WE PROVIDE</h3>
            <ul>
              <li>
                Use of a tall electric grooming table, straps/restraints and
                steriliser.
              </li>
              <li>
                Use of electric bath and drying facilities including shampoo,
                towels, blaster and stand dryer.
              </li>
              <li>
                All power, heating, light, water, waste costs are included.
              </li>
              <li>Use of toilet and kitchen facilities are also included.</li>
            </ul>
            <p>(important: we cannot have persistent barkers on site)</p>
            <br />
            <h3>WHAT WE WOULD LIKE FROM YOU:</h3>
            <ul>
              <li>Your own public liability insurance</li>
              <li>
                Personal protective equipment (overalls, eye/ear protection)
              </li>
              <li>
                Grooming tools (clippers, blades, scissors, brushes, combs,
                etc.)
              </li>
              <li>
                Your own customers. On occasions where existing groomers are
                fully booked we may be able to provide you with new clients.
              </li>
              <li>
                Have at least one years experience in a dog grooming environment
                and/or a recognised dog grooming qualification.
              </li>
              <li>
                Operate by appointment, working within our operating hours.
              </li>
              <li>
                Work in a professional manner, respecting any equipment and
                keeping the salon clean and tidy.
              </li>
              <li>Have a passion for dog grooming and love for animals</li>
            </ul>
            <br />
            <h3>COST</h3>
            <p>
              Pay is on a percentage basis and hours are flexible, giving a high
              earning potential. Please get in contact for further details.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Job;
