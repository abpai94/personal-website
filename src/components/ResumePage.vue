<template>
    <div class='header-left'>
        <h3>Abhishek Pai</h3>
        <p>Lyon, France (Remote)</p>
    </div>
    <div class='header-right'>
        <p><a href='tel:+44 7552 770334'>+44 7552 770334</a></p>
        <p><a href='tel:+33 7 69 97 30 87'>+33 7 69 97 30 87</a></p>
        <p><a href='mailto:abpai94@gmail.com'>abpai94@gmail.com</a></p>
    </div>
    <div class='main-body-left'>
        <div class='skills-grid'>
            <div class='subtitle-grid'>
                <h3>Skills</h3>
            </div>
            <ul>
                <p>Passionate to work in a cohesive and collaborative team environment developing creative ideas and
                    concepts.</p>
            </ul>
            <div class="horizontal-separator">
                <hr>
            </div>
        </div>
        <div class='experience-grid'>
            <div class='subtitle-grid'>
                <h3>Experience</h3>
            </div>
            <div class='company-grid'>
                <h4>IdentIT<span><b> / Consultant Engineer </b></span><span>
                    </span></h4>
                <h5>August 2022 - December 2023</h5>
            </div>
            <div class='company-summary'>
                <p>Implementing custom ForgeRock IAM stack for Proximus.</p>
            </div>
            <div class='block-details'>
                <ul>
                    <li>Integrating Itsme SSO Framework with IAM stack.</li>
                    <li>SMS OTP User flow implementation.</li>
                    <li>Custom Java and scripted nodes for Tree development.</li>
                    <li>SpringBoot Microservice development and bug fixes.</li>
                    <li>Refactoring AM v7.1 for v7.3 Upgrade.</li>
                    <li>Implementing and improving Ansible playbooks.</li>
                    <li>Automating AM CI/CD Jenkins pipeline with Amster.</li>
                    <li>Documenting tools for debugging and deployment automation.</li>
                    <li>Founding DevOps Improvements committee.</li>
                </ul>
            </div>
            <div class='company-grid'>
                <h4>ForgeRock<span><b> / Support Engineer </b></span><span>
                    </span></h4>
                <h5>September 2020 - April 2022</h5>
            </div>
            <div class='company-summary'>
                <p>Support and resolve customer’s issues with IAM products.</p>
            </div>
            <div class='block-details'>
                <ul>
                    <li>Responding and adhering to strict SLAs.</li>
                    <li>Fixing customer issues by debugging their deployments.</li>
                    <li>Analysis of customer configuration, logs, audits and HAR files.</li>
                    <li>Replicating locally with databases and directory services.</li>
                    <li>Raise bugs and feature requests.</li>
                    <li>Contributing to knowledge base articles and documentation.</li>
                    <li>Trained to support cloud customer tickets.</li>
                </ul>
            </div>
            <div class='company-grid'>
                <h4>SCISYS<span><b> / Software Engineer </b></span><span>
                    </span></h4>
                <h5>September 2017 - August 2020</h5>
            </div>
            <div class='company-summary'>
                <p>Feature development for Galileo ground control segment ESA.</p>
            </div>
            <div class='block-details'>
                <ul>
                    <li>Utilising Java 8 to implement new requirements and bug fixes.</li>
                    <li>Refactoring and upgrading MySQL with Hibernate ORM.</li>
                    <li>Excellent proficiency with version control using git and gitlab.</li>
                    <li>Linux writing bash scripts to automate deployments.</li>
                    <li>CI/CD Jenkins pipelines with JaCoCo and Sonar monitoring.</li>
                    <li>Developing unit tests using JUnit and Mockito.</li>
                    <li>Scrums and sprints to develop features and maintain velocity.</li>
                    <li>Conduct multiple on-site visits with client-facing experience.</li>
                </ul>
            </div>
        </div>
    </div>
    <div class='main-body-right'>
        <div class='education-grid'>
            <div class='subtitle-grid'>
                <h3>Education</h3>
            </div>
            <h4>MSc Computer Science</h4>
            <p>University of Birmingham</p>
            <h5>September 2016 - September 2017</h5>
            <h4>BSc Chemistry w/ Pharmacology</h4>
            <p>University of Birmingham</p>
            <h5>September 2013 - July 2016</h5>
            <div class="horizontal-separator">
                <hr>
            </div>
        </div>
        <div class='languages-grid'>
            <div class='subtitle-grid'>
                <h3>Languages</h3>
            </div>
            <div class='block-details'>
                <li>English - Fluent</li>
                <li>French - A2</li>
            </div>
            <div class="horizontal-separator">
                <hr>
            </div>
        </div>
        <div class='tools-grid'>
            <div class='subtitle-grid'>
                <h3>Tools</h3>
            </div>
            <div class="tools-square">
                <button class="square" @click="handleClick(item)" v-for="item in squares" :key="item.id">{{ item.text }}</button>
            </div>
        </div>
        <div class="horizontal-separator">
            <hr>
        </div>
        <div class='certification-grid'>
            <div class='subtitle-grid'>
                <h3>Certification</h3>
            </div>
            <div class='block-details'>
                <ul>
                    <li>Linux Foundation IT Associate</li>
                    <li>Open Source Cloud Computing</li>
                    <li>ForgeRock Identity Cloud & DevOps Advanced Skills</li>
                    <li>ForgeRock Identity Management</li>
                    <li>ForgeRock Access Management</li>
                </ul>
            </div>
            <div class="horizontal-separator">
                <hr>
            </div>
        </div>
        <div class='personalprojects-grid'>
            <div class='subtitle-grid'>
                <h3>Personal Projects</h3>
            </div>
            <div class='company-summary'>
                Raspberry Pi Home Server</div>
            <div class='block-details'>
                <ul>
                    <li>Ansible Deployment Automation</li>
                    <li>Docker compose configuration</li>
                    <li>Resume Webpage Development</li>
                    <li>Wireguard VPN</li>
                    <li>RAID for photo archive</li>
                    <li>GCP Bucket backups via cronjobs</li>
                    <li>Traefik Reverse Proxy</li>
                    <li>HTTPS Certificate Generation</li>
                    <li>DDClient DynDNS IP update</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            squares: [
                { id: 1, text: "Amster", link: "https://backstage.forgerock.com/docs/amster/7.4/user-guide/amster-introduction.html" },
                { id: 2, text: "AM", link: "https://backstage.forgerock.com/docs/am/7.4/eval-guide/about-am.html"},
                { id: 3, text: "Ansible", link: "https://www.ansible.com/overview/how-ansible-works" },
                { id: 4, text: "Jenkins", link: "https://www.jenkins.io" },
                { id: 5, text: "Linux", link: "https://www.redhat.com/en/topics/linux/what-is-linux" },
                { id: 6, text: "Docker", link: "https://www.docker.com/get-started/" },
                { id: 7, text: "Traefik", link: "https://traefik.io/traefik/" },
                { id: 8, text: "Git", link: "https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F" },
                { id: 9, text: "Java",  link: "https://www.java.com/en/download/help/whatis_java.html" },
                { id: 10, text: "Bash", link: "https://opensource.com/resources/what-bash"  },
                { id: 11, text: "SQL", link: "https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html"  },
                { id: 12, text: "Maven", link: "https://maven.apache.org/what-is-maven.html"  },
                { id: 13, text: "LDAP", link: "https://www.redhat.com/en/topics/security/what-is-ldap-authentication"  },
                { id: 14, text: "Postman", link: "https://www.postman.com/product/what-is-postman/"  },
                { id: 15, text: "Sonar", link: "https://www.sonarsource.com/products/sonarqube/"  },
                { id: 16, text: "Mockito", link: "https://site.mockito.org/"  }
            ],
        };
    },
    methods: {
        handleClick(item) {
            window.location.href = item.link;
        }
    }
}
</script>

