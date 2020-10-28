class Interrogations {

    checkUrlPath() {
        const url: string= browser.getUrl()
        return url;
    }
}

export default new Interrogations();