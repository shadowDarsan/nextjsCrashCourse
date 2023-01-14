import { useRouter } from "next/router"
import { server } from '../../../config'
import Link from "next/link"
import Meta from "@/components/Meta"
const article = ({ getArticle }) => {
    // const router = useRouter()
    // const { id } = router.query


    return (
        <>
            <Meta title={getArticle?.title} />
            <h1>
                {getArticle?.title}
            </h1>
            <p>
                {getArticle?.body}
            </p>
            <br />
            <Link href='/'>Go Back</Link>
        </>
    )
}


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const getArticle = await res.json()

    return {
        props: {
            getArticle
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const getArticles = await res.json()

    const ids = getArticles.map(article => article.id)
    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false

    }
}





// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const getArticle = await res.json()

//     return {
//         props: {
//             getArticle
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//     const getArticles = await res.json()

//     const ids = getArticles.map(article => article.id)
//     const paths = ids.map(id => ({ params: { id: id.toString() } }))

//     return {
//         paths,
//         fallback: false

//     }
// }


export default article