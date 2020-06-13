import React, { Component } from "react";

const quotes = [
  `"Kelly is wonderful with all dogs . very professional. would highly recommend." - Annette`,
  `"Louie has come back feeling so soft & lovely. He has had so much loose hair removed. Totally recommend & will definitely be back" - Jackie`,
  `"Willow has been anxious at a previous groomers but had a lovely experience at Woofers. It’s great that it’s one on one." - Kadie`,
  `"We have just had our cavachon groomed here, Lola looked beautiful afterwards. Would definitely recommend. Thank you" - Ria`,
  `"Luna had her first visit and experience of pampering at Woofers Dog Grooming Bristol. And I must say myself she looks even more beautiful" - Sharon`,
  `"Poppy came back looking and smelling gorgeous. Would definitely recommend." - Kim`
];

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = { text: quotes[0] };
  }

  componentDidMount() {
    this.newText();
  }

  newText() {
    let i = 0;
    setInterval(() => {
      i >= quotes.length ? (i = 0) : this.setState({ text: quotes[i++] });
    }, 6000);
  }

  render() {
    return (
      <p
        style={{
          fontFamily: "Chewy, cursive",
          color: "#75a8a6",
          overflowWrap: "break-word",
          wordWrap: "break-word",
          hyphens: "auto"
        }}
      >
        {this.state.text}
      </p>
    );
  }
}

export default Testimonials;
