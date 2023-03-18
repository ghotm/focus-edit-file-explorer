import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('focus-edit-file-explorer.commands.focus-edit-file', () => {
		vscode.commands.executeCommand('workbench.files.action.showActiveFileInExplorer');
	});

	context.subscriptions.push(disposable);
}
export function deactivate() {}
