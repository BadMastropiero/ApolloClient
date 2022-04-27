import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
    query findAllPost {
        findAllPost{
            id
            title
            content
        }  
    }
`;
