import React from 'react'
import Posts from '../components/posts/posts'
import Link from 'next/link'

const PostPage = () => {
  return (
    <main>
      <Link href="/">Home</Link>
      <Posts />

    </main>
  )
}

export default PostPage