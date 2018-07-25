import React from 'react'

import githubIcon from './img/github.svg'
import './GithubPagesLink.css'

const GithubPagesLink = props => {
    return (
        <div className="gh-pages-link">
            <a href={props.link} className="gh-pages-link__link">
                <img src={githubIcon} className="gh-pages-link__icon" alt="GH Pages"/>
                <span className="gh-pages-link__text">
                    View on Github
                </span>
            </a>
        </div>
    )
}

GithubPagesLink.defaultProps = {
    link: 'https://github.com/'
}

export default GithubPagesLink