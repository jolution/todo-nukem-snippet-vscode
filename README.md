<p align="center">
    <picture>
        <source media="(prefers-color-scheme: dark)" srcset="./images/todonukem-dark.png">
        <source media="(prefers-color-scheme: light)" srcset="./images/todonukem-light.png">
        <img alt="Shows the banner of TODO NUKEM, with its logo" src="./images/todonukem-dark.png" width="700">
    </picture>
</p>

# TODO NUKEM - Coding Comments Generator

[![The MIT License](https://img.shields.io/badge/license-MIT-orange.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![GitHub Marketplace](https://img.shields.io/badge/Marketplace-Generator-blue.svg?colorA=24292e&colorB=0366d6&style=flat&longCache=true&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAM6wAADOsB5dZE0gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAERSURBVCiRhZG/SsMxFEZPfsVJ61jbxaF0cRQRcRJ9hlYn30IHN/+9iquDCOIsblIrOjqKgy5aKoJQj4O3EEtbPwhJbr6Te28CmdSKeqzeqr0YbfVIrTBKakvtOl5dtTkK+v4HfA9PEyBFCY9AGVgCBLaBp1jPAyfAJ/AAdIEG0dNAiyP7+K1qIfMdonZic6+WJoBJvQlvuwDqcXadUuqPA1NKAlexbRTAIMvMOCjTbMwl1LtI/6KWJ5Q6rT6Ht1MA58AX8Apcqqt5r2qhrgAXQC3CZ6i1+KMd9TRu3MvA3aH/fFPnBodb6oe6HM8+lYHrGdRXW8M9bMZtPXUji69lmf5Cmamq7quNLFZXD9Rq7v0Bpc1o/tp0fisAAAAASUVORK5CYII=)](https://marketplace.visualstudio.com/items?itemName=jolution.todo-nukem-generator-vscode)
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

**Working Draft**

A VS Code extension for generating structured TODO comments with emojis following the [TODO NUKEM Convention](https://github.com/jolution/todo-nukem/blob/main/README.md). Combines both **interactive command-based generation** and **quick snippets** for maximum flexibility.

<!-- ### 🎬 Demo -->

<!-- #### Generate Comment -->
<!-- ![generate-demo.gif](./images/generate-demo.gif) -->

## 📰 Installation

Install this extension from the [VSCode Marketplace](https://marketplace.visualstudio.com/items?itemName=jolution.todo-nukem-generator-vscode)

## 🚀 Usage

This extension offers **two ways** to create TODO NUKEM comments:

### 1. 🎯 Interactive Command (Recommended)

Open the Command Palette (`Cmd+Shift+P` or `Ctrl+Shift+P`) and search for:

```
Insert TODO NUKEM Comment
```

Follow the guided prompts:

1. **Priority**: 🟩 Low / 🔶 Medium / 🔴 High
2. **Type**: ✨ Feature / 🐛 Fix
3. **Context**: 🎨 Design / 📚 Doc / 🧪 Test / ⚡ Perf / etc.
4. **Message**: Your TODO description
5. **Meta Blocks** (optional): 💬 TBD / 🎯 Scope / 🎫 Ticket / 📅 Until / etc.

**Example output:**

```typescript
// TODO: 🔴 ✨ 🎨 Refactor button component [🎫 JIRA-123] [📅 2025-12-31]
```

### 2. ⚡ Quick Snippets

In supported languages, type `todo` or `fixme` and press `Tab` to activate snippet templates:

```todo ⇥```
```fixme ⇥```

This provides pre-defined templates for quick TODO insertion.

## ✨ Supported Languages

_Defined in the ```package.json``` file, the following languages are supported with either line or block comments:_

### Line Comment

```TypeScript, JavaScript```

### Block Comment

```CSS, PostCSS, SCSS, Less, HTML, Python, Java, C#, C++, Ruby, Swift, PHP, Go, Rust, Dart, Perl, Lua, Shell Script```

For example, CSS uses block comments like ```/* ... */```.

And TypeScript could use line comments like ```// ...```.

**If a language you need is missing, feel free to open a PR and contribute!**

## ❓FAQ

<details>
<summary>How can I enable snippet suggestions in comments in VSCode?</summary>
<p>By default, snippet suggestions are not active in comments in VSCode. If you want to enable this feature, you need to adjust your settings.

In User Settings search for `quickSuggestions` and enable the following options:

```json
"editor.quickSuggestions": {
    "comments": true,
    "strings": true
}
```

</p>
</details>

For more questions and answers, please visit our [Q&A Discussions](https://github.com/jolution/todo-nukem/discussions/categories/q-a).

## ❤️ Support

If you find this project helpful, please consider giving it the Convention Repo a star on [GitHub](https://github.com/jolution/todo-nukem).

[![Star this repository](https://img.shields.io/github/stars/jolution/todo-nukem-snippet-vscode?style=social)](https://github.com/jolution/todo-nukem)

We do not currently offer direct support for this project.

## 💎 Sponsor

### Atos

We appreciate the support from [Atos](https://atos.net), helping us continue our open source work.

### ✍️ Authors (in alphabetical order)

- [@juliankasimir](https://www.github.com/juliankasimir)
- [@pimmok](https://www.github.com/pimmok)

## ⚖️ License

See the [LICENSE](LICENSE) file for details.

## ℹ️ Disclaimer

Please note that this project, TODO NUKEM, is not officially associated with or endorsed by the Duke Nukem franchise or its creators. It is an independent project developed by the open-source community and does not claim any rights to the Duke Nukem trademark or any related materials.

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jochensimon.com/"><img src="https://avatars.githubusercontent.com/u/17846993?v=4?s=100" width="100px;" alt="Jochen Simon"/><br /><sub><b>Jochen Simon</b></sub></a><br /><a href="#design-pimmok" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/juliankasimir"><img src="https://avatars.githubusercontent.com/u/120172350?v=4?s=100" width="100px;" alt="Julian Kasimir"/><br /><sub><b>Julian Kasimir</b></sub></a><br /><a href="#ideas-juliankasimir" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/jolution/le-checkout-jira/commits?author=juliankasimir" title="Code">💻</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
