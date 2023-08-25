import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import App from "../../App";

const captions = [
  "Hello I’m Pringle and I’m feeling festive and fabulous after being at Woofers!",
  "Teddy with his first teddy Bear trim.",
  "When you’ve been a very good girl and now its treat time.",
  "Fletcher with his fluffy legs.",
  "Hello, I’m Jesse and I came to Woofers for my puppy intro!",
  "Hello, my names Charlie and I’m ready for school!",
  "Hello I’m Pippa!",
  "Millie's quarantine transformation.",
  "Rosie is ready for summer.",
  "Hello I'm Orla and I've had my first hand strip.",
  "The look of love 🥰 Jessie came to Woofers for just a wash and blow dry. Such a sweetie.",
  "The beautiful Skye came to Woofers for a PAWdicure but truth be told I spent most of the time giving that sweet little face kisses.",
  "The beautiful Luna who gives the best sleepy cuddles. 🌟",
  "Hello I’m Millie 🐾 I came to Woofers to get all dolled up for my Dog Show on Saturday. Kelly said I should get first place. 🥇",
  "The many stages of Aida’s time at Woofers...",
  "Barney, the cutest boy on the block. 😍",
  "Hello I’m Pixie 🎀 I came to Woofers for a Monday Makeover. ",
  "Hey🐾 I’m Jasper and I have the worlds cutest snaggle tooth. 🤓",
  "Amberley loves a pamper at Woofers. 🛀🏻",
  "Hello I’m Hendrix 🐾 feel I could be the next James Bond after my handstrip at Woofers. 🖤",
  "Poppy giving a handshake after her groom.",
  "Hello I’m Coco and I’m undeniably ridiculously cute. ☺️"
];

class ImageGrid extends Component {
  constructor(props) {
    super(props);

    this.images = [];
    const context = require.context(
      "../../assets/images/gallery",
      true,
      /\.(jpeg)$/
    );
    context.keys().forEach(filename => {
      this.images.push(context(filename));
    });

    this.state = {
      index: 0,
      isOpen: false
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
  }

  openLightbox(index) {
    this.setState({ index: index, isOpen: true });
  }

  closeLightbox() {
    this.setState({ isOpen: false });
  }

  moveNext() {
    this.setState(prevState => ({
      index: (prevState.index + 1) % this.images.length
    }));
  }

  movePrev() {
    this.setState(prevState => ({
      index: (prevState.index + this.images.length - 1) % this.images.length
    }));
  }

  render() {
    let lightbox;
    if (this.state.isOpen) {
      lightbox = (
        <Lightbox
          mainSrc={this.images[this.state.index]}
          nextSrc={this.images[(this.state.index + 1) % this.images.length]}
          prevSrc={
            this.images[
              (this.state.index + this.images.length - 1) % this.images.length
            ]
          }
          onCloseRequest={this.closeLightbox}
          onMovePrevRequest={this.movePrev}
          onMoveNextRequest={this.moveNext}
          onImageLoadError={App.onImageLoadError}
          imageCaption={captions[this.state.index]}
        />
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly"
        }}
      >
        {this.images.map((img, i) => {
          return (
            <div class="image-container">
              <img
                key={i}
                class="myImage"
                alt="placeholder"
                src={img}
                srcSet={img}
                onClick={e => this.openLightbox(i)}
                style={{ width: "200px", margin: "10px 0 10px 0" }}
              />
            </div>
          );
        })}
        {lightbox}
      </div>
    );
  }
}

export default ImageGrid;
