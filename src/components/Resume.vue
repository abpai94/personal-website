<template>
    <div>
        <h1> Resume Page output: {{ msg }} </h1>
        <!-- <b-container>
            <b-card title="Abhishek Pai" subTitle="Lyon, France - Remote">
                <b-card-text>
                    Should be the required text for the resume
                </b-card-text>
            </b-card>
        </b-container>
        <b-container class="column-split">
            <b-row>
                <b-col>Test Column 1</b-col>
                <b-col>Test Column 2</b-col>
            </b-row>
        </b-container> -->
    </div>
    <div class="grid-container-resume">
        <div class="grid-item-header">Header</div>
        <div class="grid-item-skills">Skills</div>
        <div class="grid-item-tools">Tools</div>
        <div class="grid-item-experience">Experience</div>
        <div class="grid-item-languages">Languages</div>
        <div class="grid-item-education">Education</div>
        <div class="grid-item-areas-of-interest">Areas Of Interest</div>
        <div class="grid-item-hobbies">Hobbies</div>
        <div class="grid-item-duke-of-edingburgh">Duke of Edinburgh</div>
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
    grid-template-columns: auto auto;
    gap: 5px;
    background-color: #000000;
    padding: 5px;
}

.grid-container-resume>div {
    background-color: rgb(255, 255, 255);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}

.grid-item-header {
    grid-area: myArea;
}

.grid-item-experience {
    grid-area: 3 / 0 / 6 / 1;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}
</style>