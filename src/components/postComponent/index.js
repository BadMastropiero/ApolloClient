import React from 'react'
import { useQuery } from '@apollo/client';
import {ALL_POSTS} from '../../graphQL/operations/queries/index';
import './postComponent.style.css';

const PostComponent = () => {
    const { loading, error, data } = useQuery(ALL_POSTS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.findAllPost.map((posts) => {
        return (
            <div className='PostCard' key={posts.is}>
                <h2>{posts.title}</h2>
                <p>{posts.content}</p>
                <span>{posts.views}</span>
            </div>
        )
    })
}

export default PostComponent
