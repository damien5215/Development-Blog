

var darkMode = false;

function lightDark() {

    if (darkMode) {
        document.querySelector("link[href='StyleSheetDark.css']").href = "StyleSheet1.css";
        darkMode = false;
    }
    else {
        document.querySelector("link[href='StyleSheet1.css']").href = "StyleSheetDark.css";
        darkMode = true;
    }

};