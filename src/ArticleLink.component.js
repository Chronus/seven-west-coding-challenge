import React from 'react';

export default class ArticleLink extends React.Component {
    render() {
        if (!this.props.article) return null;

        return <div className='article-link'
            onClick={() => this.navigateToArticle()}>
            { this.getImage() }
            { this.getHeading() }
        </div>;
    }

    navigateToArticle() {
        window.location.href = '/article/' + this.props.article.id;
    }

    getImage() {
        if (!this.props.article.mainImage) return;

        return <div className='article-link__img-container'>
            <img src={this.props.article.mainImage.reference}
                alt={this.props.article.mainImage.captionText}></img>
        </div>;
    }

    getHeading() {
        if (!this.props.article.heading) return;

        return <div className='article-link__heading'>{this.props.article.heading}</div>;
    }
}