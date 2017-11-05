import React from 'react';
import * as api from '../utils/api';

export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        };
        this.updateLanguage = this.updateLanguage.bind(this);
    }
    componentDidMount() {
        this.updateLanguage((this.state.selectedLanguage))
    }
    updateLanguage(lang) {
        this.setState(() => {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });
        api.fetchPopularRepos(lang).then((repos) => {
            this.setState(function() {
                return {
                    repos: repos
                }
            })
        })
    }
    render() {
        return (
            <div>
                <SelectLanguage selectedLanguage={this.state.selectedLanguage} onSelect={this.updateLanguage}/>
                {!this.state.repos
                    ? <LoadScreen src="http://gifimage.net/wp-content/uploads/2017/08/loading-animated-gif-1.gif"/>
                    : <RepoGrid repos={this.state.repos}/>
                }
            </div>
        )
    }
}

function LoadScreen(props) {
    return (
        <img className="logo" src={props.src}/>
    )
}

function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map(function(repo, index) {
                return (
                <li key={repo.name} className="popular-item">
                    <div className="popular-rank">#{index+1}</div>
                    <ul className="space-list-items">
                        <li>
                            <img className="avatar" src={repo.owner.avatar_url}/>
                        </li>
                        <li><a href={repo.html_url}>{repo.name}</a></li>
                        <li>@{repo.owner.login}</li>
                        <li>{repo.stargazers_count} stars</li>
                    </ul>
                </li>
                )
            })}
        </ul>
    )
}

function SelectLanguage(props) {
    let languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className="languages">
            {languages.map((lang) => {
                return (
                    <li
                        style = {lang === props.selectedLanguage ? {color: 'red'} : null}
                        key={lang}
                        onClick={props.onSelect.bind(null, lang)}>
                        {lang}
                    </li>
                )
            })}
        </ul>
    )
}
