import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contactus = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialContainer}>
        <button style={styles.iconButton}>
          <FaTwitter size={30} />
        </button>
        <button style={styles.iconButton}>
          <FaInstagram size={30} />
        </button>
        <button style={styles.iconButton}>
          <FaFacebook size={30} />
        </button>
      </div>

      <div style={styles.contactInfo}>
        <p>Email: community@example.com</p>
        <p>Mobile: +1-234-567-890</p>
      </div>

      <div style={styles.copyright}>
        <p>&copy; 2024 Your Community Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid #e7e7e7',
    position: 'absolute',
    left: '0',
    bottom: '0',
    width: '100%',
  },
  socialContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  iconButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    margin: '0 10px',
  },
  contactInfo: {
    marginBottom: '10px',
  },
  copyright: {
    fontSize: '14px',
    color: '#666',
  },
};

export default Contactus;
