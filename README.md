# vscode-unify

[![Tests status](https://github.com/lalten/vscode-unify/actions/workflows/test.yml/badge.svg) ![Release status](https://github.com/lalten/vscode-unify/actions/workflows/release.yml/badge.svg)](https://github.com/lalten/vscode-unify/actions)

A VS Code Extension to modify a file's Python strings to use the same quote where possible. Uses https://github.com/myint/unify under the hood.

## Features

Open the file that you want to format and execute the "**Unify Quotes**" command from the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) (`Ctrl`+`Shift`+`P`).

You could also set up your own [keybinding](https://code.visualstudio.com/docs/getstarted/keybindings) or even execute the Unify Quotes command together with other formatters (e.g. `python.sortImports`, `editor.action.formatDocument`) through [multi-command](https://marketplace.visualstudio.com/items?itemName=ryuta46.multi-command).

## Requirements

You need to have `unify` installed for the currently selected Python interpreter:
```sh
pip install unify
```

## Extension Settings

This extension contributes the following settings:

* `unify.preferredQuote`: quote to prefer (`'`(default), or `"`)

## Known Issues

If `unify` is not installed and importable by the Python interpreter, the extension will fail.

Feel free to report bugs and send pull requests at https://github.com/lalten/vscode-unify.

## Release Notes

### 0.0.1

Initial release.
