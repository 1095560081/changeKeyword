# link-completion README

<iframe height=498 width=510 src="pic/demo.mp4">

## Keyboard Shortcut
- Select keywords: ctrl+1 
- Replace keywords: ctrl+2
- Global replacement: ctrl+3


## Parameters
- JSON file path(optional):
   - default value: keywords.json
json file like word2.json
Absolute path is recommended
in json file
ori is the keywords you want to find
replace is the word you want to replace
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