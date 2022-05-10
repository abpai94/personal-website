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
        <div class="grid-item-skills">
            <h3 class="grid-item-heading">Skills</h3>
            <ul>
                <li>Autonomous and proactive problem solver.</li>
                <li>Team player with excellent and effective communicator.</li>
                <li>Adaptable to new domains from On-Prem to Cloud.</li>
            </ul>
            <hr>
        </div>
        <div class="grid-item-tools">
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
            <hr>
        </div>
        <div class="grid-item-languages">
            <h3 class="grid-item-heading">Languages</h3>
            <hr>
        </div>
        <div class="grid-item-education">
            <h3 class="grid-item-heading">Education</h3>
            <hr>
        </div>
        <div class="grid-item-areas-of-interest">
            <h3 class="grid-item-heading">Areas Of Interest</h3>
            <hr>
        </div>
        <div class="grid-item-hobbies">
            <h3 class="grid-item-heading">Hobbies</h3>
            <hr>
        </div>
        <div class="grid-item-duke-of-edingburgh">
            <h3 class="grid-item-heading">Duke of Edinburgh</h3>
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
.grid-container-resume {
    display: grid;
    grid-template-areas: 'myArea myArea';
    grid-template-columns: 1000px 500px;
    gap: 1px;
    /* background-color: #000000; */
    padding: 1px;
}

.grid-container-resume>div {
    background-color: rgb(255, 255, 255);
    text-align: center;
    padding: 5px 0;
    font-size: 20px;
    padding: 0px 50px 0px 50px;
}

div.grid-item-header-1 {
    text-align: left;

}

div.grid-item-header-2 {
    text-align: right;
}

div.grid-item-skills {
    text-align: left;
    font-size: 20px;
}

div.grid-item-tools {
    text-align: left;
}

h3.grid-item-heading {
    color: #d44500;
}

/* .grid-item-experience {
    grid-area: 3 / 0 / 6 / 1;
} */

/* h3 {
    margin: 40px 0 0;
} */

/* ul {
    list-style-type: none;
    padding: 0;
} */

/* li {
    display: inline-block;
    margin: 0 10px;
} */
</style>