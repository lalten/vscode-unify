import * as vscode from 'vscode';
import * as child_process from 'child_process';
import * as path from 'path';

// The extension is `activate`d the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Provide the implementation of the command with registerCommand
  const unifyFileCommand = vscode.commands.registerTextEditorCommand('vscode-unify.formatFile',
    (textEditor, textEditorEdit) => {
      let doc = textEditor.document;
      const pythonPath = vscode.workspace.getConfiguration('python').pythonPath || "python";
      const wrapper = path.join(__dirname, '../src/unify_wrapper/unify_wrapper.py');
      const command = `${pythonPath} ${wrapper}`;
      var env = process.env;
      env["PREFERRED_QUOTE"] = String(vscode.workspace.getConfiguration('unify', doc).get('preferredQuote'));
      const opts = { env: env, input: doc.getText() };
      try {
        const formattedText = child_process.execSync(command, opts).toString();
        textEditorEdit.replace(
          new vscode.Range(new vscode.Position(0, 0), doc.lineAt(doc.lineCount - 1).range.end),
          formattedText);
      } catch (err) {
        const errorString = err.stderr?.toString() || "";
        if (errorString.includes("ModuleNotFoundError: No module named 'unify'")) {
          // TODO: If the problem is that unify is not installed, I could try and offer to install it, like in
          // https://github.com/microsoft/vscode-python/blob/3698950c97982f31bb9dbfc19c4cd8308acda284/src/client/common/installer/productInstaller.ts#L511
          vscode.window.showErrorMessage("Could not import [unify](https://pypi.org/project/unify/), is it installed? \
        (Got ModuleNotFoundError: No module named 'unify')");
        } else {
          vscode.window.showErrorMessage(errorString);
        }
        console.error(err);
      }
    });

  context.subscriptions.push(unifyFileCommand);
  console.log("Installed vscode-unify.");
}

export function deactivate() { }
