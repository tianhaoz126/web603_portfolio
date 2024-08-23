import React from 'react';

function Resume() {
    return (
        <section id="resume" className="container">
            <h2>Resume</h2>
            <p><a href="/resume.pdf" target="_blank">Download my resume</a></p>
            <h3>Education</h3>
            <p><strong>Suffolk University</strong> - Master of Science in Business Analytics, GPA: 3.90, Jan 2020</p>
            <p><strong>The University of Nottingham</strong> - Bachelor of Science in Electrical Engineering, Dec 2015</p>
            <h3>Experience</h3>
            <p><strong>H1 Insights</strong> - Sr. Research Data Analyst, Jan 2021 - Now</p>
            <ul>
                <li>Led data-driven healthcare client projects, resulting in 100% APAC client retention.</li>
                <li>Enhanced EDA methodologies, improving reporting efficiency by 30%.</li>
                <li>Automated ETL processes using OpenAI API in Python, saving 50% time.</li>
            </ul>
            <p><strong>ETI Solid State Lighting Inc.</strong> - Business Analyst Intern, May 2019 - Aug 2019</p>
            <ul>
                <li>Designed BI reports, reducing marketing costs by 20%.</li>
                <li>Improved overall data quality by 30% through data preparation and cleansing.</li>
            </ul>
            <p><strong>Dalian Shipbuilding Industry Co., Ltd.</strong> - Electrical Engineer, Aug 2016 - Aug 2018</p>
            <ul>
                <li>Conducted project planning for shipbuilding projects.</li>
            </ul>
            <h3>Skills</h3>
            <p>Python, SAS, SQL, R, Databricks, Tableau, PowerBI, Azure, AWS, Data Wrangling, Data Visualization, etc.</p>
        </section>
    );
}

export default Resume;

