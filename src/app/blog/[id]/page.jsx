import Image from 'next/image'
import styles from './page.module.css'
import { notFound } from 'next/navigation'



export async function getData(id) {
  const res = await fetch(`${process.env.SERVER}/posts/${id}`, {
    cache: 'no-store'
  })

  if (!res.ok || res.status !== 200) {
    return notFound()
  }
  return res.json()
}

export async function generateMetadata({params}) {
  const data = await getData(params.id)
  return {
    title: `${data.title} section`,
    description: `this is ${data.title} section`
  }
}
const singleBlogId = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.singleBlog}>
      <div className={styles.singleBlog_layout_content}>
        <div className={styles.singleBlog_layout_content_info}>
          <h2 className={styles.singleBlog_layout_content_info_h3}>
            {data.title}
          </h2>
          <p className={styles.singleBlog_layout_content_info_p}>
            {data.desc}
          </p>
          <div className={styles.singleBlog_layout_content_info_user}>
            <Image className={styles.singleBlog_layout_content_info_user_img} src={data.image} width={50} height={50} alt={data.title} />
            <span>{data.username}</span>
          </div>
        </div>
        <div className={styles.singleBlog_layout_content_image}>
          <Image className={styles.singleBlog_layout_content_image_img} src={data.image} fill={true} alt={data.username} />
        </div>
      </div>
      <div className={styles.singleBlog_fullDesc}>
        <p className={styles.singleBlog_fullDesc_p}>
          {data.content}  
        </p>
      </div>
    </div>
  )
}

export default singleBlogId