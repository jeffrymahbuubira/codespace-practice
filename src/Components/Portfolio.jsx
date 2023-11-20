/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "BERT + Advanced 5-layer CNN for Hate Speech Classification 🎉",
    description:
      "Bert Hate Speech Classification is a project that aims to classify hate speech from Davidson Dataset. The project is built using BERT and adding Advanced 5-Layer CNN to improve the performance of the model.",
    url: "https://huggingface.co/spaces/jeffrymahbuubi/bert-advanced-cnn-hate-speech-classification",
  },
  {
    title: "MisterMenu",
    description: "Web application that allows customers to order food from a restaurant's menu",
    url: "https://mistermenu.jeffrymahbuubi.com/",
  },
  {
    title: "Hybrid Solar Charger for Quadcopter",
    description:
      "An autonomous Landing Quadcopterand A charging system developed by combining solar enery as power source and landing pad modified to do the charging sequence",
    url: "https://read.cv/jeffrymahbuubi",
  },
  {
    title: "COVID-19 Chest X Ray Classification Using Convolutional Neural Network (CNN)",
    description:
      "An Artificial Intelligence (AI) approach to detect between Normal, COVID, and Pneumonia Lungs. The program was fully developed with MATLAB and using deep learning technique.",
    url: "https://github.com/jeffrymahbuubi/COVID-19-Chest-X-Ray-Classification",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
