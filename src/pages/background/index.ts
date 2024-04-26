import browser from 'webextension-polyfill';

browser.runtime.onInstalled.addListener(async (details) => {
    if (details.reason === "install") {
        console.log('installed!');
        // 安装成功, 未来通过次弹出新手引导等信息
        // console.log("安装成功");
    } else if (details.reason === "update") {
        // 更新成功, 需要弹出更新成功后的弹出框
        const localVersion = browser.runtime.getManifest().version;
        if (localVersion !== details.previousVersion) {
            console.log(`updated to ${localVersion} from:${details.previousVersion}`);
        }
    }
    await browser.runtime.openOptionsPage();
});
