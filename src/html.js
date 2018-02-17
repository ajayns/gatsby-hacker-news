import React, { Component } from "react"
import favicon from "./assets/favicon.ico"

class Html extends Component {
    render() {
        return (
            <html op="news" lang="en">
                <head>
                    {this.props.headComponents}

                    <meta name="referrer" content="origin" />
                    <link rel="shortcut icon" href={favicon} />
                    <meta charSet="utf-8" />
                    <meta
                        name="description"
                        content="Gatsby Hacker News: A clone of Hacker News written in Gatsby"
                    />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <title>Gatsby Hacker News</title>
                </head>
                <body>
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}

module.exports = Html
