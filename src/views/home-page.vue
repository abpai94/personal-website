<template>
    <div>
        <h1>
            Welcome!
        </h1>
    </div>
    <div class="main-body">
        <br>
        <img class="cycling-img" src="../assets/cycling.jpg" alt="Cycling">
        <p>Thank you for visiting my page. My name is Abhishek Pai, one of my hobbies is to experiment with tech aside from
            cycling or bouldering on-occasion. I have the privilege of working the tech indsutry initially starting off as a
            Software Engineer but more recently moving towards IAM, SysAdmin and DevOps roles.</p>
        <br>
        <p>My Resume, GitHub and other resources are linked above so feel free to browse the code related to both my website
            and deployment on my home server. This website as well as my deployment will evolve over time as I experiment,
            learn and improve my skills.</p>
        <br>
        <h2>Server Infrastructure</h2>
        <img class="franklin-img" src="../assets/franklin.jpg" alt="Franklin">
        <p>Over the years I have started working on creating home server with the help of two Raspberry Pi's (3B & 4B+). The
            first raspberry pi was called Franklin. This handles the ingress into my home network with a port open for
            WireGuard VPN while another two ports open for HTTP and HTTPS. I recently started hosting this website on
            Franklin along with Traefik to reverse proxy to authentcation and other services I wish to access on my personal
            cloud.</p>
        <br>
        <img class="eleanor-img" src="../assets/eleanor.jpg" alt="Eleanor">
        <p>Inaddition I have a second Raspberry Pi that handles the NAS component of my home server setup called Eleanor.
            Over the years I have accummulated a large array of photos which I have been storing in external HDDs laying
            around my desk. I bought a RockPi-SATA HAT with NFS Server configured along with NextCloud deployed on Docker. I
            was on my way to self-hosting my photos. I have regular cronjobs to backup everything onto GCP buckets to ensure
            I have some redundancy incase of catastrophic issue occurs with my setup.</p>
        <br>
        <h2>Future Plans</h2>
        <p>The plan is to create a much more robust single server with 5-8 HDDs setup in RAID 5/6 along with a more powerful
            CPU to handle the containers that I am running on a single machine. Raspberry Pi's are incredible as gateway
            into experimenting and playing with technology. I have been able to create a self sustaining home server which
            has taught me a lot but I having a stable platform becomes more important when hosting a larger array of
            applications.</p>
        <br>
        <p>Moreover I would like to expand my capabilities to backup photos for my family rather than using
            Google Photos for all the memories they have accummulated over the years. This requires hardware that can
            accomodate expandability of CPU, RAM, HDD, Network capacity and more.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.welcome,
h1 {
    padding: 15px 15px 0px 15px;
    font-size: 50px;
    text-align: center;
    color: #d44500;
}

h2 {
    padding: 15px 15px 15px 15px;
    font-size: 25px;
    text-align: center;
    color: #d44500;
}

.cycling-img,
.franklin-img,
.eleanor-img {
    float: left;
    width: 25%;
    margin: 20px;
}

.cycling-img,
.eleanor-img {
    float: right;
}
</style>