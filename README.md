# link-completion README
   
## Keyboard Shortcut
- Select keywords: ctrl+1 
- Replace keywords: ctrl+2
- Global replacement: ctrl+3

## Parameters
- JSON file path(optional):    
   The JSON file will be gotten from URL - "https://dynamsoft.github.io/barcode-sdk-docs-dev/keywords.json" firstly. Only if the access was failed, would this manual setting value be used.
   - default value: keywords.json
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