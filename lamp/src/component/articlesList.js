import React from "react";
import { Grid, Header, Image, List } from "semantic-ui-react";
import "./articles_image.css"
const ArticleItem = props => {
  const { article } = props;
  return (
    <List.Item style={{ padding: 30 }}>
      <Grid>
        <Grid.Column
          width={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <Header className="text-danger" as="h3">{article.title}</Header>
          <List.Description className="text-dark" style={{ margin: "20px 0" }}>
            {article.description}
          </List.Description>
          <List bulleted horizontal>
            <List.Item>
              <a href={article.url}>{article.source.name}</a>
            </List.Item>
            <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={5}>
          <Image className=" articles_images" src={article.urlToImage} />
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};

const ArticleList = props => {
  return (
    <List divided style={{ maxWidth: 900, margin: "0 auto" }} className="articles_background">
      {props.articles.map((article, index) => (
        <div className="articles_list">
        <ArticleItem article={article} key={article.title + index} />
        <hr></hr></div>
      ))}
    </List>
  );
};

export default ArticleList;