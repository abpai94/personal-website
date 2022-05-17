<template>
    <div class="grid-container">
        <div class="header-left">
            <h3>Abhishek Pai</h3>
            <h4>Lyon, France (Remote)</h4>
        </div>
        <div class="header-right">
            <p>+447552770334</p>
            <p>
                <a href="mailto:abpai94@gmail.com">
                    abpai94@gmail.com
                </a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/abpai94/">
                    https://www.linkedin.com/in/abpai94/
                </a>
            </p>
        </div>
        <div class="skills-grid">
            <h3>Skills</h3>
            <ul>
                <li>Autonomous and proactive problem solver.</li>
                <li>Team player with excellent and effective communicator.</li>
                <li>Adaptable to new domains from On-Prem to Cloud.</li>
            </ul>
            <hr>
        </div>
        <div class="tools-grid">
            <h3>Tools</h3>
            <p>
                IntelliJ, Eclipse, Eclipse RCP, Gitlab, JIRA, Mockito, Zendesk, Postman, cURL, Linux , Jenkins, Maven,
                LDAP, AD, Postgres, MySQL, OracleDB, Hibernate, SonarQube, Quartz, jaxb, AutoYaST, JSON, JWT, OIDC,
                OAuth
            </p>
            <hr>
        </div>
        <div class="experience-grid">
            <h3>Experience</h3>
            <h4>ForgeRock / Support Engineer</h4>
            <h5>September 2020 - Present</h5>
            <ul>
                <li>Supporting customer issues with Identity and Access Management products developed by ForgeRock, IDM
                    and AM covering areas of interest such as OAuth(2), OIDC, 2FA.</li>
                <li>Responding to P1/Urgent tickets in a timely manner adhering to SLAs.</li>
                <li>Replicating environments locally with experience in MySQL, PostGres and OracleDB, LDAP and AD.</li>
                <li>Use of cURL, Postman and HAR files to debug REST query and responses.</li>
                <li>Debugging functionality in the products with IntelliJ via JVM remotely including raising bugs and
                    RFEs.</li>
                <li>Arranging calls with customers to conduct live debugging to fix issues.</li>
                <li>Expanding Knowledge Base Articles and Documentation to assist future customers with recurring
                    issues.</li>
                <li>Deploy and debug the IDCloud platform using the ForgeOps Cloud framework to resolve support tickets.
                </li>
            </ul>
            <h4>SCISYS / Software Engineer</h4>
            <h5>September 2017 - August 2020</h5>
            <ul>
                <li>Worked on Mission Planning for the Galileo Ground Control Segment.</li>
                <li>Implementing new requirements utilizing Java 8 features including improving the performance of
                    codebase such as Streams, Parallel Streams and Lambda Expressions..</li>
                <li>Developing and expanding Database (RDBMS) schemas for MySQL, upgrading Hibernate ORM utilizing the
                    Java Persistence API.
                </li>
                <li>Proficient utilization of version control with excellent proficiency with tools such as Git and
                    Gitlab.
                </li>
                <li>Extensive Linux experience with SLES 9 and 11 including writing bash scripts for automated AutoYaST
                    deployments to configuration of NFS, PAM and LDAP client.
                </li>
                <li>Excellent knowledge of Linux with the creation of CI/CD Jenkins pipelines including Sonar coverage
                    monitoring.
                </li>
                <li>Development and DevOps infrastructure upgrade and maintenance of COTS such as MariaDB connector,
                    Jaxb, Quartz and Hibernate ORM.</li>
                <li>Development of unit tests using JUnit, Mockito and PowerMockito for new requirements, bug fixes and
                    patches.
                </li>
                <li>Use of Agile methodologies with scrums and sprints to push development goals, maintain velocity and
                    work through backlogs</li>
                <li>Conducted multiple On-site deliverables for Maintenance, Upgrade and Full Releases with customer
                    facing experience.
                </li>
            </ul>
            <hr>
        </div>
        <div class="languages-grid">
            <h3>Languages</h3>
            <p>Java, Bash, Groovy, Javascript</p>
            <hr>
        </div>
        <div class="areasofinterest-grid">
            <h3>Areas Of Interest</h3>
            <p>Docker, Kubernetes, Skaffold, Kustomize, Helm, GCP</p>
            <hr>
        </div>
        <div class="hobbies-grid">
            <h3>Hobbies</h3>
            <ul>
                <li>Personal Projects: Currently configured RaspberryPi to work as a NAS for Photo Library and Media
                    Content. Future upgrades include adding Cloudflare DNS and openVPN passthrough include redundancy
                    via RAID configuration and self-hosting bitwarden.</li>
                <li>Climbing: Transition from Bouldering to rope climbing.</li>
                <li>Cycling: Cycled upto 60km aiming to do cycling camping trips over longer distances.</li>
                <li>Reading: Books about economics, history, politics and science.</li>
            </ul>
            <hr>
        </div>
        <div class="education-grid">
            <h3>Education</h3>
            <h4>MSc Computer Science / University of Birmingham</h4>
            <h5>September 2016 - September 2017</h5>
            <h4>BSc Chemistry w/ Pharmacology / University of Birmingham</h4>
            <h5>September 2013 - July 2016</h5>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumePage',
    props: {
        msg: String
    }
}
</script>

<style>
body {
    padding: 100px 500px 0px 500px;
    text-align: left;
}

/* May need to research and add column divisions instead of current implementation of grid-container.*/

.grid-container {
    display: grid;
    grid-template-columns: 3fr 2fr;
}

.header-left {
    grid-column-end: span 1;
}

.header-right {
    grid-column-end: span 1;
    text-align: right;
}

.skills-grid {
    grid-column-end: span 1;
}

.experience-grid {
    grid-column-end: span 1;
    grid-row-end: span 6;
}

.tools-grid {
    grid-row-end: span 1;
}

h3 {
    margin-top: 0px;
    color: #d44500;
}

h4 {
    margin-top: 0px;
}

/* All the configuration below is legacy and needs to be reused/removed. */
div.grid-container-resume {
    display: grid;
    grid-template-areas: 'myArea myArea';
    grid-template-columns: 1000px 500px;
    gap: 1px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    font-size: 20px;
    /* padding: 20px; */
    padding: 0px 50px 0px 50px;
}

div.grid-item-header-1 {
    text-align: left;
}

div.grid-item-header-2 {
    text-align: right;
    color: #d44500;
}

/* Need to figure out how to set the colour of the href to the desired value of #d44500.*/
a.link,
a.visited,
a.active,
a.hover {
    /* color: #d44500; */
    /* background-color: #d44500; */
    text-decoration: none;
}

div.grid-item {
    text-align: left;
    display: grid;
    grid-template-columns: 75% 25%;
    /* float: left; */
}

div.grid-item-experience {
    text-align: left;
    grid-area: 3 / 1 / span 4 / 1;
}

/* Need to fix the formatting of the HTML grid. */
div.grid-item-education {
    text-align: left;
    grid-area: 7 / 1 / span 4 / 1;
}


h5.grid-item-subtitle {
    margin-top: 0px;
    color: #A9A9A9;
}
</style>