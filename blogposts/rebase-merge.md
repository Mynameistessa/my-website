---
title: 'Git merge versus Git rebase'
date: '2023-09-20'
readingTime: '5'
---

&nbsp;  
When integrating code changes you have two options in the world of git: rebase or merge. In the debate of what method is more suitable, opinions vary from “I couldn’t possibly care less” to warnings against using rebase. In this blogpost I aim to provide an overview about how these two methods differ and highlight the strengths and weaknesses of each one. 

&nbsp;  
The typical scenario is: we have a branch, for example called “main”, and two branches based off from it. One of these branches merges before the other and now we want to update the leftover branch to be in sync with the latest version of main. 

&nbsp;  
Git merge is most the commonly used command to achieve this, and when updating a branch in GitHub this is the default method. This algorithm merges two histories together, respecting the original timeline upon which the commits took place. In addition to the commits that make up our code changes, we also add a "merge commit" to the commit history that represents this operation. This results in what can be described as a “diamond-shaped” or “train-tracks” history of code changes. As a result, this method is non-destructive because we are not losing any information when we complete this merge. If we need to roll back a commit.

&nbsp;  
Rebase, on the other hand, works differently. Git “orphans” the commits on your branch and reapplies them on top of the base branch. Given that the parents of your commits have now changed, your commits get new references (see Merkle Trees which explain the reasoning behind this). They are new commits. This is a destructive operation in the sense that we are changing our development history. You can no longer see the context of when your changes were incorporated into the base branch. Instead, we end up with a linear commit history and there is no “merge commit”. In this way, rebasing can be used to clean up your commit history. Using interactive rebase gives you even more power by allowing you to squash or remove any unwanted commits. This is one reason against using merge; these merge commits are not representative of your new changes and can be seen as “polluting” your PR history. If you merge many times it may be unclear what your release is about. There is no equivalent way of doing this with the merging method.

&nbsp;  
### **Conflicts**
If conflicts are found when merging two branches then you can fix all of these all at once in your editor when doing a git merge. This is because Git is comparing the tip of both branches and presenting you with the difference. On the other hand, with rebase you start by comparing the first commit on your branch with the base branch and resolve conflicts from there on, looking at each commit in turn. This can make a faulty rebase particularly tricky to fix. 

&nbsp;  
### **Final Thoughts**
It is advised never to rebase a branch that is already published publicly. For example, if the main branch is rebased onto the feature branch, the commits under "main" will get new references that no longer match the commits in main. Git will then tell you that you have diverged from the main branch even though the changes are the same. Instead, it is best to regularly rebase your local private branch before you publish or share your branch with another team member.

&nbsp;  
Whether using merge or rebase it is recommended to regularly keep your branches in sync to avoid conflicts occurring. If numerous conflicts occur this may suggest the branch is too long-lived and team members have not been communicating to each other enough. 

&nbsp;  
Teams will adopt different branching strategies to suit their workflows. For some a linear commit history is not important. If a branch is long-lived or more complex than changing a few lines it might easier to do a merge to avoid potentially lose work if it goes wrong, and as mentioned, it can be simpler to handle conflicts in one go.

&nbsp;  
### **Sources**
* [https://blog.git-init.com/differences-between-git-merge-and-rebase-and-why-you-should-care/](https://blog.git-init.com/differences-between-git-merge-and-rebase-and-why-you-should-care/)
* [https://medium.com/@fredrikmorken/why-you-should-stop-using-git-rebase-5552bee4fed1](https://medium.com/@fredrikmorken/why-you-should-stop-using-git-rebase-5552bee4fed1)
* [https://github.blog/changelog/2022-02-03-more-ways-to-keep-your-pull-request-branch-up-to-date/](https://github.blog/changelog/2022-02-03-more-ways-to-keep-your-pull-request-branch-up-to-date/)
* [https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase](https://www.atlassian.com/git/tutorials/rewriting-history/git-rebase)
* [https://scottjbaldwin.github.io/git/2018/07/08/opinionated-git-part-2.html](https://scottjbaldwin.github.io/git/2018/07/08/opinionated-git-part-2.html)
* [https://www.atlassian.com/git/tutorials/merging-vs-rebasing](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
* [https://www.edwardthomson.com/blog/merge_vs_rebase.html](https://www.edwardthomson.com/blog/merge_vs_rebase.html)

