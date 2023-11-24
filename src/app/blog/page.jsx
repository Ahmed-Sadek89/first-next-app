import styles from './page.module.css'
import Image from 'next/image'

export const metadata = {
  title: `lamamia blog`,
  description: `this is lamamia blog`
}

async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_SERVER || 'http://localhost:3000';
  const res = await fetch(
    `${apiUrl}/api/posts`
  );
  return await res.json();
}
const Blog = async () => {
  // https://first-next13-app-three.vercel.app/api/posts
  // const res = await fetch(`http://localhost:3000/api/posts`, {
  //   cache: 'no-store'
  // })
  // if (!res.ok) {
  //   throw new Error('something went error...')
  // }
  const blogs = await getData()
  return (
    <>
    {
      blogs.map(index => (
      <div className={styles.blog_layout} key={index._id}>
        <div key={index._id} className={styles.blog_layout_content} >
          <div className={styles.blog_layout_content_info} key={index._id} >
            <h2 className={styles.blog_layout_content_info_h3}>
              {index.title}
            </h2>
            <p className={styles.blog_layout_content_info_p}>
              {index.desc}
            </p>
          </div>
          <div className={styles.blog_layout_content_image}>
            <Image src={index.image} fill={true} alt={index.title} />
          </div>
        </div>
      </div>

      ))
    }
    </>
  )
}

export default Blog
