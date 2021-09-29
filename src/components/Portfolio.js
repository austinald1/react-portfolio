import React from "react";
import Project from  './Project';

function Portfolio(){
    return (
        <div>
            <h1>Portfolio</h1>
            <div>Here is a list of some of my projects from my GitHub. You can also click the links at the bottom of the page.</div>
            <ul className="projectListing">
                <Project title="Money Tracker" repoName="moneyTracker" tech="NodeJS, Progressive Web Application"/>
                <Project title="Social Media Blog" repoName="blog" tech="MongoDB, Express, Insomnia" />
                <Project title="Tech Blog" repoName="techBlog" tech="MVC Architecture, NodeJS, Express, Express Handlebars, MySQL, bcrypt, Sequelize" />
                <Project title="eCommerce" repoName="eCom" tech="NodeJS, Express, mySQL, Sequelize" />
                <Project title="Employee Tracker" repoName="employeeTracker" tech="NodeJS, Express, Inquirer, mySQL" />
            </ul>
        </div>
    );
}

export default Portfolio;