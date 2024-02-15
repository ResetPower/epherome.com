# Contributing to Epherome

Epherome uses GitHub as its only source code management, development, collaboration and continuous integration platform.

To make contributions to Epherome, you have learn some basic knowledge about Git and GitHub.

This article introduces the basic workflow of Epherome contribution to you.

## Forking

To start working with Epherome, you have to "fork" the respository on GitHub.

After forking, you will have your own repository `{username}/Epherome`, which shares the same content of the Epherome repository at the time you fork it. **But you have to manually sync with the upstream repository.**

*Upstream repository* refers to the repository from which this repository is forked. In this document, the upstream repository refers to `ResetPower/Epherome`

You can use command line `git clone https://github.com/{username}/Epherome` or `gh repo clone {username}/Epherome` to clone the repository to your local filesystem.

## Developing

- Open the command line, and `cd` to the directory `Epherome`, which contains `package.json`.
- Use `npm install` to install required packages.
- Use `npm run tauri dev` to run Epherome in development mode.

Epherome uses Tauri as its backend. For more specific actions, you can refer to the Tauri documents.

After the steps above, you can start editing code.

## Pull Request

- Commit your changes to your repository, more specifically `{username}/Epherome`.
- Start a Pull Request (PR) on the GitHub homepage of your repository.

> You can try your best to follow the commit message guidelines. You can start by imitating Epherome commit messages.
>
> Specifically, a commit message should be written in the format `type(scope): <short summary>`.
> The short summary can be a noun, a symbol or a verb phrase. Note that any verbs should be in present tense.
> The scope can be omitted, just like Epherome does.
>
> But that **doesn't matter**, because the author can rewrite commit message when using *Squash and Merge*.
