<template>
    <div>
        <h1> Resume Page output: {{ msg }} </h1>
    </div>
    <div class="grid-container-resume">
        <div class="grid-item-header-1">
            <h3>Abhishek Pai</h3>
            <h4>Lyon, France (Remote)</h4>
        </div>
        <div class="grid-item-header-2">
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
        <div class="grid-item">
            <h3 class="grid-item-heading">Skills</h3>
            <ul>
                <li>Autonomous and proactive problem solver.</li>
                <li>Team player with excellent and effective communicator.</li>
                <li>Adaptable to new domains from On-Prem to Cloud.</li>
            </ul>
            <hr>
        </div>
        <div class="grid-item">
            <h3 class="grid-item-heading">Tools</h3>
            <p>
                IntelliJ, Eclipse, Eclipse RCP, Gitlab, JIRA, Mockito, Zendesk, Postman, cURL, Linux , Jenkins, Maven,
                LDAP, AD, Postgres, MySQL, OracleDB, Hibernate, SonarQube, Quartz, jaxb, AutoYaST, JSON, JWT, OIDC,
                OAuth
            </p>
            <hr>
        </div>
        <div class="grid-item-experience">
            <h3 class="grid-item-heading">Experience</h3>
            <h4>ForgeRock / Support Engineer</h4>
            <h5 class="grid-item-subtitle">September 2020 - Present</h5>
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
            <h5 class="grid-item-subtitle">September 2017 - August 2020</h5>
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
        <div class="grid-item">
            <h3 class="grid-item-heading">Languages</h3>
            <p>Java, Bash, Groovy, Javascript</p>
            <hr>
        </div>
        <div class="grid-item">
            <h3 class="grid-item-heading">Areas Of Interest</h3>
            <p>Docker, Kubernetes, Skaffold, Kustomize, Helm, GCP</p>
            <hr>
        </div>
        <div class="grid-item">
            <h3 class="grid-item-heading">Hobbies</h3>
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
        <div class="grid-item">
            <h3 class="grid-item-heading">Duke of Edinburgh</h3>
            <h5 class="grid-item-subtitle">2011 - 2014</h5>
            <ul>
                <li>Achieved the Gold award consisting of five parts; Volunteering, Sports, Skill, Residential and
                    Expedition.</li>
                <li>Volunteering at a hospital for 2 years serving patients their food, talking to them and keeping them
                    company.</li>
                <li>Playing hockey as part of my school team U15, U16s, U17s, U18s team.</li>
                <li>Learning to play the guitar.</li>
                <li>Involved with a charity to repair and restore canals that had been shut down by the railway industry
                    in the 19th century.</li>
                <li>Completing a 5 day expedition to Corsica hiking, working and navigating together cohesively as a
                    team.
                </li>
            </ul>
            <hr>
        </div>
        <div class="grid-item">
            <h3 class="grid-item-heading">Education</h3>
            <h4>MSc Computer Science / University of Birmingham</h4>
            <h5 class="grid-item-subtitle">September 2016 - September 2017</h5>
            <h4>BSc Chemistry w/ Pharmacology / University of Birmingham</h4>
            <h5 class="grid-item-subtitle">September 2013 - July 2016</h5>
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

<style scoped>
div.grid-container-resume {
    display: grid;
    grid-template-areas: 'myArea myArea';
    grid-template-columns: 1000px 500px;
    gap: 1px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    font-size: 20px;
    padding: 0px 50px 0px 50px;
}

div.grid-item-header-1 {
    text-align: left;
}

div.grid-item-header-2 {
    text-align: right;
}

div.grid-item {
    text-align: left;
}

div.grid-item-experience {
    text-align: left;
    grid-area: 3 / 1 / span 4 / 1;
}

h3.grid-item-heading {
    margin-top: 0px;
    color: #d44500;
}

h4 {
    margin-top: 0px;
}

h5.grid-item-subtitle {
    margin-top: 0px;
    color: #A9A9A9;
}
</style>