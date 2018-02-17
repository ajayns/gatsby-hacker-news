import React, { Component } from 'react'
import './story-item.css'

class StoryItem extends Component {
       
    render() {
        const story = this.props.story;

        return (
            <div id={story.id} className="story">
                <div className="header">
                    <a href={story.url}>
                        <h4>{story.title}</h4>
                    </a>
                    <span className="story-domain">
                        {` `}({story.domain})
                    </span>
                </div>
                <div className="info">
                    <h4 className="score">&#9652; {story.score}</h4>
                    {` `}
                    by <span className="author">{story.by}</span>
                    {` `}
                    <span className="time">{story.timeISO}</span>
                    {` `}
                    <a href="#" className="comments">{story.descendants} comments</a>
                </div>
            </div>
        )
    }
}

export default StoryItem

export const storyFragement = graphql`
    fragment Story on HNStory {
        id
        title
        score
        order
        domain
        url
        by
        descendants
        timeISO(fromNow: true)
    }
`