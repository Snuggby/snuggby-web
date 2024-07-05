import style from "@/styles/contact.module.scss";

const ContactUs = () => {
  return (
    <>
      <div className={style.contactUsContainer}>
        <div className={style.contactUsBanner}>
          <h2>Contact us</h2>
          <p>Let us know how can we help you</p>
        </div>

        <div className={style.contactOptions}>
          <div className={`${style.emailIdContainer} ${style.contactOption}`}>
            <img src="/assets/svg/mail.svg" alt="Email" />
            <div className={style.contactContentContainer}>
              <p className={style.contactHeading}>Email:</p>
              <a href="mailto:Abhilasha.kamble@snuggby.com" target="_blank" className={style.contact}>Abhilasha.kamble@snuggby.com</a>
            </div>
          </div>

          <div className={`${style.phoneNoContainer} ${style.contactOption}`}>
            <img src="/assets/svg/call.svg" alt="Phone" />
            <div className={style.contactContentContainer}>
              <p className={style.contactHeading}>Phone:</p>
              <a className={style.contact} target="_blank" href="tel:9764403487">
              9764403487
              </a>
            </div>
          </div>

          <div className={`${style.InstagramContainer} ${style.contactOption}`}>
            <img src="/assets/svg/instagram.svg" alt="Instagram" />
            <div className={style.contactContentContainer}>
              <p className={style.contactHeading}>Instagram:</p>
              <a className={style.contact} target="_blank" href="https://www.instagram.com/snuggbyindia/">@snuggbyindia</a>
            </div>
          </div>

          <div className={`${style.WhatsappContainer} ${style.contactOption}`}>
            <img src="/assets/svg/whatsapp.svg" alt="Whatsapp" />
            <div className={style.contactContentContainer}>
              <p className={style.contactHeading}>Whatsapp:</p>
              <a className={style.contact} target="_blank" href="https://wa.me/+919764403487?text=Hi%20I%20am%20interested%20in%20your%20services">9764403487</a>
            </div>
          </div>

          <div className={`${style.FacebookContainer} ${style.contactOption}`}>
            <img src="/assets/svg/facebook.svg" alt="Facebook" />
            <div className={style.contactContentContainer}>
              <p className={style.contactHeading}>Facebook:</p>
              <a className={style.contact} target="_blank" href="https://www.facebook.com/snuggbyindia">@snuggby</a>
            </div>
          </div>
        </div>

        <div className={style.addressContainer}>
          {/* <div className={style.address}>
            <p className={style.heading}>Address:</p>
            <p className={style.addressText}>123 Main Street, Anytown, USA</p>
          </div> */}

          <div className={style.map}>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0669355623695!2d78.37003707664803!3d17.456510100807275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c6749f9173%3A0xd8107e90ef634d32!2sSnuggby%20India!5e0!3m2!1sen!2sin!4v1720204646057!5m2!1sen!2sin" height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

          </div>
        </div>
      </div>


      {/* <div className={style.faq}>
        <h3 className={style.sectionHeading}>
          Frequently Asked Questions
        </h3>

        <div className={style.accordion}>
          <div className={style.accordionItem}>
            <div className={style.accordionTitle}>
              <h3>What is Snuggby?</h3>
            </div>

            <div className={style.accordionContent}>
              <p>
                Snuggby is a pet care platform that provides pet parents with
                easy-to-use pet care services. Our mission is to help pets
                become healthy, happy, and well-fed. We understand that pets
                are our most valuable family members, and we strive to
                provide them with the best possible care. At Snuggby, we
                believe that every pet needs to be treated with respect,
                kindness, and care. That&apos;s why we offer a wide range of
                services, including:
              </p>
              <ul>
                <li>
                  Pet walk-ins
                </li>
                <li>
                  Pet boarding
                </li>
                <li>
                  Pet shots
                </li>
                <li>
                  Pet food
                </li>
                <li>
                  Pet supplies
                </li>
                <li>
                  Pet grooming
                </li>
                <li>
                  Pet training
                </li>
            </ul>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactUs;
