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
title: Jiaqi Li

name: Jiaqi Li (李嘉琦)
profile: /members/lijiaqi.jpg

socials:

email: 12032487@mail.sustech.edu.cn
---
<div style="padding: 2%"></div>
<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a Master student at Computer Science Department of Southern University of Science and Technology (SUSTech). My research interests include **cryptography** and **privacy**. I'm mainly working on **Privacy-preserving contact tracing**.

## Education

- **Southern University of Science and Technology (SUSTech)** *Sept. 2020 – Present* 
  - Master Student
  - Supervisor:  [Prof. Qi Wang](http://cse.sustech.edu.cn/faculty/~wangqi/) (SUSTech)
- **South China University of Technology (SCUT)** *Sept. 2016 – July 2020*
  - B.Eng. in Computer Science and Technology 

## Experience

- **Teaching Assistant**
  - CS201: Discrete Mathematics (SUSTech Fall 2021) 



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
