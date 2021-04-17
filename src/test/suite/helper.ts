import * as vscode from 'vscode';

export async function doc(content: string, language?: string) {
    return await vscode.workspace.openTextDocument({
        language,
        content,
    });
}

export async function openFile(content: string): Promise<vscode.TextDocument> {
    const document = doc(content);
    vscode.window.showTextDocument(await document);
    return document;
}
