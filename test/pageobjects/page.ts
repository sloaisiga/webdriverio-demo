export default class Page {
    title: string
    constructor() {
        this.title = 'ToolsQA'
    }

    open(path) {
        browser.url(path)
    }
}