import { gql } from "@apollo/client";

export const CREATE_POST = gql`
    mutation newPost ($newPost: PostInput!){
        newPost (newPost: $newPost) {
            id
            title
            content
        }
    }
`