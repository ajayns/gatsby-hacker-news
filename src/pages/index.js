import React from 'react'
import StoryItem from '../components/story-item'

const IndexPage = ({data}) => (
  <div>
    <ul>
      {data.allHnStory.edges.map(({node}) => <StoryItem story={node} />)}
    </ul>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
    allHnStory(sort: { fields: [order] }, limit: 10) {
      edges {
        node {
          ...Story
        }
      }
    }
  }
`
