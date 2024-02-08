# 下载
<h2 id="OSNAME">下载地址</h2>
<p id="OSVERSION">加载中……</p>
<p id="EPHVERSION"></p>
<div id="downloadButtonContainer"></div>

前往 [GitHub Releases](https://github.com/ResetPower/Epherome/releases) 以取得全部版本的下载链接。

## 操作系统要求

- Windows 7 或以上版本
- macOS 10.13 或以上版本
- 含有webkit2gtk 4.0的Linux (如 Ubuntu 18.04+)

<style>
    .downloadbutton {
        padding: 10px 20px;
        font-size: 18px;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>

<script module>
    fetch('https://api.github.com/repos/ResetPower/Epherome/releases')
        .then(response => response.json())
        .then(data => {
            const htmlUrl = data[0].html_url;
            const version = htmlUrl.match(/tag\/(.*)$/)[1];
            checkOperatingSystem(version);
        });
    function checkOperatingSystem(version) {
        var osName = "Unknown";
        var osVersion = "Unknown";
        var userAgent = navigator.userAgent.toLowerCase();
        if (userAgent.indexOf("win") >= 0) {
            osName = "Windows";
            osVersion = "Windows 7 及以上";
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x64-setup.exe", "下载安装程序<br \>.exe");
        } else if (userAgent.indexOf("mac") >= 0) {
            osName = "macOS";
            osVersion = "macOS High Sierra (10.13) 及以上";
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x64.dmg", "Intel CPU下载(.dmg)");
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_x64.app.tar.gz", "Intel CPU下载(.app)")
        } else if (userAgent.indexOf("linux") >= 0) {
            osName = "Linux";
            osVersion = "含有webkit2gtk 4.0的Linux (如 Ubuntu 18.04+)";
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_amd64.deb", ".deb软件包");
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_amd64.AppImage", ".AppImage软件包");
        }
        document.getElementById("OSNAME").innerHTML = "Epherome " + osName + "版";
        document.getElementById("OSVERSION").innerHTML = "系统要求：" + osVersion;
        document.getElementById("EPHVERSION").innerHTML = "当前最新版本：" + version;
    }
    function addDownloadButton(downloadUrl, buttonText) {
        var container = document.getElementById("downloadButtonContainer");
        var buttonContainer = document.createElement("div");
        buttonContainer.className = "button-container";
        var button = document.createElement("a");
        button.innerHTML = buttonText;
        button.setAttribute("href",downloadUrl)
        buttonContainer.appendChild(button);
        container.appendChild(buttonContainer);
    }
</script>