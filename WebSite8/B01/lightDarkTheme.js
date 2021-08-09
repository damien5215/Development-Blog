var darkMode = false;

let light = "StyleSheet1.css";
let dark = "StyleSheetDark.css";

function lightDark() {

    if (darkMode) {
        document.querySelector(`link[href='${dark}']`).href = light;
        document.getElementById('changeTheme').innerHTML = "LIGHT THEME";
        darkMode = false;
    }
    else {
        document.querySelector(`link[href='${light}']`).href = dark;
        document.getElementById('changeTheme').innerHTML = "DARK THEME";
        darkMode = true;
    }

};

//console.log(`link[href='${dark}']`);
