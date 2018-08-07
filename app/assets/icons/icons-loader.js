let icons = [
    "adjust",
    "assets",
    "checkmark-circle",
    "chevron-down",
    "clippy",
    "clock",
    "cog",
    "cogs",
    "connect",
    "connected",
    "cross-circle",
    "dashboard",
    "deposit",
    "deposit-withdraw",
    "disconnected",
    "dollar",
    "dollar-green",
    "download",
    "excel",
    "eye",
    "eye-striked",
    "fi-star",
    "filter",
    "folder",
    "hamburger",
    "hamburger-x",
    "hourglass",
    "info-circle-o",
    "key",
    "list",
    "locked",
    "minus-circle",
    "news",
    "people",
    "photo-camera",
    "plus-circle",
    "power",
    "question-circle",
    "server",
    "settle",
    "share",
    "shuffle",
    "support",
    "text",
    "thumb-tack",
    "thumb-untack",
    "thumbs-up",
    "times",
    "trade",
    "transfer",
    "unlocked",
    "user",
    "warning",
    "withdraw",
    "zoom",
    "sign-msg",
    "pie-chart",
    "privacy",
    "explorer",
    "group",
    "create-user",
    "user-login",
    "network",
    "mining"
];

let iconsMap = {};
for (let i of icons) iconsMap[i] = require(`./${i}.svg`);

export default iconsMap;
