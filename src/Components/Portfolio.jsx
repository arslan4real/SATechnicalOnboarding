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
import image from "../images/LinkedIn-Backdrop.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Heer - Mobile App | UI/UX Design",
    description:
      "Introducing Heer, the app connecting you to local communities, fostering meaningful connections and authentic insights. Engage in vibrant discussions with reactions, ensuring your voice is heard. Privacy is paramount, with Heer safeguarding personal information. Discover and engage with local communities worldwide through default state-based communities. You can also join communities created by locals or you can create your own. Seamlessly explore the world using the intuitive map feature. Let Heer be your gateway to vibrant, interactive, and private community experiences, whether you're a resident or a traveler.",
    url: "https://www.behance.net/gallery/174865925/Heer-Mobile-App-UIUX-Design",
  },
  {
    title: "Task Manager App | Hero Me | Mobile App | UI/UX",
    description:
      "A gamified task manager app where users embody a knight, leveling up through completing tasks, customizing their avatar, and earning rewards. Transforming productivity into an epic adventure, Hero Me adds a touch of fun to task management.",
    url: "https://www.behance.net/gallery/190614101/Task-Manager-App-Hero-Me-Mobile-App-UIUX",
  },
  {
    title: "Ticket Booking App | Histix | Mobile App | Web | UI/UX",
    description:
      "Histix is an innovative event discovery and booking app designed to cater to users' diverse interests, from music concerts and sports games to tech conferences and festivals. With a user-friendly interface and personalized features, Histix aims to revolutionize the way users explore and enjoy events in their area.",
    url: "https://www.behance.net/gallery/191023497/Ticket-Booking-App-Histix-Mobile-App-Web-UIUX",
  },
  {
    title: "Oral Hygiene | Oral Pod | IoT Management | UI/UX Design",
    description:
      "Oral Pods is an innovative application designed to revolutionize oral hygiene routines through seamless integration with an IoT brushing tool. With personalized profiles, real-time monitoring, and advanced customization options, Oral Pods enhances the brushing experience for individuals and families alike.",
    url: "https://www.behance.net/gallery/191856763/Oral-Hygiene-Oral-Pod-IoT-Management-UIUX-Design",
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
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
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
