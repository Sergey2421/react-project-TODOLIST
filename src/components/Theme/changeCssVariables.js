export const changeCssVariables = theme => {
    const root = document.querySelector(':root');

    switch (theme) {
        case 'dark': {
            root.style.setProperty('--display-dark', 'none');
            root.style.setProperty('--display-light', 'inline-block');

            break;
        }
        case 'light': {
            root.style.setProperty('--display-dark', 'inline-block');
            root.style.setProperty('--display-light', 'none');
            break;
        }
        default: {
            root.style.setProperty('--display-dark', 'inline-block');
            root.style.setProperty('--display-light', 'none');
            break;
        }
    }

    const CssConstants = ['background-color', 'font-color'];

    CssConstants.forEach(el => {
        root.style.setProperty(`--${el}`, `var(--${el}-${theme})`);
    });
}