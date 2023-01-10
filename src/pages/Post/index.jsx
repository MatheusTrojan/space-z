import React from 'react'
import { useParams } from 'react-router-dom'
import posts from "json/posts.json"
import ModelPost from 'components/ModelPost'

export default function Post() {

    const params = useParams()

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    console.log(post)

    return (
        <ModelPost
            coverPhoto={`/assets/posts/${post.id}/capa.png`}
            title={post.title}
        >
            Texto..
        </ModelPost>
    )
}