<style>
* {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.header-left,
.header-right {
    float: left;
    width: 50%;
}

.header-right {
    text-align: right;
}

.horizontal-separator {
    margin-top: 15px;
}

.main-body-left,
.main-body-right {
    float: left;
    width: 60%;
}

.main-body-right {
    float: right;
    max-width: 325px;
}

.experience-grid {
    grid-column-end: span 1;
    grid-row-end: span 6;
}

.tools-grid {
    grid-row-end: span 1;
}

.company-grid,
.subtitle-grid {
    padding: 10px 0px 10px 0px;
}

.company-summary {
    padding: 0px 0px 10px 0px;
}

.block-details {
    padding-left: 15px;
}

h3 {
    color: #d44500;
    padding-bottom: 5px;
}

h5 {
    color: #666666;
    font-weight: normal;
}

.square {
    width: fit-content;
    border: 1px solid #d44500;
    border-radius: 20px;
    text-align: center;
    padding: 10px;
    background-color: #d44500;
    color: white;
    float: left;
    margin: 1px;
    font-size: 12.5px;
}

.square:hover {
    background-color: white;
    color: #d44500;
}

.tools-grid {
    float: inline-start;
    padding-bottom: 10px;
}

span b {
    font-weight: normal;
}

span c {
    font-size: 15px;
    color: #666666;
}
</style>