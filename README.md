# Hacktoberfest ([Live Website](https://hacktoberfest.lingonsaft.com/))

This is a beginner-friendly project to help you get started with your
[hacktoberfest](https://hacktoberfest.digitalocean.com/). If you don't
know where to start, feel free to watch the videos linked below, and
read the contribution rules. Happy hacking <3 !!

P.S. Star and share this repository, if you had fun!

![Alt Text](https://raw.githubusercontent.com/lauras5/hacktoberfest/master/images/hacktoberfest2018.gif)


# Videos

- [Hacktoberfest Intro](https://youtu.be/OsAFX_ZbgaE)
- [How to pull request [Overview]](https://youtu.be/DIj2q02gvKs)
- [Merge Conflict / comment](https://youtu.be/zOx5PJTY8CI)


# Contribution rules

- The project must work when opening index.html
- You are allowed to make pull requests that break the rules. We just won't merge it ;)
- Do NOT add any build steps e.g npm install (we want to keep this a simple static site)
- Do NOT remove Videos, Rules, FAQ or any other helpful content.
- Styling/code can be pretty, ugly or stupid, big or small as long as it works
- Add your name to the contributors.html file
- Try to keep pull requests small to minimize merge conflicts


## Getting Started

- Fork this repo (button on top)
- Clone on your local machine

```terminal
git clone https://github.com/lingonsaft/hacktoberfest.git
cd hacktoberfest
```

- Create a new branch

```markdown
git checkout -b my-new-branch
```
- Add your contribution
- Commit and push

```markdown
git add .
git commit -m "your-commit-msg"
git push origin my-new-branch
```

- Create a new pull request from your forked repository


## Avoid Conflicts (Syncing your fork)

An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.   

```terminal
git remote add upstream https://github.com/lingonsaft/hacktoberfest
```

You can verify that the new remote has been added by typing
```terminal
git remote -v
```

To pull any new changes from your parent repo simply run
```terminal
git merge upstream/master
```

This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

For more information on syncing forks [read this article from Github](https://help.github.com/articles/syncing-a-fork/).


# FAQs

- Who can contribute?
  - Anyone with a github account and who is signed up for
[hacktoberfest](https://hacktoberfest.digitalocean.com/) :)
- Are you getting paid for this?
  - Sadly no. But we think we should. This is 100% unofficial and we do it for fun, fame and glory.
- Who are you and why are you doing this?
  - We are two programmers from Sweden [Richard](https://github.com/richie-south)
  and [Benny](https://github.com/BennyCarlsson). We are doing this because we love Open
  Source and Hacktoberfest. We want to make it easier for people to get started with Hacktoberfest and Open Source.
- Why are you not using digitalocean?
  - Because we only know JavaScript and suck at servers. We use [now](https://zeit.co/now) instead.
- Are you not the guys from that failed [CodeCardCodingCards](https://www.kickstarter.com/projects/lingonsaft/codecardcodingcards) kickstarter?
  - Yes...
- Should I come closer to the text saying 'Don't come closer' on the left side of the home tab ?
  - Nope.
- How many pull request (PR) must be made, if I can get a awesome shirt from Hacktoberfest 2018?
  - 5
- How do I track my progress to get an awesome shirt from Hacktoberfest 2018?
  - go to : https://hacktoberfest.digitalocean.com/stats/ (Scroll down to Check Out Your Own Stats)
- What is the duration of Hacktoberfest 2018?
  - It is from 1st october to 31st october 2018...
- What is the event for?
  - For the open source community engagement



###### *We will do our best to merge as much as possible from everyone. However, time is limited and the merge conflicts are horrible <3*
