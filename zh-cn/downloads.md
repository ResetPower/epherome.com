# 下载
<h2 id="Download">下载地址</h2>
<p id="OSVERSION">加载中……</p>
<p id="EPHVERSION"></p>
<div id="downloadButtonContainer"></div>

前往 [GitHub Releases](https://github.com/ResetPower/Epherome/releases) 以取得全部版本的下载链接。

## 操作系统要求

- Windows 10 或以上版本
- macOS 10.13 或以上版本
- 含有 webkit2gtk 4.0 的 Linux (如 Ubuntu 18.04+)

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
    export default {
        mounted() {
        fetch('https://api.github.com/repos/ResetPower/Epherome/releases')
            .then(response => response.json())
            .then(data => {
                const htmlUrl = data[0].html_url;
                const version = htmlUrl.match(/tag\/(.*)$/)[1];
                this.checkOperatingSystem(version);
            });
        },
        methods: {
            checkOperatingSystem(version) {
                document.getElementById("downloadButtonContainer").innerHTML = null;
                var osName = "Unknown";
                var osVersion = "Unknown";
                var userAgent = navigator.userAgent.toLowerCase();
                if (userAgent.indexOf("win") >= 0) {
                    osName = "Windows";
                    osVersion = "Windows 10 及以上（Windows 7 用户请自行从 <a href='https://github.com/ResetPower/Epherome/' target='_blank'>源代码</a> 参照 <a href='https://tauri.app/zh-cn/v1/guides/building/windows/#supporting-windows-7' target='_blank'>Tauri 官方文档</a> 进行编译使用）";
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x86-setup.exe", "下载 x86 安装程序(.exe)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x64-setup.exe", "下载 x64 安装程序(.exe)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_arm64-setup.exe", "下载 arm64 安装程序(.exe)");
                } else if (userAgent.indexOf("mac") >= 0) {
                    osName = "macOS";
                    osVersion = "macOS High Sierra (10.13) 及以上";
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_universal.dmg", "下载 Universal 安装映像(.dmg)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_universal.app.tar.gz", "下载 Universal 软件(.app)")
                } else if (userAgent.indexOf("linux") >= 0) {
                    osName = "Linux";
                    osVersion = "含有webkit2gtk 4.0的Linux (如 Ubuntu 18.04+)，暂未支持Linux Arm64";
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/epherome_"+version+"_amd64.deb", "下载 amd64 软件包(.deb)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/epherome_"+version+"_amd64.AppImage", "下载 amd64 通用软件包(.AppImage)");
                }
                document.getElementById("Download").innerHTML = "Epherome " + osName + "版";
                document.getElementById("OSVERSION").innerHTML = "系统要求：" + osVersion;
                document.getElementById("EPHVERSION").innerHTML = "当前最新版本：" + version;
                if (osName == "Unknown") {
                    document.getElementById("Download").innerHTML = "Epherome";
                    document.getElementById("OSVERSION").innerHTML = "Epherome 不支持您使用的设备"
                    document.getElementById("EPHVERSION").innerHTML = null
                }
                if ((userAgent.indexOf("iphone") >= 0) || (userAgent.indexOf("android") >= 0)) {
                    document.getElementById("Download").innerHTML = "Epherome";
                    document.getElementById("OSVERSION").innerHTML = "很抱歉，Epherome 不支持手机/平板使用";
                    document.getElementById("EPHVERSION").innerHTML = "若要下载，请访问下方 Github Release 界面或使用电脑访问";
                    document.getElementById("downloadButtonContainer").innerHTML = null
                }
            },
            addDownloadButton(downloadUrl, buttonText) {
                var container = document.getElementById("downloadButtonContainer");
                var buttonContainer = document.createElement("div");
                buttonContainer.className = "button-container";
                var button = document.createElement("a");
                button.innerHTML = buttonText;
                button.setAttribute("href",downloadUrl)
                buttonContainer.appendChild(button);
                container.appendChild(buttonContainer);
            }
        }
    }
</script>