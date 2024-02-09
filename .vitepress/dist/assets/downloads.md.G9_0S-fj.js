import{_ as d,c as r,o as s,V as l}from"./chunks/framework.GMzI5H4W.js";const i={mounted(){fetch("https://api.github.com/repos/ResetPower/Epherome/releases").then(e=>e.json()).then(e=>{const n=e[0].html_url.match(/tag\/(.*)$/)[1];this.checkOperatingSystem(n)})},methods:{checkOperatingSystem(e){document.getElementById("downloadButtonContainer").innerHTML=null;var o="Unknown",n="Unknown",t=navigator.userAgent.toLowerCase();t.indexOf("win")>=0?(o="Windows",n="Windows 10 and above (Windows 7 users must compile from <a href='https://github.com/ResetPower/Epherome' target='_blank'>source</a> according to the <a href='https://tauri.app/v1/guides/building/windows#supporting-windows-7' target='_blank'>Tauri documentation</a>)",this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_"+e+"_x86-setup.exe","Download x86 Installer(.exe)"),this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_"+e+"_x64-setup.exe","Download x64 Installer(.exe)"),this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_"+e+"_arm64-setup.exe","Download arm64 Installer(.exe)")):t.indexOf("mac")>=0?(o="macOS",n="macOS High Sierra (10.13) and above",this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_"+e+"_universal.dmg","Download Universal Installer Image(.dmg)"),this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_universal.app.tar.gz","Download Universal Software(.app)")):t.indexOf("linux")>=0&&(o="Linux",n="Linux with webkit2gtk 4.0 (e.g. Ubuntu 18.04+), Linux Arm64 is not supported yet.",this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_"+e+"_amd64.deb","Download amd64 Software Package(.deb)"),this.addDownloadButton("https://github.com/ResetPower/Epherome/releases/download/"+e+"/Epherome_"+e+"_amd64.AppImage","Download amd64 Common Software Package(.AppImage)")),document.getElementById("Download").innerHTML="Epherome "+o+" Version",document.getElementById("OSVERSION").innerHTML="System Requirements: "+n,document.getElementById("EPHVERSION").innerHTML="Newest Version: "+e,o=="Unknown"&&(document.getElementById("Download").innerHTML="Epherome",document.getElementById("OSVERSION").innerHTML="Epherome does not support the device you are using.",document.getElementById("EPHVERSION").innerHTML=null),(t.indexOf("iphone")>=0||t.indexOf("android")>=0)&&(document.getElementById("Download").innerHTML="Epherome",document.getElementById("OSVERSION").innerHTML="Sorry, Epherome is not supported for mobile/tablet use.",document.getElementById("EPHVERSION").innerHTML="Visit the Github Release below or use your computer to access to download Epherome.",document.getElementById("downloadButtonContainer").innerHTML=null)},addDownloadButton(e,o){var n=document.getElementById("downloadButtonContainer"),t=document.createElement("div");t.className="button-container";var a=document.createElement("a");a.innerHTML=o,a.setAttribute("href",e),t.appendChild(a),n.appendChild(t)}}},w=JSON.parse('{"title":"Downloads","description":"","frontmatter":{},"headers":[],"relativePath":"downloads.md","filePath":"downloads.md"}'),m=l('<h1 id="downloads" tabindex="-1">Downloads <a class="header-anchor" href="#downloads" aria-label="Permalink to &quot;Downloads&quot;">​</a></h1><h2 id="Download">Download</h2><p id="OSVERSION">Loading......</p><p id="EPHVERSION"></p><div id="downloadButtonContainer"></div><p>You can go to <a href="https://github.com/ResetPower/Epherome/releases" target="_blank" rel="noreferrer">GitHub Releases</a> to find all versions.</p><h2 id="system-requirements" tabindex="-1">System Requirements <a class="header-anchor" href="#system-requirements" aria-label="Permalink to &quot;System Requirements&quot;">​</a></h2><ul><li>Windows 10 and above</li><li>macOS 10.13 and above</li><li>Linux with webkit2gtk 4.0 (e.g. Ubuntu 18.04+).</li></ul>',8),u=[m];function h(e,o,n,t,a,p){return s(),r("div",null,u)}const g=d(i,[["render",h]]);export{w as __pageData,g as default};