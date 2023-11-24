import Button from '@/components/Button/Button'
import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import { items } from './data'
import { notFound } from 'next/navigation'

export async function generateMetadata({params}) {
  const {category} = params;
  return {
    title: `${category} section`,
    description: `this is ${category} section`
  }
}

const Category = ({ params }) => {
  const { category } = params
  if (items[category] === undefined) {
    return notFound()
  }
  return (
    <div className={styles.category}>
      <h6 className={styles.category_h6}>{category}</h6>
      <div className={styles.category_layout}>
        {
          items[category]?.map(index => (
            <div key={index.id} className={styles.category_layout_content}>
              <div className={styles.category_layout_content_info}>
                <h2 className={styles.category_layout_content_info_h3}>{index.title}</h2>
                <p className={styles.category_layout_content_info_p}>{index.desc}</p>
                <Button text={'See More'} link={'#'} />
              </div>
              <div className={styles.category_layout_content_image}>
                <Image src={index.image} fill={true} alt={index.title} className={styles.category_layout_content_image_img} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Category