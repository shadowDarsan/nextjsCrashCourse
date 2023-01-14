import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }) {
  console.log(articles)
  return (
    <>
      <div>

        <Head>
          <title> Web Dev News</title>
          <meta name='keywords' content='web Development, Programming' />
        </Head>

        <h1>Welcome to Next.js</h1>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}