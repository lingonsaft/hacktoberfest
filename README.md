# Hacktoberfest ([Live Website](https://hacktoberfest.lingonsaft.com/))

```[English]```
This is a beginner-friendly project to help you get started with your
[hacktoberfest](https://hacktoberfest.digitalocean.com/).This repository is dedicated to help beginners step up and join hands with the open surce community. Feel free to start contributing. There are no wrong contributions. If you don't
know where to start, feel free to watch the videos linked below, and
read the contribution rules. Happy hacking <3 !!
By watching the video you will understand better about the working of hacktoberfest and how one will be able to create pull requests.
P.S. Star and share this repository, if you had fun!


```[Français]```
Ceci est un projet pour débutant qui vous permettra de commencer sur [hacktoberfest](https://hacktoberfest.digitalocean.com/). Si vous ne savez pas par ou commencer, vous pouvez regarder la vidéo(le liens se trouve plus bas) et lire les règles de contribution. Joyeux Hacking!!
Regarder la vidéo permet de mieux comprendre le fonctionnement de hacktoberfest et comment créer des pull request.


```[Português]```
Este é um projeto bom para iniciantes para ajudar você a começar a contribuir com o
[hacktoberfest] (https://hacktoberfest.digitalocean.com/). Se você não
sabe por onde começar, fique à vontade para assistir aos vídeos relacionados abaixo e
leia as regras de contribuição. Bom hacking <3 !!
Ao assistir ao vídeo, você entenderá melhor sobre o funcionamento do hacktoberfest e como será possível criar pull requests.
P.S. Star e compartilhe este repositório, se você se divertiu!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![Alt Text](https://raw.githubusercontent.com/lauras5/hacktoberfest/master/images/hacktoberfest2018.gif)


## Videos/Vidéos/Vídeos

- [Hacktoberfest Intro](https://youtu.be/OsAFX_ZbgaE)
- [How to pull request [Overview]](https://youtu.be/DIj2q02gvKs)
- [Merge Conflict / comment](https://youtu.be/zOx5PJTY8CI)


## Contribution rules/Règles de contribution/Regras de contribuição

```[English]```
- The project must work when opening [index.html](https://github.com/lingonsaft/hacktoberfest/blob/master/index.html)
- You are allowed to make pull requests that break the rules. We just won't merge it ;)
- Do NOT add any build steps e.g npm install (we want to keep this a simple static site)
- Do NOT remove Videos, Rules, FAQ, or any other helpful content.
- Styling/code can be pretty, ugly or stupid, big or small as long as it works
- Add your name to the [contributors.html](https://github.com/lingonsaft/hacktoberfest/blob/master/contributors.html) file
- Try to keep pull requests small to minimize merge conflicts

```[Français]```
- Ce projet doit fonctionner à l'ouverture de [index.html](https://github.com/lingonsaft/hacktoberfest/blob/master/index.html)
- Vous avez le droit de soumettre des pull request qui ne respectent pas les règles, mais nous ne les intégrerons pas
- Ne PAS ajouter d'étapes supplémentaires comme npm install ( nous souhaitons que le projet reste simple)
- Ne supprimez PAS les vidéos, règles, FAQ ou autre contenu utile.
- Le style/code peut être moche, élégant, stupide, petit ou grand à condition qu'il soit fonctionnel
- Ajoutez votre nom d'utilisateur au fichier [contributors.html](https://github.com/lingonsaft/hacktoberfest/blob/master/contributors.html)
- Essayez de garder les pull request petit pour minimiser les conflits.

```[Português```
- O projeto deve funcionar ao abrir [index.html] (https://github.com/lingonsaft/hacktoberfest/blob/master/index.html)
- Você tem permissão para fazer pedidos de pull que violam as regras. Nós apenas não vamos realizar o merge ;)
- NÃO adicione nenhuma etapa de compilação, por exemplo, npm install (queremos manter um site estático simples)
- NÃO remova Vídeos, Regras, FAQ ou qualquer outro conteúdo útil.
- O estilo/código pode ser bonito, feio ou estúpido, grande ou pequeno, desde que funcione
- Adicione seu nome ao arquivo [contributors.html] (https://github.com/lingonsaft/hacktoberfest/blob/master/contributors.html)
- Tente manter os pull requests pequenos para minimizar conflitos de merge

## Getting Started/Pour commencer/Começando

- Fork this repo (button on top) / Forker le repo (bouton en haut de la page) / Faça fork desse repositório (botão no topo)
- Clone on your local machine / Cloner sur votre machine en local / Faça clone para sua máquina local

```terminal
git clone https://github.com/<your username>/hacktoberfest.git
cd hacktoberfest
```

- Create a new branch / Créer une nouvelle branche / Crie uma nova branch

```terminal
git checkout -b my-new-branch
```

- Add your contribution / Ajouter votre contribution / Adicione sua contribuição
- Commit and push

```terminal
git add .
git commit -m "your-commit-msg"
git push origin my-new-branch
```

- Create a new pull request from your forked repository /Créer une pull request à partir de votre repo / Crie um novo pull request do  repositório que você fez fork

-------------------------

## Avoid Conflicts (Syncing your fork) /Eviter les conflits (synchroniser le fork) / Evite conflitos (sincronize seu fork)

```[English]``` An easy way to avoid conflicts is to add an 'upstream' for your git repo, as other PR's may be merged while you're working on your branch/fork.

```[French]``` Une façon simple d'éviter les conflits est d'ajouter un 'upstream' pour votre repo, vu que d'autres PR pourraient avoir été incluses pendant que vous travailliez sur la votre.

```[Português]```
Uma maneira fácil de evitar conflitos é adicionar um 'upstream' para o seu repositório git, já que outros PRs podem ser mesclados enquanto você estiver trabalhando em seu branch / fork.

```terminal
git remote add upstream https://github.com/lingonsaft/hacktoberfest
```

```[English]``` You can verify that the new remote has been added by typing.

```[French]``` Il est possible de vérifier le fonctionnement en tapant

```[Português]``` Você pode verificar que seu novo controle remoto foi adicionado digitando

```terminal
git remote -v
```

```[English]``` To pull any new changes from your parent repo simply run.

```[French]``` Pour pull les nouveaux changements, il suffit de taper

```[Português]``` Para realizar pull de quaisquer novas mudanças para seu repositório, simplesmente execute.

```terminal
git merge upstream/master
```

```[English]``` 
This will give you any eventual conflicts and allow you to easily solve them in your repo. It's a good idea to use it frequently in between your own commits to make sure that your repo is up to date with its parent.

For more information on syncing forks [read this article from Github](https://help.github.com/articles/syncing-a-fork/).

```[French]``` 
Ceci vous donnera un aperçu des conflits éventuels et vous permet de les résoudre dans votre repo. Il est de bonne pratique de le faire régulièrement entre deux commits pour s'assurer que le repo est à jour.

Pour plus d'info, [lire cet article de Github](https://help.github.com/articles/syncing-a-fork/).

```[Português]```
Isso lhe dará eventuais conflitos e permitirá que você os resolva facilmente em seu repo. É uma boa ideia usá-lo com frequência entre seus próprios commits para garantir que o repo esteja atualizado com o pai.

Para mais informações sobre a sincronização de garfos [leia este artigo do Github] (https://help.github.com/articles/syncing-a-fork/).

-------------------------

## Ideas for contributions/Idees de contributions

- Style the index.html
- Add your own projects to the 'Helpful Material Page'
- Add helpful links/guides to the 'Helpful Material Page'
- Update Readme.md

## FAQs

- Who can contribute?

  - Anyone with a github account and who is signed up for [hacktoberfest](https://hacktoberfest.digitalocean.com/) :).

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
- Should I come closer to the text saying 'Don't come closer' on the left side of the home tab?
  - Nope.
- How many pull request (PR) must be made, if I can get an awesome shirt from Hacktoberfest 2018?
  - 5
- How do I track my progress to get an awesome shirt from Hacktoberfest 2018?
  - go to : [https://hacktoberfest.digitalocean.com/stats/](https://hacktoberfest.digitalocean.com/stats/) (Scroll down to Check Out Your Own Stats).
- What is the duration of Hacktoberfest 2018?
  - It is from October 1st till October 31st, 2018.
- What is the event for?
  - For the open source community engagement.

### *We will do our best to merge as much as possible from everyone. However, time is limited and the merge conflicts are horrible ❤️*
