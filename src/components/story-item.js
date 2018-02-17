import React, { Component } from 'react'

class StoryItem extends Component {
    render() {
        return (
            <li>{this.props.story.title}</li>
        )
    }
}

export default StoryItem

export const storyFragement = graphql`
    fragment Story on HNStory {
        id
        title
    }
`