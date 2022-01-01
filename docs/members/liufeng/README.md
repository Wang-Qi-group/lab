---
pageClass: about
# some data for the components

sidebar: false
title: Feng Liu

name: Feng Liu
profile: /members/liufeng.jpg

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

Applied Cryptography, Information Security & Privacy Preserving

 

Education:

2013/09 - 2017/06，Tianjin Polytechnic University，School of Management，B.S

2017/09 - 2019/06，Southern University of Science and Technology，Department of Computer Science and Engineering，M.S

 

Experience:

2019/08 - 2020/06，Southern University of Science and Technology，Department of Computer Science and Engineering，Research Assistant

 

Publications:

Liu and Q. Wang, “IBRS: an efficient identity-based batch verification scheme for VANETs based on ring signature,” in 2019 IEEE Vehicular Networking Conference (VNC) (IEEE VNC 2019), Los Angeles, USA, Dec. 2019
 

Patent:

李汝佳,娄山林,汪晓明,柳枫,一种基于硬件的分布式多方随机数生成器（中国发明专利：CN 110457006 A）

 

After graduation: Ph.D. student at University of Science and Technology of China



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
