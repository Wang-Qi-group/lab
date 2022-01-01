# CoCrypto Lab HomePage

## 安装

第一步：下载安装node.js。

第二步：克隆本库到本地

    # git clone git@github.com:Wang-Qi-group/lab.git

第三步：命令行进入目录，通过以下命令安装依赖。

    # yarn install

第四步，本地运行

    # yarn docs:dev

打开部署的服务器即可。

## 编辑

所有网页内容放在/docs文件夹中，编辑即可。本页面采用Vuepress 2.0，详情可以看官方文档。

注意：README.md文件会被编译成index.xxx类文件。即访问地址为目录时，会访问此文件。

markdown可以和html或者Vue.js 2.0的语法互用。支持latex公式，emoji等。

/docs/.vuepress文档放网站设置的相关内容。网站导航可以在/docs/.vuepress/config.ts中修改。

push到github后，通过/.github中设置，github的action那里会自动部署网站。所以push上去后一般就不需要管。

