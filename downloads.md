# Downloads
<h2 id="OSNAME">Download</h2>
<p id="OSVERSION">Loading......</p>
<p id="EPHVERSION"></p>
<div id="downloadButtonContainer"></div>

You can go to [GitHub Releases](https://github.com/ResetPower/Epherome/releases) to find all versions.

## System Requirements

- Windows 7 and above
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
            osVersion = "Windows 7 and above";
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x64-setup.exe", "Download Installer(.exe)");
        } else if (userAgent.indexOf("mac") >= 0) {
            osName = "macOS";
            osVersion = "macOS High Sierra (10.13) and above";
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_x64.dmg", "Intel CPU Download(.dmg)");
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_x64.app.tar.gz", "Intel CPU Download(.app)")
        } else if (userAgent.indexOf("linux") >= 0) {
            osName = "Linux";
            osVersion = "Linux with webkit2gtk 4.0 (e.g. Ubuntu 18.04+)";
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_amd64.deb", ".deb Software Package");
            addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+version+"/Epherome_"+version+"_amd64.AppImage", ".AppImage Software Package");
        }
        document.getElementById("OSNAME").innerHTML = "Epherome " + osName + " Version";
        document.getElementById("OSVERSION").innerHTML = "System Requirements: " + osVersion;
        document.getElementById("EPHVERSION").innerHTML = "Newest Version: " + version;
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