---
pageClass: about

sidebar: [{
          text: 'Members',
          children: [
            {
              text: 'Principal Investigator',
              link: '/members#principal-investigator'
            },
            {
              text: 'Ph.D. Student',
              link: '/members#ph-d-student'
            },
            {
              text: 'Research Assistant',
              link: '/members#research-assistant'
            },
            {
              text: 'Master Student',
              link: '/members#master-student'
            },
            {
              text: 'Undergraduate Student',
              link: '/members#undergraduate-student'
            },
            {
              text: 'Staff',
              link: '/members#staff'
            },
            {
              text: 'Alumni',
              link: '/members#alumni'
            }
          ]
        }]
title: Xinrui Zhang

name: Xinrui Zhang (张欣蕊)
profile: /members/zhangxr.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/xrxrxrxrxr
  
email: zhangxr3@mail.sustech.edu.cn
---
<div style="padding: 2%"></div>
<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

Xinrui Zhang is a Research Assistant at the Computer Science and Engineering Department of Southern University of Science and Technology (SUSTech). Her research focuses on making blockchain systems more secure through cryptography (ZKP), trusted execution environments (TEEs), and consensus algorithms.

## Education

- **Nankai University (NKU)** *Sept. 2017 – Jun. 2021* 
  - BEng & LLB | Information Security & Law
  - Supervisor: [Prof. Ming Su](https://cc.nankai.edu.cn/2019/0619/c13620a179384/page.htm) (NKU)

## Publication

- **An Offline Delegatable Cryptocurrency System**
  
    Rujia Li, Qin Wang, <u>**Xinrui Zhang**</u>, Qi Wang, David Galindo, Yang Xiang

    In 2021 IEEE International Conference on Blockchain and Cryptocurrency. **ICBC 2021**. [[ePrint](https://arxiv.org/pdf/2103.12905.pdf)]

    ---

- **An Offline Delegatable Cryptocurrency System**
  
    Rujia Li, Qin Wang, <u>**Xinrui Zhang**</u>, Qi Wang, David Galindo, Yang Xiang

    Poster present at The Network and Distributed System Security Symposium. **NDSS 2021**. [[ePrint](https://www.ndss-symposium.org/wp-content/uploads/NDSS2021posters_paper_14.pdf)]
    
    ---


## Awards & Honors
- **Academic Excellence Scholarship** College of Cyber Science, Nankai University **2019**
- **Academic Progress Scholarship** College of Cyber Science, Nankai University **2019**

## Experience
- **Research Assistant**
  - CoCrypto Lab (Adviser: Prof. Qi Wang) *Aug. 2021 – Present*
  
  ---


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
