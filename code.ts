// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for plugins. Code in this file has access to
// the *figma document* via the figma global object.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 450,
  height: 470,
  themeColors: true,
});

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

figma.ui.onmessage = (msg: {
  type: string
  collectionName: string,
  variables: { name: string, value: RGBA }[]
}) => {
  console.log('here')
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'saveVaraibles') {
    // This plugin creates rectangles on the screen.
    const { collectionName, variables } = msg;

    const figmaCollection = figma.variables.createVariableCollection(collectionName);

    console.log(figmaCollection);

    variables.forEach(variable => {
      console.log(variable);
      const { name, value } = variable;
      const figmaVariable = figma.variables.createVariable(name, figmaCollection, "COLOR");
      figmaVariable.setValueForMode(figmaCollection.defaultModeId, value);
    });

    figma.ui.postMessage('done');
  }
};
