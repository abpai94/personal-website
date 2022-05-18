<template>
    <div class="grid-container">
        <div class="header-left">
            <h3>Abhishek Pai</h3>
            <p>Lyon, France (Remote)</p>
            <a href="http://github.com/abpai94">
                http://github.com/abpai94</a>
        </div>
        <div class="header-right">
            <p><a href="tel:+44 7552 770334">
                    +44 7552 770334
                </a></p>
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
        <div class="separation-header">
            <hr>
        </div>
        <div class="skills-grid">
            <br>
            <h3>Skills</h3>
            <ul>
                <li>Autonomous and proactive problem solver.</li>
                <li>Team player with excellent and effective communicator.</li>
                <li>Adaptable to new domains from On-Prem to Cloud.</li>
            </ul>
            <br>
            <hr>
        </div>
        <div class="education-grid">
            <br>
            <h3>Education</h3>
            <h4>MSc Computer Science</h4>
            <p>University of Birmingham</p>
            <h5>September 2016 - September 2017</h5>
            <br>
            <h4>BSc Chemistry w/ Pharmacology</h4>
            <p>University of Birmingham</p>
            <h5>September 2013 - July 2016</h5>
            <br>
            <hr>
        </div>
        <div class="experience-grid">
            <h3>Experience</h3>
            <h4>ForgeRock<span><b> / Support Engineer </b></span><span>
                    <c>(Identity and Access Management Industry)</c>
                </span></h4>
            <h5>September 2020 - Present (1 year 8 months)</h5>
            <ul>
                <li>Resolving customer issues for IDM and AM products in Identity and Access Management
                    Responding to P1/Urgent tickets adhering to SLAs.</li>
                <li>
                    Arranging calls with customers to conduct live debugging to fix issues.</li>
                <li>
                    Expanding Knowledge Base Articles and Documentation to assist future customers with recurring
                    issues.</li>
                <li>
                    Trained to deploy IDCloud platform using the ForgeOps Cloud framework to resolve support tickets.
                </li>
                <li>
                    Replicating environments locally with experience in MySQL, PostGres and OracleDB, LDAP and AD.</li>
                <li>
                    Use of cURL, Postman and HAR files to debug REST query and responses.</li>
                <li>
                    Debugging functionality in the products with IntelliJ via JVM remotely including raising bugs and
                    RFEs.</li>
            </ul>
            <br>
            <h4>SCISYS<span><b> / Software Engineer</b></span><span>
                    <c>(Space Industry)</c>
                </span></h4>
            <h5>September 2017 - August 2020 (3 years)</h5>
            <ul>
                <li>Mission Planning for the Galileo Ground Control Segment in Space</li>
                <li>
                    Utilizing Java 8 features such as Streams, Parallel Streams and Lambda Expressions for new
                    requirements, bug fixes and patches.</li>
                <li>
                    Maintaining RDBMS schemas for MySQL including upgrading and expanding Hibernate ORM.</li>
                <li>
                    Excellent proficiency with VCS tools such as Git and Gitlab.</li>
                <li>
                    Extensive Linux experience writing bash scripts for AutoYaST deployments for the configuration of
                    NFS, PAM and LDAP.</li>
                <li>
                    Creation and maintenance of CI/CD Jenkins pipelines with JaCoCo and Sonar monitoring.</li>
                <li>
                    Upgrading COTS such as MariaDB connector, Jaxb, Quartz, Log4J and Hibernate ORM.</li>
                <li>
                    Development of unit tests using JUnit, Mockito and PowerMockito.</li>
                <li>
                    Use of Agile methodologies with scrums and sprints to push development goals, maintain velocity and
                    work through backlogs.</li>
                <li>
                    Experience with a full development lifecycle from design, implementation, testing, deployment,
                    upgrade and maintaince.</li>
                <li>
                    Conducted multiple on-site visits to install, integrate and test deployments with customer
                    experience.
                </li>
            </ul>
        </div>
        <div class="tools-grid">
            <h3>Tools</h3>
            <p>Java Bash Linux MySQL PostgreSQL OracleDB HibernateORM LDAP AD </p>
            <br>
            <p>
                IntelliJ Eclipse Git Log4J JUnit Mockito JaCoCo SonarQube Jenkins Maven Postman cURL OAuth OIDC JWT JSON
            </p>
            <br>
            <hr>
        </div>
        <div class="areasofinterest-grid">
            <h3>Areas Of Interest</h3>
            <p>Vue.js Docker Kubernetes Skaffold Kustomize Helm GCP</p>
            <br>
            <hr>
        </div>
        <div class="personalprojects-grid">
            <h3>Personal Projects</h3>
            <ul>
                <li>Raspberry Pi: Configured to work as a NAS for Photo Library containing family photo archives. Future
                    upgrades include adding Cloudflare DNS and openVPN passthrough include redundancy via RAID
                    configuration and self-hosting a website.</li>
                <br>
                <li>
                    Personal Website: Developed using Vue.js to learn Front-end web development and host the website on
                    the Raspberry Pi.</li>
            </ul>
            <br>
            <hr>
        </div>
        <div class="hobbies-grid">
            <h3>Hobbies</h3>
            <ul>
                <li>Climbing: Problem solving with friends to climb interesting routes.</li>
                <li>
                    Cycling: Build endurance and stamina for 60km+ rides</li>
                <li>
                    Reading: Books about economics, history, politics and science to learn and stimulate discussion.
                </li>
            </ul>
            <br>
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
}

.grid-container {
    font-family: roboto;
    display: grid;
    grid-template-columns: 3fr 2fr;
}

.header-left {
    grid-column-end: span 1;
    padding: 0px 20px 10px 10px;
}

.header-right {
    grid-column-end: span 1;
    text-align: right;
    padding: 0px 20px 10px 10px;
}

.separation-header {
    grid-column-end: span 2;
}

.skills-grid {
    padding: 0px 20px 10px 10px;
}

.education-grid {
    padding: 0px 20px 10px 10px;
    grid-row-end: span 2;
}

.experience-grid {
    grid-column-end: span 1;
    grid-row-end: span 6;
    padding: 0px 20px 10px 10px;
}

.tools-grid {
    grid-row-end: span 1;
    padding: 0px 20px 10px 10px;
}

.areasofinterest-grid {
    padding: 0px 20px 10px 10px;
}

.personalprojects-grid {
    padding: 0px 20px 10px 10px;
}

.hobbies-grid {
    padding: 0px 20px 10px 10px;
}

h3 {
    color: #d44500;
}

h4 {
    margin-top: 0px;
}

h5 {
    color: #666666;
    font-weight: normal;
}

span b {
    font-weight: normal;
}

span c {
    font-size: 15px;
    color: #666666;
}
</style>