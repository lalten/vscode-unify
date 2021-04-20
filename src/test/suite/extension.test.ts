import * as assert from 'assert';
import * as helper from './helper.js';
import * as vscode from 'vscode';

suite('Extension Test Suite', function () {
  this.timeout(5000);

  test('Test default works', async function () {
    const doc = await helper.openFile(`'Hello, ' + "World!"\n"Hello, " + 'World!'\n`);
    await vscode.commands.executeCommand('vscode-unify.formatFile');
    assert.strictEqual(doc.getText(), `'Hello, ' + 'World!'\n'Hello, ' + 'World!'\n`);
  });
  test('Test preferredQuote config', async function () {
    const doc = await helper.openFile(`'Hello, ' + "World!"\n"Hello, " + 'World!'\n`);
    const settings = vscode.workspace.getConfiguration('unify', doc);

    await settings.update('preferredQuote', '"');
    await vscode.commands.executeCommand('vscode-unify.formatFile');
    assert.strictEqual(doc.getText(), `"Hello, " + "World!"\n"Hello, " + "World!"\n`);

    await settings.update('preferredQuote', "'");
    await vscode.commands.executeCommand('vscode-unify.formatFile');
    assert.strictEqual(doc.getText(), `'Hello, ' + 'World!'\n'Hello, ' + 'World!'\n`);
  });
});
