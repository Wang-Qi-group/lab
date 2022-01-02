---
pageClass: about
# some data for the components

sidebar: false
title: Jiaqi Li

name: Jiaqi Li
profile: /members/lijiaqi.jpg

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


Research Interest:
Privacy-preserving contact tracing

Education:
2016/09 - 2020/06，South China University of Technology，Computer Science and Technology，Bachelor

2020/09 - Now，Southern University of Science and Technology，Computer Science and Technology，Master



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
