# Downloads
<h2 id="Download">Download</h2>
<p id="OSVERSION">Loading......</p>
<p id="EPHVERSION"></p>
<div id="downloadButtonContainer"></div>

You can go to [GitHub Releases](https://github.com/ResetPower/Epherome/releases) to find all versions.

## System Requirements

- Windows 10 and above
- macOS 10.13 and above
- Linux with webkit2gtk 4.0 (e.g. Ubuntu 18.04+).

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
                    osVersion = "Windows 10 and above (Windows 7 users must compile from <a href='https://github.com/ResetPower/Epherome' target='_blank'>source</a> according to the <a href='https://tauri.app/v1/guides/building/windows#supporting-windows-7' target='_blank'>Tauri documentation</a>)";
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x86-setup.exe", "Download x86 Installer(.exe)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x64-setup.exe", "Download x64 Installer(.exe)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_arm64-setup.exe", "Download arm64 Installer(.exe)");
                } else if (userAgent.indexOf("mac") >= 0) {
                    osName = "macOS";
                    osVersion = "macOS High Sierra (10.13) and above";
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_universal.dmg", "Download Universal Installer Image(.dmg)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_universal.app.tar.gz", "Download Universal Software(.app)")
                } else if (userAgent.indexOf("linux") >= 0) {
                    osName = "Linux";
                    osVersion = "Linux with webkit2gtk 4.0 (e.g. Ubuntu 18.04+), Linux Arm64 is not supported yet.";
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_amd64.deb", "Download amd64 Software Package(.deb)");
                    this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_amd64.AppImage", "Download amd64 Common Software Package(.AppImage)");
                }
                document.getElementById("Download").innerHTML = "Epherome " + osName + " Version";
                document.getElementById("OSVERSION").innerHTML = "System Requirements: " + osVersion;
                document.getElementById("EPHVERSION").innerHTML = "Newest Version: " + version;
                if (osName == "Unknown") {
                    document.getElementById("Download").innerHTML = "Epherome";
                    document.getElementById("OSVERSION").innerHTML = "Epherome does not support the device you are using."
                    document.getElementById("EPHVERSION").innerHTML = null
                }
                if ((userAgent.indexOf("iphone") >= 0) || (userAgent.indexOf("android") >= 0)) {
                    document.getElementById("Download").innerHTML = "Epherome";
                    document.getElementById("OSVERSION").innerHTML = "Sorry, Epherome is not supported for mobile/tablet use.";
                    document.getElementById("EPHVERSION").innerHTML = "Visit the Github Release below or use your computer to access to download Epherome.";
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