import * as vscode from 'vscode';
import * as child_process from 'child_process';
import tempy = require('tempy');
import del = require('del');
import fs = require('fs');

export function activate(context: vscode.ExtensionContext): void {
  const unifyFileCommand = vscode.commands.registerTextEditorCommand(
    'vscode-unify.formatFile',
    async (textEditor, textEditorEdit) => {
      const doc = textEditor.document;
      const unifyPath = String(vscode.workspace.getConfiguration('unify', doc).get('path') || 'unify').toString();
      const opts = {
        windowsHide: true
      };
      const preferredQuote = String(vscode.workspace.getConfiguration('unify', doc).get('preferredQuote'));
      const tempPath = tempy.writeSync(doc.getText());
      const args = ['--in-place', `--quote=${preferredQuote}`, tempPath];
      try {
        child_process.execFileSync(unifyPath, args, opts);
        const formatted = fs.readFileSync(tempPath, 'utf8');
        textEditorEdit.replace(
          new vscode.Range(new vscode.Position(0, 0), doc.lineAt(doc.lineCount - 1).range.end),
          formatted
        );
      } catch (error) {
        console.error(error);
        vscode.window.showErrorMessage(error.message);
      }
      del(tempPath);
    }
  );

  context.subscriptions.push(unifyFileCommand);
  console.log('Activated vscode-unify.');
}

export function deactivate(): void {
  console.log('Deactivated vscode-unify.');
}
