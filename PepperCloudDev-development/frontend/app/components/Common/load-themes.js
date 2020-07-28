// LOAD THEMES
// -----------------------------------

const themeA = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-a.scss');
const themeB = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-b.scss');
const themeC = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-c.scss');
const themeD = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-d.scss');
const themeE = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-e.scss');
const themeF = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-f.scss');
const themeG = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-g.scss');
const themeH = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-h.scss');
const themeI = require('!raw-loader!sass-loader!../../assets/styles/themes/theme-i.scss');

export default () => {

    let styleTag;
    let defaultTheme = 'I';

    console.log("Loading themes..");
    let themeTag = document.getElementById("appthemes");
    if (!themeTag) {
        createStyle();
    }
    setTheme(defaultTheme);

    // $(document).on('click', '[data-load-theme]', function(e) {
    //     createStyle();
    //     //setTheme($(this).data('loadTheme'));
    //     setTheme(defaultTheme);
    //     console.log("Loading themes..");
    // });

    function setTheme(name) {
        switch (name) {
            case 'A':
                injectStylesheet(themeA);
                break;
            case 'B':
                injectStylesheet(themeB);
                break;
            case 'C':
                injectStylesheet(themeC);
                break;
            case 'D':
                injectStylesheet(themeD);
                break;
            case 'E':
                injectStylesheet(themeE);
                break;
            case 'F':
                injectStylesheet(themeF);
                break;
            case 'G':
                injectStylesheet(themeG);
                break;
            case 'H':
                injectStylesheet(themeH);
                break;
            case 'I':
                injectStylesheet(themeI);
                break;
        }
    }

    function createStyle() {
        // remove if exists
        var el = document.getElementById('appthemes');
        if (el)
            el.parentNode.removeChild(el);
        // create
        const head = document.head || document.getElementsByTagName('head')[0];
        styleTag = document.createElement('style');
        styleTag.type = 'text/css';
        styleTag.id = 'appthemes';
        head.appendChild(styleTag);
    }

    function injectStylesheet(css) {
        styleTag.innerHTML = css;
    }

}
