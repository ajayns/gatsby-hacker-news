import React from 'react'
import StoryItem from '../components/story-item'

const IndexPage = ({data}) => (
  <div>
    <div>
      {data.allHnStory.edges.map(({node}) => <StoryItem story={node} />)}
    </div>
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
