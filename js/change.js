    function loadCSS() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        let cssFile = "default.css"; // Default CSS

        if (/android/i.test(userAgent)) {
            cssFile = "css/android.css"; // Android
        } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
            cssFile = "css/ios.css"; // iOS
        }

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = cssFile;
        document.head.appendChild(link);
    }

    loadCSS();

