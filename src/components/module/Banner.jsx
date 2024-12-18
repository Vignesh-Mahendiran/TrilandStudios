import trilandBanner from "../../assets/trilandBanner.mp4";
const Banner = () => {
  return (
    <div className="banner">
      <div className="rightBanner" style={{}}>
        <video
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
          autoPlay
          loop
          muted
          src={trilandBanner}
          alt="trilandBanner"
        ></video>
      </div>
      <div className="leftBanner">
        <div
          style={{
            width: "90%",
            maxWidth: 1700,
            margin: "0 auto",
          }}
        >
          <div className="bannerContent">
            <h1>We Create As We Speak</h1>
            <p>
              At Triland Studios, we’re passionate about telling stories through
              the art of animation. As a dynamic startup, we’re on a mission to
              bring fresh, unique, and visually stunning animated experiences to
              life. Whether it’s through 2D animation, 3D modeling, or
              cutting-edge visual effects, we craft stories that resonate with
              audiences of all ages and backgrounds.
            </p>
            <a href="#contact">Contact us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
