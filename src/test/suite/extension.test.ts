import * as assert from 'assert';
import * as helper from './helper.js';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', function() {
test('Sample test', async function() {
    const doc = await helper.openFile(`'Hello, ' + "World!"\n"Hello, " + 'World!'\n`);
    await vscode.commands.executeCommand('vscode-unify.formatFile');
    console.log(doc.getText());
    assert.strictEqual(doc.getText(), `'Hello, ' + 'World!'\n'Hello, ' + 'World!'\n`);
});
});
