import Image from 'next/image'
import styles from './page.module.css'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 className={styles.contact_text}>let{"'"}s keep in touch</h2>
      <div className={styles.contact_layout}>
        <div className={styles.contact_layout_image}>
          <Image src={'/contact.png'} alt='contact' fill={true} className={styles.contact_layout_image_img} />
        </div>
        <div className={styles.contact_layout_form}>
          <input type="text" placeholder='name' className={styles.contact_layout_form_input} />
          <input type="email" placeholder='email' className={styles.contact_layout_form_input} />
          <textarea type="text" rows={20} placeholder='message' className={styles.contact_layout_form_input} ></textarea>
          <button className={styles.contact_layout_form_submit}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact