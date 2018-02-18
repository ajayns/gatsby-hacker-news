import React from 'react'

import './comment.css'

const Comment = ({data}) => (
    <div className="comment">
        <div className="text">
            <span dangerouslySetInnerHTML={{ __html: data.text}}></span>
        </div>
        <div className="info">
            <span className="author">by {data.by}</span>
            {` `}
            <span className="time">{data.timeISO}</span>
        </div>
    </div>
)

export default Comment

export const commentFragment = graphql`
    fragment Comment on HNComment {
        id
        text
        timeISO(fromNow: true)
        by
    }
`