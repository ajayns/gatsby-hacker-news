const path = require(`path`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
        // The “graphql” function allows us to run arbitrary
        // queries against local Hacker News graphql schema. Think of
        // it like the site has a built-in database constructed
        // from the fetched data that you can run queries against.

        // HnStory is a data node type created from the HN API “allHnStory” is a
        // "connection" (a GraphQL convention for accessing a list of nodes) gives
        // us an easy way to query all HnStory nodes.
        graphql(`
            {
                allHnStory (sort: { fields: [order] }, limit: 10) {
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
            
            const template = path.resolve(`./src/templates/story.js`)
            // Create HN story pages.
            // We want to create a detailed page for each
            // story page. We'll just use the HN story ID for the slug.
            result.data.allHnStory.edges.forEach(({node})=> {
                // Each page is required to have a `path` as well
                // as a template component. The `context` is
                // optional but is often necessary so the template
                // can query data specific to each page.
                createPage({
                    path: `/item/${node.id}`,
                    component: template,
                    context: {
                        id: node.id,
                    },
                })
            });

            resolve()
        })
    })
}