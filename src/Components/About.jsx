/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Creative Product Designer | Transforming Ideas into Seamless SaaS Experiences | Crafting Innovative Solutions to Elevate User Journeys | GDSC Co-Lead 23 | GDG Cloud Lahore | KCD Lahore | Alpha MLSA";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "User Interface (UI)",
  "User Experience (UX)",
  "Research",
  "Wireframing",
  "Prototyping",
  "Customer Experience (CX)",
  "Graphic Design",
  "Printing Design",
  "Brand Design",
  "Motion Graphics",
  "Product Design"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Digital Product Designer with a foundation in Computer Science, successfully completing 50+ UI/UX design projects in approximately three years. Recently transitioning from UI/UX, I bring a fresh perspective and refined skills to create exceptional user experiences. Eager to tackle new challenges and contribute innovative solutions at the intersection of design and technology.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
