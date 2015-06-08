# generator-fzurb

## Getting Started

```bash
npm install -g yo
```

### This generator

This project is an exercise on how to differently implement existing Zurb Foundation CLI automated project scaffolding. The official one is based on Ruby, why this one uses Node and Yeoman. The scaffolded Zurb Foundation project is using LibSass, so no Ruby dependency. In theory Zurb could just use all Node based tools to scaffold Sass based project without any Ruby dpendency. And that is the purpose of this project

> Note: Npm installation won't work

```bash
npm install -g generator-fzurb
```
Finally, initiate the generator:

```bash
mkdir my-project && cd $_
yo fzurb
_-----_
|       |    .--------------------------.
|--(o)--|    |  Welcome to the smashing |
`---------´   |   Foundation generator!  |
( _´U`_ )    '--------------------------'
/___A___\
 |  ~  |
__'.___.'__
´   `  |° ´ Y `

? Would you like to create example project? Yes
create bower.json
create package.json
create .bowerrc
create .gitignore
create Gruntfile.js
create humans.txt
create index.html
create README.md
create robots.txt
create js/app.js
create scss/_settings.scss
create scss/app.scss
```

The Foundation (latest) Zurb project is scaffolded:

```bash
├── Gruntfile.js
├── README.md
├── bower.json
├── humans.txt
├── index.html
├── js
│   └── app.js
├── package.json
├── robots.txt
└── scss
    ├── _settings.scss
    └── app.scss
```

You can now install dependencies:

```bash
npm install
bower install
```

and start tweaking a project at http://localhost:3000:
```bash
grunt
Running "sass:dist" (sass) task

Running "watch" task
Waiting...
```



## License

MIT
