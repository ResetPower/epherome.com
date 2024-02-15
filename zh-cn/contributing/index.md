# 贡献 Epherome

Epherome 使用 GitHub 作为其唯一的源代码管理、开发、协作和持续集成平台。

要对 Epherome 做出贡献，您需要学习关于 Git 和 GitHub 的一些基础知识。

本文介绍了 Epherome 贡献的基本工作流程。

## Forking

要开始 Epherome 的工作，您需要在 GitHub 上 "fork" 该 Repository 。

Forking 后，您将拥有自己的 Repository `{username}/Epherome`，其内容与您 Fork 时 Epherome  Repository 的内容相同。**但是您需要手动与 Upstream repository 同步。**

*Upstream Repository* 是指该 Repository Fork 自的 Repository 。在本文档中，Upstream Repository 指的是 `ResetPower/Epherome`

您可以使用命令行 `git clone https://github.com/{username}/Epherome` 或者 `gh repo clone {username}/Epherome` 将 Repository 克隆到您的本地文件系统。

## 开发

- 打开命令行，并使用 `cd` 命令切换到包含 `package.json`的 `Epherome`目录。
- 使用 `npm install`来安装必要的包。
- 使用 `npm run tauri dev` 来在开发模式下运行 Epherome。

Epherome 使用 Tauri 作为其后端。获取更多详细的操作，您可以参阅 Tauri 文档。

完成以上步骤后，您可以开始编辑代码。

## 发起 Pull Request (PR)

- 将修改提交到您的 Repository ，即 `{username}/Epherome`。
- 在您的 Repository 页面上发起一个 Pull Request (PR)。

> 尽您最大的努力去遵循提交信息规范。您可以模仿 Epherome 的提交信息来开始。
>
> 具体地说，提交信息应该按 `type(scope): <short summary>` 的格式撰写。
> 短摘要可以是名词、符号或动词短语。请注意，任何动词都应用现在时。
> scope可以省略，就像 Epherome 做的那样。
> 
> 但是这**并不重要**，因为作者在使用 *Squash and Merge* 时可以重写提交信息。