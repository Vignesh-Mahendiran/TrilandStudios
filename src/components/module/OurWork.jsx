import React from "react";
import { ContentContainer } from "../styles/home";
import { menuCards } from "../constant/home";
const OurWork = () => {
  return (
    <ContentContainer className="wrapper" id={"ourServices"}>
      <h1>
        Our <span className="colored">Services</span>
      </h1>
      <h1>
        <span className="colored">2D</span> Cartoon
      </h1>
      <p>
        2D animation is also great for
        <strong> communicating complicated ideas in an easy to understand way</strong>.
      </p>
      <div className="youtube">
        <iframe
          src="https://www.youtube.com/embed/Z7NrYwl0F5k?si=kfcVQ2yt4bdl_oDR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <p>
        <strong>Election Management System Project</strong>
      </p>
      <div className="youtube">
        <iframe
          src="https://www.youtube.com/embed/P22d1CYWpLQ?si=HAp_W479a9ZHXtjX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1>
        <span className="colored">3D</span> Cartoon
      </h1>
      <p>
        3D animation can create realistic and immersive visuals with dynamic camera movements, intricate
        details, and advanced lighting effects.
      </p>
      <div className="youtube">
        <iframe
          src="https://www.youtube.com/embed/qvBwd6jZHb0?si=qzCiYvB3wDRS1n2i"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1>
        <span className="colored">VFX</span> Showreel
      </h1>
      <p>
        VFX can make the audience's experience more engaging and thrilling. It can make a normal scene
        memorable in a more creative and unique way.
      </p>
      <div className="youtube">
        <iframe
          src="https://www.youtube.com/embed/Fhk_cLkiJWA?si=U1xwC9sVswJGy_gr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1>
        <span className="colored">Video</span> Editing
      </h1>
      <div className="youtube">
        <iframe
          src="https://www.youtube.com/embed/ZgpTaSyLvhQ?si=RxftJekybsCnNYjL"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <h1>
        Graphic <span className="colored"> Design</span>
      </h1>
      <p>Designing and developing customized mobile applications and expand your brand's reach.</p>
      <div className="imageContainer">
        {menuCards.map((value, index) => (
          <div className="menucard">
            <img src={value.src} alt={value.name} />
          </div>
        ))}
      </div>
    </ContentContainer>
  );
};

export default OurWork;
