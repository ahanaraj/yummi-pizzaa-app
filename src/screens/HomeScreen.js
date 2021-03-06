// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/NavComponent';

export default function Home () {
  return (
    <section className="hero is-home-background is-fullheight">
      <div className="hero-head">
        <Navbar/>
      </div>
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-light is-1">
            Yummi Pizza 
          </h1>
          <h2 className="subtitle is-styled-font has-text-warning">
            At your Doorsteps in seconds!!!!
          </h2>
        </div>
      </div>
    </section>
  );
};
