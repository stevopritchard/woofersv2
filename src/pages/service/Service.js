import React from 'react';
import { Row, Col } from 'react-bootstrap';
import image1 from '../../assets/images/service/service.JPG';
import './Service.css';

function Service() {
  return (
    <div className="container">
      <div id="contService">
        <Row>
          <Col className="col" xs="12" sm="12" md="12" lg="12">
            <h3>A full groom at Woofers as standard includes:</h3>
            <ul>
              <li>
                A deep shampoo tailored to your dogs coat (including sensitive
                medicated shampoo).{' '}
                <span role="img" aria-label="bathtub">
                  &#x1F6C1;
                </span>
              </li>
              <li>A blueberry facial cleanse to remove any tear stains.</li>
              <li>
                Ear protection is used when drying your dog to help them keep
                comfortable and calm.
              </li>
              <li>
                Ears are cleaned and nails are clipped{' '}
                <span role="img" aria-label="nail polish">
                  &#x1F485;
                </span>
              </li>
              <li>
                Their coat is deshedded so there is less hair around your home.{' '}
              </li>
              <li>
                Cologne/perfume specifically for dogs is used to keep them
                smelling gorgeous for longer.
              </li>
              <li>
                Complimentary cuddles with all treatments.{' '}
                <span role="img" aria-label="paw prints">
                  &#x1F43E;
                </span>
              </li>
            </ul>
            <div style={{ marginTop: '25px' }}></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Prices</h3>
            <ul>
              <li>
                Small( e.g.: Yorkshire Terrier, Shih Tzu, Westie) from £40
              </li>
              <li>Small wool coats ( e.g.: Bichon, ToyPoodles ) from £43</li>
              <li>Medium (e.g.: Springer Spaniel, Schnauzer) from £43</li>
              <li>
                Medium wool/ thick coats ( e.g. Cockapoo, Cocker Spaniels,
                Tibetan Terrier)  from £45-50
              </li>
              <li>Large dogs (Airedales, Giant Schnauzer) from £55</li>
              <li>Large Wool (e.g. Labradoodle, golden doodle) from £60</li>
              <li>Hand Stripping: from £60 for small and £75 for medium</li>
              <li>Wash and face/feet tidy £35</li>
              <li>Wash and dashed from £40</li>
              <li>Nails from £7.50</li>
            </ul>
            <p>
              Please note that all prices may vary due to the size, temperament
              of your dog and their coat condition, additional fees will apply
              if you dog is aggressive or is matted. If your dog has fleas an
              additional £10 will apply to treat the dog and the salon.
            </p>
          </Col>
          <Col>
            <h3>Ultrasonic Teeth cleaning:</h3>
            <p>
              Did you know that 80% of all dogs over the age of 3 suffer from
              some form of gum and/or tooth issue? Neglecting your dog’s dental
              health can have other serious health implications, as bacteria
              from a dental infection can result in other organs being
              compromised, including the heart valves and kidneys.
            </p>
            <p>
              Cleany Teeth is a state-of-the-art hygiene technology that uses
              ultrasound to break down plaque and tartar on teeth and around
              gums.
            </p>
            <h5>The benefits to your dog:</h5>
            <ul>
              <li>
                The brush uses ultrasound, so there is no movement, noise or
                vibration.
              </li>
              <li>It cleans where bristles can't reach</li>
              <li>
                No abrasive damage or irritation to teeth or gums as a result
              </li>
              <li>
                Antibacterial effect eliminates bacteria on the teeth, gums and
                gum pockets
              </li>
              <li>It reduces breath odour</li>
              <li>
                It improves blood circulation and reduces gum inflammation
              </li>
            </ul>
            <p>
              Cleany Teeth is an award-winning product and we are delighted to
              be able to offer Cleany Teeth sessions here at Woofers.
            </p>
          </Col>
          <Col>
            <h3>Cost</h3>
            Initial 3 - 5 sessions to clear plaque/tartar build up (must be
            taken within two weeks of each other) - £35 per session Maintenance
            sessions added on to the end of a groom - £20 When starting out with
            treatments, we recommend a programme of 3 - 5 over a two week period
            ( depending on the severity of build up). This enables existing
            bacteria to be killed and plaque and tartar to be removed. After
            this initial course Cleany Teeth teeth cleaning can be carried out
            as part of your dogs regular grooming sessions.
          </Col>
        </Row>
        <Row>
          <img alt="teeth-cleaning" src={image1} />
        </Row>
      </div>
    </div>
  );
}

export default Service;
