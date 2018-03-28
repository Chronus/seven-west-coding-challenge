import React from 'react';
import ContentService from './Content.service';

export default class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = { articleItems: undefined };

        ContentService.getArticleById(props.match.params.id)
            .then(articleItems => this.setState({ articleItems }));
    }

    render() {
        if (!this.state.articleItems) return null;

        const heading = this.state.articleItems.find((i) => i.kind === 'heading');
        const content = this.state.articleItems.find((i) => i.kind === 'content');
        return <div>
            { this.getHeadingText(heading) }
            { this.getContentText(content) }
        </div>
    }

    getHeadingText(heading) {
        if (!heading) return;

        return heading
            ? <h1>{ heading.text }</h1>
            : null;
    }

    getContentText(content) {
        if (!content) return;

        return content
            ? content.blocks
                ? content.blocks.map((block, i) => <div key={i}>{block.text}</div>)
                : null
            : null;
    }
}