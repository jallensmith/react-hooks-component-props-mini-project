function Article({title, data='January 1, 1970', preview}){
    return(
        <article>
            <h3>{title}</h3>
            <small>{data}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article