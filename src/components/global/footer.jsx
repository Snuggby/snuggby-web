import React from 'react';
import styles from '@/styles/global/footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.aboutUs}>
          <h2>About Us</h2>
          <p>
            We are a team of passionate pet care experts who are dedicated to
            providing the best care for your pets. Our team of experts is always
            ready to assist you with any questions or concerns you may have.
            
            <span>
            <Link href={'/contact'}>
             Contact 
            </Link>
            </span>
             us today to schedule an appointment.
          </p>
        </div>
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/event">Event</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/aboutUs">About</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.copywrite}>
        &copy; 2024 Snuggby. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
