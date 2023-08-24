chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: ["block_facebook"]
    });

    chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [
            {
                id: "block_facebook",
                priority: 1,
                action: {
                    type: "block"
                },
                condition: {
                    urlFilter: "*://facebook.com/*"
                }
            }
        ],
        removeRuleIds: []
    });
});
