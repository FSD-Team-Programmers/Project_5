import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./about.css";

import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-12">
            <div className="div_about">
              <h1>About Us:</h1>
              <ul>
                <li className="li_about">What is occasion website ?</li>
                <p className="paragraphAbout-center">
                  Our website distinguished by providing you with service and
                  providing opportunities to get what you want from the luxury,
                  to provide is through inclusive activities and services.
                </p>
                <li className="li_about">What matters to we ?</li>
                <p className="paragraphAbout-center">
                  We care about comfort, credibility and customer opinion
                </p>
                <li className="li_about">What we do ?</li>
                <p className="paragraphAbout-center">
                  Facilitating the customer to find the right place according to
                  his desire
                </p>
                <li className="li_about">How we do it ?</li>
                <p className="paragraphAbout-center">
                  Through the link between the client and the places of events,
                  they are linked through us through the user and communication
                  with the owner of the place
                </p>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="ourTeam">
              <div>
                <img
                  src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SN4F5LBU-668f5b110892-512"
                  style={{
                    width: "200px",
                    height: "150px",
                    borderRadius: "5%",
                  }}
                ></img>
                <span className="spanAbout">Jadallah Zaitoon</span>
              </div>
              <div>
                <img
                  src="https://ca.slack-edge.com/T01SDTUV9NJ-U01S85B45LP-f16042c6a4e1-512"
                  style={{
                    width: "200px",
                    height: "150px",
                    borderRadius: "5%",
                  }}
                ></img>
                <span className="spanAbout">Alaa Saleh</span>
              </div>
              <div>
                <img
                  src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SF2FHJ1L-086bb01ffbff-512"
                  style={{
                    width: "200px",
                    height: "150px",
                    borderRadius: "5%",
                  }}
                ></img>
                <span className="spanAbout">Noof Mohammed</span>
              </div>
              <div>
                <img
                  src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SF2FEHCN-61ce08be1efd-512"
                  style={{
                    width: "200px",
                    height: "150px",
                    borderRadius: "5%",
                  }}
                ></img>
                <span className="spanAbout">Asma Alenazi</span>
              </div>
              <div>
                <img
                  src="https://ca.slack-edge.com/T01SDTUV9NJ-U01SF2FJFEJ-33bb3f636cac-512"
                  style={{
                    width: "200px",
                    height: "150px",
                    borderRadius: "5%",
                  }}
                ></img>
                <span className="spanAbout">Bushra Kharma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
