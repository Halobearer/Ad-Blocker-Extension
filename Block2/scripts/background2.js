chrome.webRequest.onBeforeRequest.addListener((details) => {
        return {cancel: true}
    }, {urls: adList},
    ["blocking"]
)