import React from "react";

class Project extends React.Component {
    render() {
        return (
            <li>
                <h2>{this.props.title}</h2>
                <div>
                    Repository: <a target="_blank" href={"https://github.com/austinald1/" + this.props.repoName}>{this.props.repoName}</a>
                </div>
                <div>
                    Technologies: {this.props.tech}
                </div>
            </li>
        );
    }
}

export default Project;