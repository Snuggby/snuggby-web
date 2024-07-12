import style from "@/styles/aboutUs.module.scss";
const AboutUs = () => {
  return (
    <>
      <div className={style.aboutUsContainer}>
        <div className={style.aboutUsHeroSection}>
          <img src="assets/img/about.jpg" alt="Hero Image" />
          <div className={style.aboutHeading}>
            <h1>About Us</h1>
            <p>
            We, at Snuggby, help Pet Parents make better decisions for their Fur-babies!
            </p>
          </div>
        </div>

        <div className={style.aboutUs}>
          <div className={`${style.ourStory} ${style.aboutUsSection}`}>
            <div className={style.aboutUsSectionContentHeading}>
              <h2>Our Story</h2>
            </div>
            <div className={style.aboutUsSectionContent}>
              <p>
                Our journey with Snuggby began with a furry friend named Oreo,
                our cherished pet dog. Like many pet owners, we faced numerous
                challenges when we welcomed Oreo into our lives. Determined to
                provide her with the best care possible, we sought advice from
                various sources, only to encounter conflicting information.
                Realizing the need for a reliable source of pet care guidance,
                we embarked on a mission to create Snuggby.
              </p>
            </div>
          </div>
          <div className={`${style.ourVision} ${style.aboutUsSection}`}>
            <div className={style.aboutUsSectionContentHeading}>
              <h2>Our Vision</h2>
            </div>
            <div className={style.aboutUsSectionContent}>
              <p>
                To create a world where technology becomes the bridge between
                pets, pet parents, and the dedicated service providers. Feel
                joy, connect effortlessly, and run smoothly. Pets and people,
                bonded in harmony! Mission To revolutionize the pet care
                ecosystem by leveraging innovative technology to seamlessly
                connect pets, pet parents, and service providers. Through our
                transparent & passionate efforts, we aim to cultivate a
                harmonious bond between pets and people, enriching lives and
                enhancing the well-being of all involved in the pet care
                journey.
              </p>
            </div>
          </div>
          <div className={`${style.aim} ${style.aboutUsSection}`}>
            <div className={style.aboutUsSectionContentHeading}>
              <h2>Our Aim</h2>
            </div>
            <div className={style.aboutUsSectionContent}>
              <p>
                With Snuggby, our aim is to revolutionize the pet care industry
                by leveraging technology to streamline services and enhance the
                overall experience for everyone involved. Whether you&pos;re a
                pet parent seeking guidance or a service provider looking to
                improve your offerings, Snuggby is here to support you every
                step of the way. Join us in our mission to create a world where
                pet care is seamless, informed, and filled with love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
