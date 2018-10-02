# Hacktoberfest ([Live Website](https://hacktoberfest.lingonsaft.com/))

This is a beginner friendly project to help you get started with your [hacktoberfest](https://hacktoberfest.digitalocean.com/). If you don't know where to start feel free to watch the videos down below and read the contribution rules. Happy hacking <3

# Videos

- [Hacktoberfest Intro](https://youtu.be/OsAFX_ZbgaE)
- [How to pull request [Overview]](https://youtu.be/DIj2q02gvKs)
- [Merge Conflict / comment](https://youtu.be/zOx5PJTY8CI)

# Contribution rules

- Project must work when opening index.html
- You are allowed to make pull requests that break the rules. We just won't merge it ;)
- Do NOT add any build steps e.g npm install (we want to keep this a simple static site)
- Do NOT remove Videos, Rules, FAQ or any other helpful content.
- Styling / code can be pretty, ugly or stupid, big or small as long as it works
- Add your name to the contributers.html file
- Add images

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

# FAQ

- Who can contribute?
  - Anyone with a github account and signed up for [hacktoberfest](https://hacktoberfest.digitalocean.com/) :)
- Are you getting paid for this?
  - Sadly no. But we think we should. This is 100% unofficial and we do it for fun, fame and glory.
- Who are you and why are you doing this?
  - We are two programmers from Sweden [Richard](https://github.com/richie-south)
  and [Benny](https://github.com/BennyCarlsson). We are doing this because we love open
  source and Hacktoberfest. We want to make it easier for people to get started with Hacktoberfest and Open source.
- Why are you not using digitalocean?
  - Because we only know javascript and suck at servers. We use [now](https://zeit.co/now) instead.
- Are you not the guys from that failed [CodeCardCodingCards](https://www.kickstarter.com/projects/lingonsaft/codecardcodingcards) kickstarter?
  - yes..
- how many times have you taken Hacktoberfest and how many times have you got Hacktoberfest T-shirt?

## Guidelines

  # HTML

  General HTML guidelines to try and follow for good practice when adding or refactoring HTML code:

  - Ensure all html documents start with the <!DOCTYPE html> tag
  - Use lower case characters for all succeeding opening and closing tags. 
    - For example <section> instead of <SECTION>
  - Ensuring to close all tags after opening, as good pratice for more readable code, even when it is not enforced such as with the <p> tag.
    - For example <p>some text</p>, not <p>sometext
  - Ensuring to close all empty tags after opening, this is again optional but good pratice for more readable code.
    - For example <meta charset="utf-8" />, not <meta charset="utf-8">
  - Use lower case characters for all attribute names.
    - For example <div class="menu">, not <div CLASS="menu">
  -  Always add the alt attribute to images. This is important if the browser can not display the image for some reason.
    - For example <img src="html5.gif" alt="HTML5" />
  - Ensure there is no extra whitespace around equal signs on attributes, keeping whitespace at a minimum between tag attributes increases readability
    - For example <link rel="stylesheet" href="style.css" />, not  <link rel = "stylesheet" href = "styles.css" />
  - Use two spaces for indentation to signify child elements. Not every element needs to be indented rather use this to signify that tags are sub-parts of the preceding element such as in tables or lists, do not use the tab key. This increase readability also.
  - Finally ensure that all HTML documents include the <html>, <head> and <body> tags, in that order. Remembering to close the first tag with </html> at the end of the document.


