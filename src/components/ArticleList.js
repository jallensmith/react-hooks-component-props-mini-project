import Article from './Article'

function ArticleList({post}){
    const posts = post.map(post=>{
        return <ArticleList key = {post.id} title=
        {post.title} preview={post.preview} date={post.data} />
      })
    return(
        <main>
            {posts}
        </main>
    )
}

export default ArticleList