import Button from '@/components/Button/Button'
import styles from './about.module.css'
import Image from 'next/image'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_background}>
        <Image
          src={'https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}
          alt='about'
          className={styles.about_background_image}
          fill={true}
        />
        <div className={styles.about_background_text}>
          <h5>Degital Storytellers</h5>
          <p>Handcrafting award winning digital experiences</p>
        </div>
      </div>
      <div className={styles.about_content}>
        <div className={styles.about_content_section}>
          <h3  className={styles.about_content_section_h3}>Who Are we?</h3>
          <p className={styles.about_content_section_p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae.
            <br/>
            <br/>
             A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.about_content_section2}>
          <div className={styles.about_content_section}>
            <h3 className={styles.about_content_section_h3}>what we do?</h3>
            <p className={styles.about_content_section_p}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
              suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
              eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
              Creative Illustrations
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast and Handy
              <br />
              <br /> - Mobile Apps
            </p>
          </div>
          <Button link={'/contact'} text={'contact'} />
        </div>
      </div>
    </div>
  )
}

export default About