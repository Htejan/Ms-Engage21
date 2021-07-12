import React from "react";
import "./index.css";

function About() {
  return (
    <div className="mainHead">
      <section className="about section" id="about">
        <div className="container">
          <div className="section-header">
            <h3 className="title" data-title="Who Am I">
              About me
            </h3>
          </div>

          <div className="section-body grid-2">
            <div className="column-1">
              <h3 className="title-sm">Hello, I'm</h3>
              <p className="text">
                Himanshu Tejan web developer and coding enthusiast.Ever since
                childhood my interests have been in everything.I learn about.
              </p>

              <p className="text">
                At college I have developed keen interest in exploring and
                learning programming languages and tools. Currently I have tried
                my hands on Web Development , Machine Learning and a bit of
                Android Development. Looking forward to learn , explore and get
                more experience in my field.
              </p>

              <a href="https://www.github.com" className="btn">
                Read more
              </a>
            </div>

            <div className="column-2 image">
              <img src="./img/shapes/points4.png" className="points" alt="" />
              <img src="./img/about.png" className="z-index" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default About;
