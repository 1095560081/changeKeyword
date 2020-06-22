// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below

// Display a message box to the user

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
var vscode = require('vscode');
/**
 * @param {vscode.ExtensionContext} context
 */




function activate(context) {
	// const axios = require('axios');
	// var jsonStr;
	// axios.get('https://dynamsoft.github.io/barcode-sdk-docs-dev/keywords.json')
	// .then(response => {
	// 	var vscode = require('vscode');
	// 	vscode.window.showInformationMessage('Finish loading the JSON file from the network.');
	// 	jsonStr = response.data.change;
	// 	var regArray = new Array()		
	// 	var language = vscode.workspace.getConfiguration('language').get('type');
	// 	//从json文件里面读取要替换的关键词，添加到正则数组中
	// 	if(language=="en"){
	// 		for (var curStr in jsonStr)
	// 		{
	// 			var word = jsonStr[curStr].ori;
	// 			var regStr = "((^|\\s)(("+word+"|`"+word+"`|\\["+word+"\\]|\\[`"+word+"`\\])\\(.*?\\))($|\\s|,|\\.))|((^|\\s)("+word+"|`"+word+"`|\\["+word+"\\]|\\[`"+word+"`\\])($|\\s|,|\\.))"
	// 			regArray[curStr]=new RegExp(regStr,"g");
	// 		}
	// 	}
	// 	else{
	// 		for (var curStr in jsonStr)
	// 		{
	// 			var word = jsonStr[curStr].ori;
	// 			var regStr = "((\\[`\\b"+word+"\\b`\\]|`\\b"+word+"\\b`|\\[\\b"+word+"\\b\\]|\\b"+word+"\\b)\\(.*?\\))|((\\[`\\b"+word+"\\b`\\]|`\\b"+word+"\\b`|\\[\\b"+word+"\\b\\]|\\b"+word+"\\b))";
	// 			regArray[curStr]=new RegExp(regStr,"g");
	// 		}	
	// 	}
	// 	if(language=="en"){
	// 		vscode.window.showInformationMessage('The current matching language is English');
	// 	}else{
	// 		vscode.window.showInformationMessage('The current matching language is Chinese');
	// 	}
	// 	var currentRegIndex = 0;
	// 	var lineNumb;
	// 	var currentLine = 0;
	// 	var lastIndex;
	// 	//首先先扫描一遍全文
	// 	// vscode = require('vscode');
	// 	// var editor = vscode.window.activeTextEditor;
	// 	// var document = editor.document;
	// 	// var allText = document.getText();
	// 	// for (var cur in regArray){
	// 	// 	var list = regArray[cur].exec(allText);
	// 	// 	if(list==null){
	// 	// 		continue;
	// 	// 	}
	// 	// }
	// 	// var ifAllFind = false;
	// 	// for(var i = 0;i<regArray.length;i++){
	// 	// 	if(regArray[i].lastIndex!=0){
	// 	// 		ifAllFind = true;
	// 	// 	}
	// 	// }
	// 	// for(var i = 0;i<regArray.length;i++){
	// 	// 	regArray[i].lastIndex = 0;
	// 	// }
	// 	let selectKeyword = vscode.commands.registerCommand('selection.keyword', function () {
	// 		//如果全文中没有关键词则直接退出
	// 		// if(ifAllFind==false){
	// 		// 	vscode.window.showInformationMessage('no keyword in the text');
	// 		// 	return;
	// 		// }
	// 		vscode = require('vscode');
	// 		lineNumb = vscode.window.activeTextEditor.document.lineCount;
	// 		var editor = vscode.window.activeTextEditor;
	// 		var document = editor.document;
	// 		//找到当前选中部分开始向下搜索关键词
	// 		var startLine = vscode.window.activeTextEditor.selection.end.line;
	// 		currentLine = startLine;
	// 		lastIndex = vscode.window.activeTextEditor.selection.end.character;
	// 		for(var i = 0;i<regArray.length;i++){
	// 			regArray[i].lastIndex = lastIndex;
	// 		}
	// 		//当前选中的字符串
	// 		var selectString = "";
	// 		var nextpage = false;
	// 		do{
	// 			//匹配当前行
	// 			var line = document.lineAt(currentLine);
	// 			var range = line.range;
	// 			var end = range.end;
	// 			var text = document.getText(range);
	// 			lastIndex = end.character + 1;
	// 			for (var cur in regArray){
	// 				var list = regArray[cur].exec(text);
	// 				if(list==null){
	// 					continue;
	// 				}
	// 				if(lastIndex > regArray[cur].lastIndex){
	// 					selectString = list[0];
	// 					lastIndex = regArray[cur].lastIndex;
	// 					currentRegIndex = cur;
	// 				}
	// 			}
	// 			//当前行有无匹配
	// 			var ifFind = false;
	// 			for(var i = 0;i<regArray.length;i++){
	// 				if(regArray[i].lastIndex!=0){
	// 					ifFind = true;
	// 				}
	// 			}
	// 			if(ifFind==true){
	// 				for(var i = 0;i<regArray.length;i++){
	// 					regArray[i].lastIndex = lastIndex;
	// 				}
	// 				break;
	// 			}
	// 			else if(ifFind == false && nextpage == false){
	// 				//去下一行匹配
	// 				currentLine++;
	// 				currentLine = currentLine<lineNumb?currentLine:0;
	// 				if(currentLine == 0){
	// 					nextpage = true;
	// 				}
	// 			}else{
	// 				if(currentLine == startLine){
	// 					vscode.window.showInformationMessage('No keyword in the current document.');
	// 					return;
	// 				}
	// 				currentLine++;
	// 				currentLine = currentLine<lineNumb?currentLine:0;				
	// 			}
	// 		}while(true)
			
	// 		// else{
	// 		// 	currentline +=1;
	// 		// 	currentline = currentline<=linenumb?currentline:0;
	// 		// 	line = document.lineAt(currentline);
	// 		// 	range = line.range;
	// 		// 	start = range.start;
	// 		// 	end = range.end;
	// 		// 	text = document.getText(range);
	// 		// 	lastindex = end.character + 1;
	// 		// 	selectstring = "";
	// 		// 	for (var cur in reg){
	// 		// 		var list = reg[cur].exec(text);
	// 		// 		if(list==null){
	// 		// 			continue;
	// 		// 		}
	// 		// 		if(lastindex > reg[cur].lastIndex){
	// 		// 			selectstring = list[0];
	// 		// 			lastindex = reg[cur].lastIndex;
	// 		// 			currentRegIndex = cur;
	// 		// 		}
	// 		// 	}
	// 		// // }
	// 		//处理选中文字后面的空格
	// 		if(selectString[selectString.length-1]==' '||selectString[selectString.length-1]=='.'||selectString[selectString.length-1]==','||selectString[selectString.length-1]==''){
	// 			selectString = selectString.substring(0,selectString.length-1);
	// 			lastIndex--;
	// 		}
	// 		if(selectString[0]==' '){
	// 			selectString = selectString.substring(1,selectString.length);
	// 		}
	// 		//替换选中区域
	// 		var selectStart = new vscode.Position(currentLine,lastIndex-selectString.length);
	// 		var selectEnd = new vscode.Position(currentLine,lastIndex);
	// 		var select = new vscode.Selection(selectStart,selectEnd);
	// 		editor.revealRange(select,0);
	// 		editor.selections = editor.selections.map( function(){
	// 			return select;
	// 		},this);
			
	// 		vscode.window.showInformationMessage('Finish selecting the keyword.');
	// 	});
	
	// 	let replaceKeyword = vscode.commands.registerCommand('replace.keyword', function () {
	// 		//对选中部分进行替换
	// 		vscode = require('vscode');
	// 		var editor = vscode.window.activeTextEditor;
	// 		var sel = editor.selection;
	// 		editor.edit(editBuilder=> {
	// 			editBuilder.replace(sel, jsonStr[currentRegIndex].replace);		
	// 		});
	// 		for(var i = 0;i<regArray.length;i++){
	// 			regArray[i].lastIndex += (jsonStr[currentRegIndex].replace.length-jsonStr[currentRegIndex].ori.length);
	// 		}
	// 		vscode.window.showInformationMessage('Finish replacing the keyword.');
	// 	});
	
	// 	let replaceAllKeyword = vscode.commands.registerCommand('replace.allkeyword', function () {
	// 		//如果全文中没有关键词则直接退出
	// 		// if(ifAllFind==false){
	// 		// 	vscode.window.showInformationMessage('no keyword in the text');
	// 		// 	return;
	// 		// }
	// 		//对全文进行替换
	// 		vscode = require('vscode');
	// 		var editor = vscode.window.activeTextEditor;
	// 		var afterReplace = editor.document.getText();
	// 		for (var cur in regArray){
	// 			do{
	// 				var list = regArray[cur].exec(afterReplace);
	// 				if(list == null){
	// 					break;
	// 				}
	// 				var keywordBeforeReplace = list[0];
	// 				var keywordAfterReplace = jsonStr[cur].replace;
	// 				if(keywordBeforeReplace[0]==' '){
	// 					keywordAfterReplace = " "+keywordAfterReplace;
	// 				}
	// 				if(keywordBeforeReplace[keywordBeforeReplace.length-1]==' '){
	// 					regArray[cur].lastIndex--;
	// 					keywordAfterReplace = keywordAfterReplace + " ";
	// 				}
	// 				else if(keywordBeforeReplace[keywordBeforeReplace.length-1]==','){
	// 					regArray[cur].lastIndex--;
	// 					keywordAfterReplace = keywordAfterReplace + ",";
	// 				}
	// 				else if(keywordBeforeReplace[keywordBeforeReplace.length-1]=='.'){
	// 					regArray[cur].lastIndex--;
	// 					keywordAfterReplace = keywordAfterReplace + ".";
	// 				}
	// 				afterReplace = afterReplace.replace(regArray[cur],keywordAfterReplace);
	// 				regArray[cur].lastIndex  += (keywordAfterReplace.length-keywordBeforeReplace.length);
	// 			}while(regArray[cur].lastIndex!=0)
	// 		}
	// 		editor.edit(editBuilder=> {
	// 			var start = new vscode.Position(0,0);
	// 			var end = new vscode.Position(editor.document.lineCount + 1, 0);
	// 			editBuilder.replace(new vscode.Range(start, end), afterReplace);
	// 		});
	// 		var selectStart = new vscode.Position(0,0);
	// 		var selectEnd = new vscode.Position(0,0);
	// 		var select = new vscode.Selection(selectStart,selectEnd);
	// 		editor.selections = editor.selections.map( function(){
	// 			return select;
	// 		},this);
	// 		vscode.window.showInformationMessage('Finish replacing all keywords in current document.');
	// 	});
	// 	// var range = new vscode.Range(start,end);
	// 	function provideCompletionItems(document, position) {
	// 		const line = document.lineAt(position);
	// 		// 只截取到光标位置为止，防止一些特殊情况
	// 		const lineText = line.text.substring(0, position.character);
	// 		// 简单匹配，只要当前光标前的字符串为`this.dependencies.`都自动带出所有的依赖
	// 		var wordList = new Array();
	// 		for (var curStr in jsonStr)
	// 		{
	// 			var word = jsonStr[curStr].ori;
	// 			wordList.push(word);
	// 		}
	// 		for (var curStr in jsonStr)
	// 		{
	// 			var word = jsonStr[curStr].ori+"=>"+jsonStr[curStr].replace;
	// 			wordList.push(word);
	// 		}
	// 		if(/(^|\s).*$/g.test(lineText)) {
				
	// 			const dependencies = wordList;
	// 			return dependencies.map(dep => {
	// 				const item = new vscode.CompletionItem(dep, vscode.CompletionItemKind.Snippet);
	// 				// vscode.CompletionItemKind 表示提示的类型
	// 				if(dep.search("=>")!=-1){
	// 					var list = dep.split("=>");
	// 					item.insertText = list[1];
	// 				}
	// 				return item;
	// 			})
	// 		}
	// 	}
	// 	// /**
	// 	//  * 光标选中当前自动补全item时触发动作，一般情况下无需处理
	// 	//  * @param {*} item 
	// 	//  * @param {*} token 
	// 	//  */
	// 	function resolveCompletionItem() {
	// 		return null;
	// 	}
	// 	let autoCompletion = vscode.languages.registerCompletionItemProvider('markdown', {provideCompletionItems,resolveCompletionItem});
		
		

	// 	context.subscriptions.push(selectKeyword);
	// 	context.subscriptions.push(replaceKeyword);
	// 	context.subscriptions.push(replaceAllKeyword);
	// 	context.subscriptions.push(autoCompletion);
	// })
	// .catch(error => {
		vscode = require('vscode');
		// console.log(error);
		// vscode.window.showInformationMessage('Fail to load the JSON file from the network.');
		//var editor = vscode.window.activeTextEditor;
		var JsonConfigName = vscode.workspace.getConfiguration('jsonUrl').get('path');
		var language = vscode.workspace.getConfiguration('language').get('type');
		const jsonObj = require(JsonConfigName);
		jsonStr = jsonObj.change;
		var regArray = new Array()
		var vscode = require('vscode');
		//从json文件里面读取要替换的关键词，添加到正则数组中
		if(language=="en"){
			for (var curStr in jsonStr)
			{
				var word = jsonStr[curStr].ori;
				var regStr = "((^|\\s)(("+word+"|`"+word+"`|\\["+word+"\\]|\\[`"+word+"`\\])\\(.*?\\))($|\\s|,|.))|((^|\\s)("+word+"|`"+word+"`|\\["+word+"\\]|\\[`"+word+"`\\])($|\\s|,|.))"
				regArray[curStr]=new RegExp(regStr,"g");
			}
		}
		else{
			for (var curStr in jsonStr)
			{
				var word = jsonStr[curStr].ori;
				var regStr = "(("+word+"|`"+word+"`|\\["+word+"\\]|\\[`"+word+"`\\])\\(.*?\\))|("+word+"|`"+word+"`|\\["+word+"]|\\[`"+word+"`\\])";
				regArray[curStr]=new RegExp(regStr,"g");
			}	
		}
		if(language=="en"){
			vscode.window.showInformationMessage('The current matching language is English');
		}else{
			vscode.window.showInformationMessage('The current matching language is Chinese');
		}
		var currentRegIndex = 0;
		var lineNumb;
		var currentLine = 0;
		var lastIndex;
		//首先先扫描一遍全文
		//vscode = require('vscode');
		
		//var document = editor.document;
		// var allText = document.getText();
		// for (var cur in regArray){
		// 	var list = regArray[cur].exec(allText);
		// 	if(list==null){
		// 		continue;
		// 	}
		// }
		// var ifAllFind = false;
		// for(var i = 0;i<regArray.length;i++){
		// 	if(regArray[i].lastIndex!=0){
		// 		ifAllFind = true;
		// 	}
		// }
		// for(var i = 0;i<regArray.length;i++){
		// 	regArray[i].lastIndex = 0;
		// }
		
		let selectKeyword = vscode.commands.registerCommand('selection.keyword', function () {
			//如果全文中没有关键词则直接退出
			// if(ifAllFind==false){
			// 	vscode.window.showInformationMessage('no keyword in the text');
			// 	return;
			// }
			vscode = require('vscode');
			lineNumb = vscode.window.activeTextEditor.document.lineCount;
			var editor = vscode.window.activeTextEditor;
			var document = editor.document;
			//找到当前选中部分开始向下搜索关键词
			var startLine = vscode.window.activeTextEditor.selection.end.line;
			currentLine = startLine;
			lastIndex = vscode.window.activeTextEditor.selection.end.character;
			for(var i = 0;i<regArray.length;i++){
				regArray[i].lastIndex = lastIndex;
			}
			//当前选中的字符串
			var selectString = "";
			var nextpage = false;
			do{
				//匹配当前行
				var line = document.lineAt(currentLine);
				var range = line.range;
				var end = range.end;
				var text = document.getText(range);
				lastIndex = end.character + 1;
				for (var cur in regArray){
					var list = regArray[cur].exec(text);
					if(list==null){
						continue;
					}
					if(lastIndex > regArray[cur].lastIndex){
						selectString = list[0];
						lastIndex = regArray[cur].lastIndex;
						currentRegIndex = cur;
					}
				}
				//当前行有无匹配
				var ifFind = false;
				for(var i = 0;i<regArray.length;i++){
					if(regArray[i].lastIndex!=0){
						ifFind = true;
					}
				}
				if(ifFind==true){
					for(var i = 0;i<regArray.length;i++){
						regArray[i].lastIndex = lastIndex;
					}
					break;
				}
				else if(ifFind == false && nextpage == false){
					//去下一行匹配
					currentLine++;
					currentLine = currentLine<lineNumb?currentLine:0;
					if(currentLine == 0){
						nextpage = true;
					}
				}else{
					if(currentLine == startLine){
						vscode.window.showInformationMessage('No keyword in the current document');
						return;
					}
					currentLine++;
					currentLine = currentLine<lineNumb?currentLine:0;				
				}
			}while(true)
			
			//处理选中文字后面的空格
			if(selectString[selectString.length-1]==' '||selectString[selectString.length-1]=='.'||selectString[selectString.length-1]==','){
				selectString = selectString.substring(0,selectString.length-1);
				lastIndex--;
			}
			if(selectString[0]==' '){
				selectString = selectString.substring(1,selectString.length);
			}
			//替换选中区域
			var selectStart = new vscode.Position(currentLine,lastIndex-selectString.length);
			var selectEnd = new vscode.Position(currentLine,lastIndex);
			var select = new vscode.Selection(selectStart,selectEnd);
			editor.revealRange(select,0);
			editor.selections = editor.selections.map( function(){
				return select;
			},this);
			
			vscode.window.showInformationMessage('Finish selecting the keyword.');
		});
	
		let replaceKeyword = vscode.commands.registerCommand('replace.keyword', function () {
			//对选中部分进行替换
			vscode = require('vscode');
			var editor = vscode.window.activeTextEditor;
			var sel = editor.selection;
			editor.edit(editBuilder=> {
				editBuilder.replace(sel, jsonStr[currentRegIndex].replace);		
			});
			for(var i = 0;i<regArray.length;i++){
				regArray[i].lastIndex += (jsonStr[currentRegIndex].replace.length-jsonStr[currentRegIndex].ori.length);
			}
			vscode.window.showInformationMessage('Finish replacing the keyword.');
		});
	
		let replaceAllKeyword = vscode.commands.registerCommand('replace.allkeyword', function () {
			//如果全文中没有关键词则直接退出
			// if(ifAllFind==false){
			// 	vscode.window.showInformationMessage('本文中没有出现关键词');
			// 	return;
			// }
			//对全文进行替换
			vscode = require('vscode');
			var editor = vscode.window.activeTextEditor;
			var afterReplace = editor.document.getText();
			for (var cur in regArray){
				do{
					var list = regArray[cur].exec(afterReplace);
					if(list == null){
						break;
					}
					var keywordBeforeReplace = list[0];
					var keywordAfterReplace = jsonStr[cur].replace;
					if(keywordBeforeReplace[0]==' '){
						keywordAfterReplace = " "+keywordAfterReplace;
					}
					if(keywordBeforeReplace[keywordBeforeReplace.length-1]==' '){
						regArray[cur].lastIndex--;
						keywordAfterReplace = keywordAfterReplace + " ";
					}
					else if(keywordBeforeReplace[keywordBeforeReplace.length-1]==','){
						regArray[cur].lastIndex--;
						keywordAfterReplace = keywordAfterReplace + ",";
					}
					else if(keywordBeforeReplace[keywordBeforeReplace.length-1]=='.'){
						regArray[cur].lastIndex--;
						keywordAfterReplace = keywordAfterReplace + ".";
					}
					afterReplace = afterReplace.replace(regArray[cur],keywordAfterReplace);
					regArray[cur].lastIndex  += (keywordAfterReplace.length-keywordBeforeReplace.length);
				}while(regArray[cur].lastIndex!=0)
			}
			editor.edit(editBuilder=> {
				var start = new vscode.Position(0,0);
				var end = new vscode.Position(editor.document.lineCount + 1, 0);
				editBuilder.replace(new vscode.Range(start, end), afterReplace);
			});
			var selectStart = new vscode.Position(0,0);
			var selectEnd = new vscode.Position(0,0);
			var select = new vscode.Selection(selectStart,selectEnd);
			editor.selections = editor.selections.map( function(){
				return select;
			},this);
			vscode.window.showInformationMessage('Finish replacing all keywords in current document.');
		});
		// var range = new vscode.Range(start,end);
		function provideCompletionItems(document, position) {
			const line = document.lineAt(position);
			// 只截取到光标位置为止，防止一些特殊情况
			const lineText = line.text.substring(0, position.character);
			// 简单匹配，只要当前光标前的字符串为`this.dependencies.`都自动带出所有的依赖
			var wordList = new Array();
			for (var curStr in jsonStr)
			{
				var word = jsonStr[curStr].ori;
				wordList.push(word);
			}
			for (var curStr in jsonStr)
			{
				var word = jsonStr[curStr].ori+"=>"+jsonStr[curStr].replace;
				wordList.push(word);
			}
			if(/(^|\s).*$/g.test(lineText)) {
				
				const dependencies = wordList;
				return dependencies.map(dep => {
					const item = new vscode.CompletionItem(dep, vscode.CompletionItemKind.Snippet);
					// vscode.CompletionItemKind 表示提示的类型
					if(dep.search("=>")!=-1){
						var list = dep.split("=>");
						item.insertText = list[1];
					}
					return item;
				})
			}
		}
		// /**
		//  * 光标选中当前自动补全item时触发动作，一般情况下无需处理
		//  * @param {*} item 
		//  * @param {*} token 
		//  */
		function resolveCompletionItem() {
			return null;
		}
		let autoCompletion = vscode.languages.registerCompletionItemProvider('markdown', {provideCompletionItems,resolveCompletionItem});
		
		context.subscriptions.push(selectKeyword);
		context.subscriptions.push(replaceKeyword);
		context.subscriptions.push(replaceAllKeyword);
		context.subscriptions.push(autoCompletion);
	// });
	// vscode = require('vscode');
	// vscode.window.showInformationMessage('Requesting the JSON file from network, please wait...');
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated	
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	

		
		// editor.edit(editBuilder=> {
		// 	for(var x = 0;x<sel.length;x++){
		// 		let afterReplace = document.getText(new vscode.Range(start,sel[x].end));
		// 		for (var curStr in jsonStr)
		// 		{
		// 			var regStr = '\\[?`?'+jsonStr[curStr].ori+'\\(?\\s*\\)?`?\\]?\\(?((\\s?\\{\\{\\s?\\S*\\s?\\}\\}\\s?)|(\\S*))\\)?';
		// 			var reg = new RegExp(regStr,"g");
		// 			var list =  reg.exec(afterReplace);
		// 			afterReplace = afterReplace.replace(reg, jsonStr[curStr].replace);
		// 		}
		// 		editBuilder.replace(sel[x], afterReplace);
		// 	}			
		// });
	
}

exports.activate = activate;


// function provideCompletionItems(document, position, token, context) {
// 	return new Promise((resolve, reject) => {
// 		const line = document.lineAt(position);
// 		var JsonConfigName = vscode.workspace.getConfiguration('jsonUrl').get('path');
// 		const json = require(JsonConfigName);
// 		// 只截取到光标位置为止，防止一些特殊情况
// 		const lineText = line.text.substring(0, position.character);
// 		var jsonStr = json.change;
// 		// 构建一个Snippet
// 		const item = new vscode.CompletionItem(`${res.pxValue} -> ${res.rem}`, vscode.CompletionItemKind.Snippet);
// 		// 指定要插入的新文本
// 		item.insertText = res.rem;
// 		return resolve([item]);

// 	});
// }






// this method is called when your extension is deactivated
function deactivate() {}


module.exports = {
	activate,
	deactivate
}
