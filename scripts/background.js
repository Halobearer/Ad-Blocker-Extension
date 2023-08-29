//Let's interfere some stuff bruh

chrome.runtime.onInstalled.addListener(() => {
    fetch(chrome.runtime.getURL('rules.json'))
        .then(response => response.json())
        .then(rules => {
            chrome.declarativeNetRequest.updateDynamicRules({
                addRules: rules,
                removeRuleIds: []
            });
        });
});