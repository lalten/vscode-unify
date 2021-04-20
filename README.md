# vscode-unify

[![CI status](https://img.shields.io/github/workflow/status/lalten/vscode-unify/Build,%20Test%20and%20Deploy)](https://github.com/lalten/vscode-unify/actions) [![Visual Studio Marketplace Version](https://vsmarketplacebadge.apphb.com/version/lalten.vscode-unify.svg)](https://marketplace.visualstudio.com/items?itemName=lalten.vscode-unify)

<img src="icon.png" height=200>

https://marketplace.visualstudio.com/items?itemName=lalten.vscode-unify

A VS Code Extension to modify a file's Python strings to use the same quote where possible. Uses https://github.com/myint/unify under the hood.

## Features

Open the file that you want to format and execute the "**Unify Quotes**" command from the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) (`Ctrl`+`Shift`+`P`).

<img src="images/demo.gif">

You could also set up your own [keybinding](https://code.visualstudio.com/docs/getstarted/keybindings) or even execute the Unify Quotes command together with other formatters (e.g. `python.sortImports`, `editor.action.formatDocument`) through [multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command).

## Requirements

You need to have `unify` installed for the currently selected Python interpreter:
```sh
pip install unify
```

## Extension Settings

This extension contributes the following settings:

* `unify.path`: path to `unify` executeable (default is just `unify`)
* `unify.preferredQuote`: quote to prefer: `'`(default), or `"`

## Known Issues

If `unify` is not installed, the extension will fail.

Feel free to report bugs and send pull requests at https://github.com/lalten/vscode-unify.
