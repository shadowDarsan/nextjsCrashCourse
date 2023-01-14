import { useRouter } from "next/router"
import Link from "next/link"

const article = ({ getArticle }) => {
    // const router = useRouter()
    // const { id } = router.query


    return (
        <>
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

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const getArticle = await res.json()

    return {
        props: {
            getArticle
        }
    }
}

export default article