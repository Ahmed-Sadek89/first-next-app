import Image from 'next/image'
import styles from './page.module.css'
import { portfolioGallary } from './portfolioGallary'
import Link from 'next/link'

export const metadata = {
  title: "lamamia portfolio",
  description: "this is lamamia portfolio"
}

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio_content}>
        <h6 className={styles.portfolio_content_h6}>Choose a gallary</h6>
        <div className={styles.portfolio_content_gallary}>
          {
            portfolioGallary.map(index => (
              <Link href={`/portfolio/${index.text}`} className={styles.portfolio_content_gallary_image} key={index.id}>
                <Image src={index.src} fill={true} className={styles.portfolio_content_gallary_image_img} alt={index.text} />
                <span className={styles.portfolio_content_gallary_image_span}>{index.text}</span>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Portfolio