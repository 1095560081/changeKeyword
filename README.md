# link-completion README

![example](pic/example.gif)

## Keyboard Shortcut
- Select keywords: ctrl+1 
- Replace keywords: ctrl+2
- Global replacement: ctrl+3


## Parameters
- JSON file path(optional):
   - default value: keywords.json
1. json file like word2.json
2. Absolute path is recommended
3. "ori" in json file is the keywords you want to find
4. "replace" in json file is the word you want to replace
- Language(optional):    
   cn for Chinese and en for English.
   - default value: en


## Automatic Completion Setting

The following steps need to be done for enabling automatic completion in markdown:

1. Use **Command Palette** (Ctrl+Shift+P) which opens the language picker.
2. Run global command - **Preferences: Configure Language Specific Settings** (command id: workbench.action.configureLanguageBasedSettings)
3. Select the **markdown** language.
4. Add configuration to the inside setting file like following:
    ```json
    "[markdown]":  {
            "editor.quickSuggestions": true
        },
    ```
5. Enable automatic completion successfully.