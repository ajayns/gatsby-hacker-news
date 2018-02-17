const path = require(`path`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        graphql(`
            {
                allHnStory(limit: 10) {
                    edges {
                        node {
                            id
                        }
                    }
                }
            }
        `)
        .then(result => {
            if(result.errors) {
                reject(result.errors)
            }

            result.data.allHnStory.edges.forEach(({node})=> {
                console.log(node.id)
                createPage({
                    path: `/item/${node.id}`,
                    component: path.resolve(`./src/templates/story.js`),
                    context: {
                        id: node.id,
                    },
                })
            });

            resolve()
        })
    })
}