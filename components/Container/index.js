import React, { useState } from "react";
import Head from "../Head";
import About from "../About";
import Hero from "../Hero";
import Team from "../Team";
import Contact from "../Contact";
import LangSwitch from "../LangSwitch";
import { PhotoSwipe } from "react-photoswipe";
import { galleries } from "../Team/galleries.js";

function Container() {
  const [galleryState, setGalleryState] = useState(false);
  const [galleryID, setGalleryID] = useState(undefined);

  let galleryToggle = function(gid) {
    setGalleryID(gid);
    setGalleryState(true);
  };

  let galleryClose = function() {
    setGalleryID(undefined);
    setGalleryState(false);
    console.log(galleryID, galleryState);
  };

  let options = {
    shareEl: false
  };

  return (
    <>
      <Head />

      <LangSwitch />
      <Hero />
      <About />
      <Team galleryToggle={galleryToggle} />
      <Contact />
      {galleryState ? (
        <PhotoSwipe
          isOpen={galleryState}
          items={galleries[galleryID].items}
          onClose={galleryClose}
          options={options}
        />
      ) : null}
    </>
  );
}

export default Container;
