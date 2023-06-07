const Article = (article) => {
  return (
    <div>
      <h4>{article.title}</h4>
      <p>{article.content}</p>
    </div>
  );
};

export default Article;
