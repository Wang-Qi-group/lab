---
pageClass: about
# some data for the components

sidebar: false
title: Yi Liu

name: Yi Liu (刘逸)
profile: /members/liuyi.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/liu-yi
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/%E9%80%B8-%E5%88%98-363764114/

# cv: https://en.wikipedia.org/wiki/Harry_Potter
# bio: Ph.D. Student at HKU
email: mail@imliuyi.com
---
<div style="padding: 2%"></div>
<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a Ph.D. student at Computer Science Department of The University of Hong Kong (HKU). My research interests include **cryptography**, **privacy**, and **blockchain**. I'm mainly working on **cryptographic protocols**, such as **multi-party computation (MPC)**, **zero-knowledge proofs**, etc.

<!-- ## News

- [Sept 1991] Attended Hogwarts
- [July 1980] Born in Godric's Hollow, West Country, England, Great Britain -->


## Education

- **The University of Hong Kong (HKU)** *Sept. 2018 – Present* 
  - Ph.D. Candidate in Cryptography | Joint Ph.D. Programme with SUSTech
  - Supervisor: [Prof. Siu-Ming Yiu](https://www.cs.hku.hk/index.php/people/academic-staff/smyiu) (HKU) and [Prof. Qi Wang](http://cse.sustech.edu.cn/faculty/~wangqi/) (SUSTech)
- **Southern University of Science and Technology (SUSTech)** *Sept. 2014 – July 2018*
  - B.Eng. in Computer Science and Technology | GPA: **3.84/4.00** (Core); **3.70/4.00** (Overall)
  - Thesis: An Evaluation System Based on Blockchain and Linkable Ring Signature. [[Slides](https://imliuyi.com/ugthesis_slide.pdf)]

## Publication

- **Making Private Function Evaluation Safer, Faster, and Simpler**
  
    <u>**Yi Liu**</u>, Qi Wang, Siu-Ming Yiu 

    To appear in Public-Key Cryptography. **PKC 2022**. [[ePrint](https://eprint.iacr.org/2021/1682)]

    ---

- **Improved Zero-Knowledge Argument of Encrypted Extended Permutation**
  
    <u>**Yi Liu**</u>, Qi Wang, Siu-Ming Yiu 

    In Information Security and Cryptology. **Inscrypt 2021**. [[ePrint](https://eprint.iacr.org/2021/1430)] [[Slides](https://1drv.ms/p/s!At50T0g9p5_r4lFUZ0hVzNpJfVbV?e=MP4v6i)]
    
    ---

- **Blind Polynomial Evaluation and Data Trading**
  
    <u>**Yi Liu**</u>, Qi Wang, Siu-Ming Yiu 

    In Applied Cryptography and Network Security. **ACNS 2021**. [[ePrint](https://eprint.iacr.org/2021/413)] [[Slides](https://1drv.ms/p/s!At50T0g9p5_r3mbt0dabEcLzhFoH?e=R6uZuh)]

    ---

- **An Improvement of Multi-Exponentiation with Encrypted Bases Argument: Smaller and Faster**
  
    <u>**Yi Liu**</u>, Qi Wang, Siu-Ming Yiu 

    In Information Security and Cryptology. **Inscrypt 2020**.  [[ePrint](https://eprint.iacr.org/2020/567)] [[Slides](https://1drv.ms/p/s!At50T0g9p5_r0A2vDcMbE_xz74Gy?e=NH91na)]

    ---

- **An E-voting Protocol Based on Blockchain**
  
    <u>**Yi Liu**</u>, Qi Wang

    Manuscript. [[ePrint](https://eprint.iacr.org/2017/1043)]


## Invited Talks

**Conference Talks**: Inscrypt’21, ACNS’21, Inscrypt’20.

## Awards & Honors
- **Best Thesis Award** Department of Computer Science and Engineering of SUSTech **2018**
- **SUSTech Outstanding Student Scholarship** (Third Prize) **2017**
- **SUSTech Outstanding Student Scholarship** (Second Prize) **2016**
- **College Student Start-Up Scholarship** **2014 – 2018**


## Experience
- **Research Assistant**
  - CoCrypto Lab (Adviser: Prof. Qi Wang) *Sept. 2016 – Aug. 2018*
  - SUSTech Innovation Center for Data Science (Adviser: Dr. Rusong Zheng) *July 2017 – Aug. 2017*
  - UAV and Sensor Network Lab (Adviser: Prof. Qi Hao) *July 2015 – Sept. 2016* 

  ---

- **Teaching Assistant**
  - COMP2119: Introduction to Data Structures and Algorithms (HKU Fall 2021)
  - CS403: Cryptography and Network Security (SUSTech Fall 2019, Fall 2020)
  - COMP7904: Information Security: Attacks and Defense (HKU Spring 2019)
  - CS304: Software Engineering (SUSTech Spring 2017)
  - CS201: Discrete Mathematics (SUSTech Fall 2016) 
  - CS302: Operating System (SUSTech Spring 2016)



<!-- [→ Full list](/projects/) -->

<!-- <ProjectCard image="/papers/papers_pic/BPE.png" hideBorder=true>

  **Making Private Function Evaluation Safer, Faster, and Simpler**
  
  <u>**Yi Liu**</u>, Qi Wang, Siu-Ming Yiu 

  To appear in Public-Key Cryptography. PKC 2022.
  
  Harry's wand was broken in 1997, but was repaired by him after the 1998 Battle of Hogwarts. Usually the repair of a wand is impossible, but with the use of the Elder Wand it was achievable.
  
  [[PDF](https://www.google.com)] [[arXiv](https://arxiv.org)]

</ProjectCard> -->

<!-- <ProjectCard hideBorder=true>

  **Making Private Function Evaluation Safer, Faster, and Simpler**
  
  <u>**Yi Liu**</u>, Qi Wang, Siu-Ming Yiu 

  To appear in Public-Key Cryptography. PKC 2022. [[ePrint](https://eprint.iacr.org/2021/1682)]

</ProjectCard> -->



<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.about .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.about .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
