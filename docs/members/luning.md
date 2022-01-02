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
title: Lu Ning

name: Lu Ning (卢宁)
profile: /members/luning1.png

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/ColinLu50
    
email: ning.lu@connect.ust.hk
---
<div style="padding: 2%"></div>
<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a Ph.D. student at Computer Science Department of The Hong Kong University of Science and Technology. 

My Ph.D. thesis is about **Artificial Intelligence Security based on Combinatorial Optimization**. My reasearch interest includes **adversarial attack of AI**, **robustness of neural network**, etc. 

## Education

- **The Hong Kong University of Science and Technology (HKUST)** *Sept. 2021 – Present* 
  - Joint Ph.D. Programme with SUSTech
  - Supervisor: [Prof. DING Cunsheng](https://seng.hkust.edu.hk/about/people/faculty/cunsheng-ding) (HKUST) and [Prof. QI Wang](http://cse.sustech.edu.cn/faculty/~wangqi/) (SUSTech)
- **Southern University of Science and Technology (SUSTech)** *Sept. 2016 – July 2020*
  - B.Eng. in Computer Science and Technology 

## Publication

- **Efficient Combinatorial Optimization for Word-Level Adversarial Textual Attack**
  
    Shengcai Liu, **Ning Lu**, Cheng Chen, Ke Tang
    
    IEEE/ACM Transactions on Audio, Speech, and Language Processing. [[ePrint](https://arxiv.org/pdf/2109.02229.pdf)]





## Experience
- **Research Assistant**
  - NICAL Lab, SUSTech (Adviser: Prof. TANG Ke) *Sept. 2020 – Jun. 2021*


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
