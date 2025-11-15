import * as vscode from 'vscode';

function getCommentPrefix(languageId: string): string {
    const commentMap: { [key: string]: string } = {
        'javascript': '//',
        'typescript': '//',
        'java': '//',
        'c': '//',
        'cpp': '//',
        'csharp': '//',
        'go': '//',
        'rust': '//',
        'php': '//',
        'swift': '//',
        'kotlin': '//',
        'dart': '//',
        'python': '#',
        'ruby': '#',
        'shell': '#',
        'bash': '#',
        'powershell': '#',
        'yaml': '#',
        'perl': '#',
        'r': '#',
        'html': '<!--',
        'xml': '<!--',
        'css': '/*',
        'scss': '//',
        'less': '//',
        'sql': '--',
        'lua': '--',
        'haskell': '--',
    };
    return commentMap[languageId] || '//';
}

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('todo-nukem-inserter.insertTodo', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        const commentPrefix = getCommentPrefix(editor.document.languageId);

        // Prio
        const prio = await vscode.window.showQuickPick(
            [
                { label: '🟩 Low Prio', symbol: '🟩' },
                { label: '🔶 Medium Prio', symbol: '🔶' },
                { label: '🔴 High Prio', symbol: '🔴' }
            ],
            { placeHolder: 'Select priority' }
        );
        if (!prio) return;

        // Typ
        const type = await vscode.window.showQuickPick(
            [
                { label: '✨ Feature', symbol: '✨' },
                { label: '🐛 Fix', symbol: '🐛' }
            ],
            { placeHolder: 'Select type' }
        );
        if (!type) return;

        // Context
        const contextPick = await vscode.window.showQuickPick(
            [
                { label: '🎨 Design', symbol: '🎨' },
                { label: '📚 Doc', symbol: '📚' },
                { label: '🧪 Test', symbol: '🧪' },
                { label: '⚡ Perf', symbol: '⚡' },
                { label: '🈷️ Lang', symbol: '🈷️' },
                { label: '🔒 Sec', symbol: '🔒' },
                { label: '🔄 Update', symbol: '🔄' },
                { label: '🛠️ Optimize', symbol: '🛠️' },
                { label: '👀 Review', symbol: '👀' }
            ],
            { placeHolder: 'Select context' }
        );
        if (!contextPick) return;

        // Nachricht eingeben
        const message = await vscode.window.showInputBox({
            placeHolder: 'Enter your TODO message',
            prompt: 'What needs to be done?'
        });
        if (!message) return;

        // Optional Meta Blocks (mehrfach wählbar)
        const metaBlocks = await vscode.window.showQuickPick(
            [
                { label: '💬 TBD', symbol: '💬', key: 'TBD' },
                { label: '🎯 Scope', symbol: '🎯', key: 'Scope' },
                { label: '🎫 Ticket', symbol: '🎫', key: 'Ticket' },
                { label: '📅 Until', symbol: '📅', key: 'Until' },
                { label: '👤 Assignee', symbol: '👤', key: 'Assignee' },
                { label: '✍️ Author', symbol: '✍️', key: 'Author' },
                { label: '🔖 Version', symbol: '🔖', key: 'Version' },
                { label: '📚 Docs', symbol: '📚', key: 'Docs' },
                { label: '🛑 Block-Commit', symbol: '🛑', key: 'Block-Commit' }
            ],
            { placeHolder: 'Optional meta blocks', canPickMany: true }
        );

        let metaLines = '';
        if (metaBlocks && metaBlocks.length > 0) {
            const metaValues: string[] = [];
            for (const block of metaBlocks) {
                const value = await vscode.window.showInputBox({
                    placeHolder: `Enter value for ${block.label}`,
                    prompt: `${block.key} value`
                });
                if (value) {
                    metaValues.push(`[${block.symbol} ${value}]`);
                } else {
                    metaValues.push(`[${block.symbol} ${block.key}]`);
                }
            }
            if (metaValues.length > 0) {
                metaLines = ' ' + metaValues.join(' ');
            }
        }

        // Einfügen
        editor.edit(editBuilder => {
            editor.selections.forEach(sel => {
                editBuilder.replace(sel, `${commentPrefix} TODO: ${prio.symbol} ${type.symbol} ${contextPick.symbol} ${message}${metaLines}`);
            });
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
