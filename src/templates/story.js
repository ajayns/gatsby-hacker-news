import React from 'react'

import StoryItem from '../components/story-item'
import Comment from '../components/comment'

const Story = ({data}) => (
    <div>
        <StoryItem story={data.hnStory} active={true} />
        <ul>
            {data.hnStory.children.map((comment) => <Comment key={comment.id} data={comment}/>) }
        </ul>
    </div>
)

export default Story

export const pageQuery = graphql`
    query StoryQuery($id: String!) {
        hnStory(id: { eq: $id }) {
            ...Story
            children {
                ...Comment
            }
        }
    }
`