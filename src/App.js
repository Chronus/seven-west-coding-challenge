import React from 'react';
import ArticleList from './ArticleList.component';
import './App.css';
import ContentService from './Content.service';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };

    ContentService.getArticles()
      .then(articles => {
        this.setState({articles});
      });
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles}></ArticleList>
      </div>
    );
  }
}

export default App;
