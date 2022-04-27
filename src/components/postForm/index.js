import React, {useState} from 'react'
import Input from '../input'
import { useMutation  } from '@apollo/client'
import { CREATE_POST } from '../../graphQL/operations/mutations/index'
import { ALL_POSTS } from '../../graphQL/operations/queries'
import './postForm.styles.css'

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState(null);
  const [addPost, {loading, error}] = useMutation(CREATE_POST, {
    update (cache, {data}) {
      const newPost = data?.newPost;
      const existingPosts = cache.readQuery({
        query: ALL_POSTS,
      });
      console.log(existingPosts)
      cache.writeQuery({
        query: ALL_POSTS,
        data: {
          findAllPost: [
            ...existingPosts.findAllPost,
            newPost,
          ]
        }
      })
    }
  })


  if(loading) return 'Submiting...'
  if(error) return `Submission error! ${error.message}`;

  return (
      <form
        className='PostForm'
        onSubmit={e => {
          e.preventDefault();
          addPost(
            { variables: {
              newPost: { 
                title: title,
                content: content,
                user_id: parseInt(userId) 
              } 
            }
          });
          setTitle('');
          setContent('');
          setUserId(null);
        }}
      >
          <Input 
            type="text"
            label="Post Title"
            onChange={e => setTitle(e.target.value)} 
          />
           <Input 
            label="Post Content"
            type="text"
            onChange={e => setContent(e.target.value)} 
          />
           <Input
            label="User Id" 
            type="number"
            onChange={e => setUserId(e.target.value)} 
          />
        <button className='SubmitForm' type="submit">Add Post</button>
      </form>
  )
}

export default PostForm
