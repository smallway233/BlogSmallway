---
title: "Android换源解决Timeout或导入项目慢的问题"
createTime: 2025-02-27 13:57:05
permalink: /blog/android-repo-timeout-fix/
tags:
  - Android
  - 学习
---

默认新建项目的时候，gradle的源默认为 **services.gradle.org**

经查询，该解析该域名为美国源地址。

![image-20250227133720318](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227133720318.png)

![image-20250227133529559](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227133529559.png)

故会出现拉取时间长或timeout等情况出现。本文将讲述如何更换gradle源和gradle库的源，以保证在国内有良好的访问。

---

## 了解Android项目结构

如图，每当我们新建一个Android项目后都会有如下的结构

![image-20250227133917256](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227133917256.png)

::: tip 注意
左上角选择项目（Project）而不是安卓（Android）
:::

让我解释一下每个文件夹的作用以及意义

### app

这是Android项目的主模块，包含了应用的代码、资源文件和配置信息。所有的业务逻辑、布局和资源等都存放在这个目录下。

*   **src/**：包含Java或Kotlin源代码文件。通常会根据包名来组织代码，如 `com.example.app`。
    *   **main**：应用的主要代码。
        *   **java**：存放应用的Java或Kotlin代码。
        *   **res**：存放应用的资源文件，包括布局文件、图片、字符串等。
            *   **drawable**：存放应用的图片资源。
            *   **layout**：存放布局文件（XML格式），用于定义界面布局。
            *   **mipmap**：存放启动图标等图像文件。
            *   **values**：存放应用的XML文件，定义字符串、颜色、尺寸等。
        *   **AndroidManifest.xml**：Android项目的配置文件，定义了应用的结构，包括组件声明（如Activity、Service等）、权限声明等。
*   **build.gradle**：Gradle构建脚本文件。这个文件定义了项目的构建配置，版本信息，依赖库等。分为**项目级**和**模块级**两个文件，模块级的 `build.gradle` 用于配置当前模块（通常是 `app`）的构建。

### build

此目录用于存放由Gradle构建工具生成的文件。包括编译后的应用代码、生成的资源文件以及其他构建过程中生成的临时文件。

*   **outputs**：包含编译过程中的输出文件，例如APK文件。
*   **intermediates**：包含Gradle构建过程中间的文件。

### gradle

这个目录用于存放Gradle Wrapper相关的文件。Gradle Wrapper是一个用来自动下载和管理Gradle版本的工具，确保团队成员使用相同的Gradle版本。

*   **wrapper/**：包含Gradle Wrapper的配置文件，如 `gradle-wrapper.properties`。

### .idea（如果使用IntelliJ IDEA或Android Studio）

这个目录是Android Studio（基于IntelliJ IDEA）生成的，用于存储IDE的配置文件。通常不需要关注，也不需要将其纳入版本控制。

### .git（如果使用Git进行版本控制）

这个目录包含Git版本控制系统的所有配置信息和数据，通常不需要手动操作。

### local.properties

此文件包含本地开发环境的配置信息，如SDK路径。这个文件通常不适合加入版本控制系统。

### settings.gradle

此文件定义了项目中的模块结构。对于多模块项目，这个文件会列出所有参与构建的模块。

### gradle.properties

用于存储项目级的Gradle配置信息，例如自定义属性或构建设置。

### libs

用于存放第三方库文件（如 `.jar` 或 `.aar` 文件），这些文件需要被手动导入并使用。

---

#### 总结：

*   **src**：源代码、资源文件。
*   **build**：构建过程中的生成文件。
*   **gradle**：Gradle构建工具的配置文件。
*   **AndroidManifest.xml**：应用的配置文件。
*   **gradle.properties、settings.gradle**：Gradle构建系统的设置。

---

## 开始换源

我们所使用的文件有两个，分别为

*   `gradle/wrapper/gradle-wrapper.properties`
*   `settings.gradle`

![image-20250227134427948](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227134427948.png)

### 首先打开 settings.gradle

该文件长这样

![image-20250227134532780](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227134532780.png)

### 在如下位置新增如下源地址

![image-20250227134613756](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227134613756.png)

```gradle
// 阿里云镜像  
maven{setUrl("https://maven.aliyun.com/repository/public/") }  
maven { setUrl("https://maven.aliyun.com/repository/google/") }  
maven { setUrl("https://maven.aliyun.com/repository/jcenter/") }  
maven { setUrl("https://maven.aliyun.com/repository/gradle-plugin/") }  
// 华为云镜像  
maven { setUrl("https://repo.huaweicloud.com/repository/maven/") }  
// 腾讯云镜像  
maven { setUrl("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/") }  
// 网易镜像  
maven { setUrl("https://mirrors.163.com/maven/repository/maven-public/") }
```

### 再打开 gradle/wrapper/gradle-wrapper.properties

文件长这样

![image-20250227134905744](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227134905744.png)

将 `distributionUrl` 的值写改为腾讯云地址 `https://mirrors.cloud.tencent.com/gradle/`

::: warning 注意
此处修改为部分修改，请保留原链接后半部分 `gradle-x.xx-xxx.zip`
:::

修改后的结果为

![image-20250227135046650](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227135046650.png)

### 开始测试（拉库）

请点击提示框中的【Sync Now】 或【Try Again】

![image-20250227135128521](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227135128521.png)

---

经测试，如果你网速够快，就能像我一样，16秒完成项目的初始化

![](https://smallway.oss-cn-beijing.aliyuncs.com/image-20250227135333516.png)
