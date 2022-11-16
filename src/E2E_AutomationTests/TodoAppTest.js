const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    await openBrowser();
    await goto("https://anushapalle.github.io/my-todo-app/");
    await focus(textBox('Add todo ...'))
    await write("taiko test automation");
    await focus(button('Add'));
    await press("Enter");
    await click({id:'deleteIcon'})
    await click({id:'dangerButton'})
    await closeBrowser();
})();