# Personal Website (https://www.abhishekpai.co.uk)
This repository is going to host the code for my personal website. It currently showcases my Resume for job hunting so that recruiters and interested parties can view and understand my skillset. It also links to a few resources that can be useful to understand my overall contributions, experience and evolution. I have linked my GitHub, Docker, Cerdly, LinkedIn and Home Server Dashboard.

## Commands to setup the project
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Lints and fixes files
```
npm run lint
```

### Compiles and minifies for production
```
npm run build
sudo docker build . -t abpai94/personal-website
sudo docker push abpai94/personal-website:latest
```