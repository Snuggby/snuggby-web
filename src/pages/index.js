import heroStyle from "@/styles/heroSection.module.scss";
import style from "@/styles/index.module.scss";
import eventStyle from "@/styles/eventSection.module.scss";
import InstagramGallery from "@/components/instagramGallery";
import Carousel from "@/components/carousel";
export default function Home() {
  return (
    <>
      <div className={heroStyle.heroContainer}>
        <div className={heroStyle.leftSection}>
          <div className={heroStyle.badge}></div>
          <div className={heroStyle.textSection}>
            <h2 className={heroStyle.mainheading}>Welcome to Snuggby</h2>
            <h5>where every tail wags and every purr is cherished!</h5>
          </div>
          <button className={heroStyle.button}>Know our Story</button>
        </div>
        <div className={heroStyle.rightSection}>
          {/* <div></div> */}
          <img src="/assets/img/Rectangle7.png" alt="Hero Image" />
        </div>
      </div>

      <div className={style.dedicatedContainer}>
        <h3 className={style.sectionHeading}>
          Dedicated Pet Well-being
          <img src="/assets/svg/Dog_Paw.svg" alt="Dog Paw" />
        </h3>
        <p>
          At Snuggby, We&apos;re committed to safeguarding their well-being,
          striving to assist pet parents in making informed decisions regarding
          their pets&apos; nutrition, health, and hygiene. Simultaneously, we
          equip pet care service providers with cutting-edge technology to
          enhance their ability to serve the pet care community effectively. Our
          dedication lies in ensuring the well-being of every furry family
          member, fostering a professional yet compassionate environment for
          both pets and their caregivers
        </p>
      </div>

      {/* <div className={style.MainCarousel}>
        <Carousel />
      </div> */}



      <div className={eventStyle.EventContainer}>
        <h3 className={style.sectionHeading}>Our Events</h3>
        <div className={eventStyle.eventCardContainer}>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
          <div className={eventStyle.eventCard}>
            <img
              src="https://images.pexels.com/photos/16033674/pexels-photo-16033674/free-photo-of-sea-coastline-at-dawn.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              alt="Event"
            />
            <p className={eventStyle.eventHeading}>Event Heading</p>
          </div>
        </div>
      </div>

      <div className={style.OurStorySection}>
        <h3 className={style.sectionHeading}>Our Story</h3>
        <p className={style.ourStorySubHeading}>
        Inspired by <strong> Oreo </strong>, Our Beloved Pet Companion
        </p>
        <div className={style.ourStoryContainer}>
          <div className={style.ourStoryText}>
            <p>
              Our journey with Snuggby began with a furry friend named Oreo, our
              cherished pet dog. Like many pet owners, we faced numerous
              challenges when we welcomed Oreo into our lives. Determined to
              provide her with the best care possible, we sought advice from
              various sources, only to encounter conflicting information.
            </p>
            <p>
              Realizing the need for a reliable source of pet care guidance, we
              embarked on a mission to create Snuggby. Our vision was clear: to
              offer authentic information and resources to fellow pet parents,
              empowering them to make informed decisions for their beloved
              companions.
            </p>
            <p>
              Driven by our own experiences and the desire to make pet care
              simpler and more accessible, Snuggby was born. We set out to not
              only provide valuable insights and advice but also to bridge the
              gap of information in pet care community.
            </p>
            <p>
              With Snuggby, our aim is to revolutionize the pet care industry by
              leveraging technology to streamline services and enhance the
              overall experience for everyone involved. Whether you&apos;re a pet
              parent seeking guidance or a service provider looking to improve
              your offerings, Snuggby is here to support you every step of the
              way.
            </p>
            <p>
              Join us in our mission to create a world where pet care is
              seamless, informed, and filled with love.
            </p>
          </div>
          <div className={style.ourStoryImage}>
            <img
              src="/assets/img/ourStoryIndex.png"
              alt="Our Story"
            />
            </div>
        </div>
      </div>

      <div className={style.InstagramGallery}>
        <h3 className={style.sectionHeading}>Our Gallery</h3>
        <InstagramGallery />
      </div>
    </>
  );
}
