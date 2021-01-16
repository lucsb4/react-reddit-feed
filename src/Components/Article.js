function Article(props) {

  const base_url = "https://reddit.com"

  return (
    <article>
      <a href={base_url + props.article.permalink}>
        <img 
          src={(props.article.thumbnail === "self" || props.article.thumbnail === "") ?
          '/images/image-not-found.jpg' 
          : (props.article.thumbnail)}
          alt="thumbnail"
          height="100px"
          width="100px"
        />
        <h3>{props.article.title}</h3>
      </a>
    </article>
  );
}

export default Article;
