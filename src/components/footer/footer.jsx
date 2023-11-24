import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_copywrite} >©2023 Lamamia. All rights reserved.</div>
      <div className={styles.footer_links}>
        <Image src="/1.png" width={15} height={15} className={styles.footer_links_icon} alt="Lama Dev Facebook Account" />
        <Image src="/2.png" width={15} height={15} className={styles.footer_links_icon} alt="Lama Dev" />
        <Image src="/3.png" width={15} height={15} className={styles.footer_links_icon} alt="Lama Dev" />
        <Image src="/4.png" width={15} height={15} className={styles.footer_links_icon} alt="Lama Dev" />
      </div>
    </div>
  )
}

export default Footer