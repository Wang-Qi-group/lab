---
pageClass: about
# some data for the components

sidebar: false
title: Rujia Li

name: Rujia Li
profile: /members/lirujia.png

# socials:
#   - title: github
#     icon: "/icons/github.svg"
#     link: https://github.com/liu-yi
#   - title: linkedin
#     icon: "/icons/linkedin-mono.svg"
#     link: https://www.linkedin.com/in/%E9%80%B8-%E5%88%98-363764114/

# cv: https://en.wikipedia.org/wiki/Harry_Potter
# bio: Ph.D. Student at HKU
# email: mail@imliuyi.com
---
<div style="padding: 2%"></div>
<ProfileSection :frontmatter="$page.frontmatter" />

Research Interest: Blockchain security analysis. Constructing cryptographic protocols based on blockchain. Privacy-preserving Smart Contracts. Formal security proofs.

  Education:
  - 2009/09 - 2013/06，School of economics and management, Wuhan university，Bachelor's degree in business administration.
  - 2016/09 - 2017/11，School of computer science, University of Birmingham，Master of advanced computer science.
  - 2017/12 - now，Computer science department, Southern university of science and technology，PhD student.

  Experience:
  - 2013/07 - 2014/11，State Grid Electric Power Research Institute，r & d engineer
  - 2014/12 - 2016/08，State Grid Information & Telecommunication co. ltd，Secure architect assistant
  - 2017/06 - 2017/09，University of Birmingham Innovation Centre，Research assistant（internship）



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
