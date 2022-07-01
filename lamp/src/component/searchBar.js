import React from "react";
import { Button, Form } from "semantic-ui-react";
import "./search_bar.css"
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTopic: "" };
  }

  handleChange = event => {
    this.setState({ searchTopic: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.searchForTopic(this.state.searchTopic);
  };

  render() {
    return (
      <div className="search_engine text-center container">
      <h1 className="text-center  search_bar_heading">Search for a topic</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <input
             className="input_search_bar p-3"
              placeholder="Search topic"
              type = "text"
              value={this.state.searchTopic}
              onChange={this.handleChange}
            />
            <Button className="search_bar_button p-2" type="submit" color="green">
              Search
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default SearchBar;