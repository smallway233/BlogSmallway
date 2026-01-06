---
title: "使用Docker搭建Hadoop集群"
createTime: 2023-05-01 16:42:14
permalink: /blog/docker-to-hadoop/
categories:
  - 大数据学习
---

前言：本人最近在筹备大数据比赛,根据国赛要求，所有大数据组件（Hadoop，Spark......）都要基于Docker进行搭建，最近对Docker进行学习后，现做如下总结

# 搭建Docker容器

本人采取本人另一篇博主的教程[Docker安装与基础操作 - xxxchik - 博客园 (cnblogs.com)](https://www.cnblogs.com/xxxchik/p/16397285.html)，故不再赘述搭建过程。

或者使用如下指令

```bash
yum install docker -y
```

安装完成截图

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501163911043.png)

# 在Docker中搭建三台Centos系统

## 启动docker服务

```bash
systemctl start docker
```

完成截图如下

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501164306336.png)

## 此时我们需要拉取Centos7的镜像

使用如下命令

```bash
docker pull centos:7.9.2009
```

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501164548976.png)

## 拉取完毕后检验是否拉取成功

```bash
docker image ls
```

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501164616595.png)

若出现这个Centos7.9.2009的镜像，则为拉取成功

## 紧接着我们开始运行这个容器

```bash
docker run -itd --name master -p 60001:22 --privileged centos:7.9.2009 /usr/sbin/init
```

::: danger 注意
`--name` 后的 `master` 为你给这个容器起的名字

`-p 60001:22` 表示将这个Centos系统的22端口映射到宿主机的60001端口上

`--privileged` 表示提权，从而使容器拥有特权操作权限
:::

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501165311810.png)

此时我们就已经生成了一个后台运行的容器，名为master

## 我们现在通过使用如下命令进入容器，对容器进行配置

```bash
docker exec -it master /bin/bash
```

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501165449316.png)

## 我们希望可以通过第三方ssh工具去连接这个Docker容器，所以我们还需要在其中安装对应的组件

```bash
yum install -y openssh-server openssh-clients net-tools.x86_64
```

此指令为我们分别安装了 openssh-server，openssh-clients， net-tools.x86\_64三个组件

安装完成截图

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501165748502.png)

## 安装完成后，我们需要重启ssh服务，使其工作

```bash
systemctl restart sshd
```

## 距离可以使用ssh工具还差最后一步——改密码

```bash
passwd root
```

输入并设置新密码即可

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501170301606.png)

## 现在可以通过ssh工具对容器中的系统进行ssh连接了

![](https://smallway.oss-cn-beijing.aliyuncs.com/%7BY%7D%7BM%7D%7BD%7D-%7Brand%7Dimage-20230501170343029.png)

使用同样的方法，可以制作三台不同的容器（master,slave1,slave2）

未完待续......

<!-- 历史评论 -->
## 评论

**哈哈** *(2023-05-01 17:07:06)*:

> 不错不错
