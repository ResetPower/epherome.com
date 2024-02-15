# 想要改进 Epherome ？

Epherome 将 GitHub 作为其唯一的源码管理、开发、协作和持续集成平台。

想要对 Epherome 进行改进，您必须学习一些有关 Git 和 GitHub 的基本知识。

本文将向您介绍向 Epherome 提交代码的基本流程。

## 分叉 (Fork)

要开始开发 Epherome，您必须 分叉 (Fork) GitHub 上的版本库。

分叉后，您将拥有自己的版本库`{username}/Epherome`，它与您分叉时的 Epherome 版本库内容相同。**但您必须手动与上游版本库同步**。

*上游版本库*是指该版本库分叉出来的版本库。在本文档中，上游版本库指的是 `ResetPower/Epherome` 。

您可以使用命令行 `git clone https://github.com/{username}/Epherome` 或 `gh repo clone {username}/Epherome` 将版本库克隆到本地。

## 开发

- 打开命令行，`cd`到目录`Epherome`，其中包含`package.json`。
- 使用 `npm install` 安装所需的软件包。
- 使用 `npm run tauri dev` 以开发模式运行 Epherome。

Epherome 使用 Tauri 作为后端。有关更多具体操作，请参阅 [Tauri 文档](https://tauri.app/zh-cn/)。

完成上述步骤后，就可以开始编辑代码了。

## 拉取请求 (Pull Request)
- 将您的更改提交到您的版本库，更具体地说是`{username}/Epherome`。
- 在仓库的 GitHub 主页上启动拉取请求 (Pull Reqeust)。
> 您可以遵循提交信息指南。比如，从模仿 Epherome 的提交信息开始。
>
> 具体来说，提交信息应该以 `type(scope)： <描述您做了哪些更改>`，并使用英文。
>
> 描述更改部分可以是名词、符号或动词短语。请注意，任何动词都应使用现在时。
>
> scope可以省略，就像 Epherome 所做的那样。
>
> 但这**并不重要**，因为作者可以在使用 *Squash 和 Merge* 时重写提交信息。
