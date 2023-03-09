export class Navbar {
    constructor () {
        this._menuHamburger = document.querySelector('.menu__hamburger');
        this._options = document.querySelector('.navbar__options-list--column');

        this._menuHamburgerEventListener();
    }

    _menuHamburgerEventListener () {
        this._menuHamburger.addEventListener('click', (event) => {
            this._toggleMenu();
        })
    }

    _toggleMenu() {
        if (this._options.clientHeight === 0) {
            this._options.style.height = "240px";
            return;
        }
        this._options.style.height = "0px";
    }
}
