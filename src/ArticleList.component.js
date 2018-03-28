import React from 'react';
import ArticleLink from './ArticleLink.component';

export default class ArticleList extends React.Component {
    render() {
        if (!this.props.articles) return null;

        return <div className='article-list'>
            { this.generateArticleNodes() }
        </div>;
    }

    generateArticleNodes() {
        return this.props.articles.map((a, i) => <ArticleLink article={a} key={i}></ArticleLink>);
    }
}