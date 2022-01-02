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
title: Yuanzhao Li

name: Yuanzhao Li (黎原朝)
profile: /members/liyuanzhao.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/BravoChaoS

email: 11812420@mail.sustech.edu.cn
---
<div style="padding: 2%"></div>
<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am an undergraduate from Southern University of Science and Technology (SUSTech). My research interests include **cryptography**, **trusted execution environment**, and **blockchain**.

## Education

- **Southern University of Science and Technology (SUSTech)** *Sept. 2018 – Present
  - Supervisor: [Prof. Qi Wang](http://cse.sustech.edu.cn/faculty/~wangqi/)

## Awards & Honors

- **SUSTech Entrance Scholarship** **2018**
- **SUSTech Outstanding Student Scholarship** (Third Prize) **2019**
- **The 2nd SUSTech Programming Contest** (Second Prize) **2019**
- **ASC Student Supercomputer Challenge** (Second Prize) **2020**
- **International Collegiate Programming Contest (ICPC) Asia Nanjing Regional Contest** (Third Prize) **2020**
- **China Collegiate Programming Contest (CCPC), Mianyang Site**  (Third Prize) **2020**
- **Yuanguang Cup Guangdong-Macao Computer Programming Competition** (Third Prize) **2020**  
- **SUSTech Outstanding Student Scholarship** (Third Prize) **2021**

## Experience

- **Teaching Assistant**
  - CS203: Data Structure and Algorithm (SUSTech Fall 2021)



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
