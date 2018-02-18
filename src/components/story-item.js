import React, { Component } from 'react'
import Link from 'gatsby-link';

import './story-item.css'

const StoryItem = ({story, active}) => (
    <div className="story" style={active ? { borderLeft: `6px solid #ff6600` } : {}}>
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
            {
                active ? `` : <Link to={`/item/${story.id}`} className="comments">{story.descendants} comments</Link>
            }
        </div>
    </div>
) 

export default StoryItem

export const storyFragment = graphql`
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