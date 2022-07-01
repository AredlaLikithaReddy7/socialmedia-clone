import React from "react";
import { Container, Header } from "semantic-ui-react";
import { getArticles } from "../APIS/api";
import ArticleList from "./articlesList";
import SearchBar from "./searchBar";
import './trending_news.css'
class Trendingnews extends React.Component {
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };

  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  render() {
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state;
    return (
      <Container className="container">
        
        <SearchBar searchForTopic={this.searchForTopic} />
        <p style={{ textAlign: "center" }} className="mt-4 ">
          Powered by <a href="https://newsapi.org/" className="text-warning">NewsAPI.org</a>
        </p>
        {loading && (
          <p style={{ textAlign: "center" }}>Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
    );
  }
}

export default Trendingnews;