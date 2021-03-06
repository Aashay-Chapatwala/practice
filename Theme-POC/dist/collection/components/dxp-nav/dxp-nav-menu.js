import { BaseComponent } from '@mc-dxp/dxp-ui-base-component';
import dxp from '@mc-dxp/dxp-ui-core';
import { h } from "@stencil/core";
import CommonUtility from './overlay';
const CTA_LIST = 'dxp-cta-list';
const SUB_NAV_ITEM_CLASS = '.sub-nav-item';
/** dxp-nav */
export class NavMenu {
    /** watch for navigation data change  */
    navGroupHandler() {
        this.base.createNestedMarkup(this.navGroupContainer, 'dxp-nav-item-content', this.child);
    }
    /** watch for navigation data change  */
    quickLinksHandler() {
        if (this.quickLinks.length > 0) {
            for (const item of this.quickLinks) {
                if (item.quickLinkDescription) {
                    item['title-text'] = item.quickLinkDescription;
                    item['orientation'] = 'vertical';
                    for (const prop of item.ctaList) {
                        if (prop.title) {
                            prop['text'] = prop.title;
                            prop['type'] = 'link';
                            prop['src'] = prop.image;
                            prop['href'] = prop.link;
                            prop['alt'] = prop.imageAltText;
                            prop['icon-align'] = 'left';
                        }
                    }
                }
            }
            this.quickLinks[0].titleStyle = 'dxp-title-sm';
            this.quickLinks[0].orientation = 'vertical';
        }
        this.base.createNestedMarkup(this.quickLinksContainer, CTA_LIST, this.quickLinks);
    }
    /** actions to be performed prior to component loading */
    componentWillLoad() {
        this.base = new BaseComponent(this, dxp);
        this.utility = new CommonUtility();
    }
    /** actions to be performed prior to component loading */
    async componentDidLoad() {
        if (this.quickLinks) {
            this.quickLinksHandler();
        }
        if (this.child) {
            this.navGroupHandler();
        }
        await this.defaultActionOnFocus();
    }
    /** actions to be performed after component loading */
    async componentDidUpdate() {
        // On addition of data through API
        await this.defaultActionOnFocus();
    }
    /** default actions */
    async defaultActionOnFocus() {
        const primaryMenuList = [];
        const navListItem = this.element.parentElement.querySelectorAll('dxp-nav-menu');
        const ctaList = this.element.querySelector(CTA_LIST);
        let dxpCtas;
        if (ctaList) {
            await ctaList.componentOnReady().then(res => {
                if (res) {
                    // hide dxp-cta-list title for md and small devices
                    const ctaListTitle = res ? res.querySelector('p') : res.querySelector('p');
                    ctaListTitle.classList.add('dxp-hidden-md-down');
                    ctaListTitle.classList.add('dxp-lg-block');
                    dxpCtas = res.querySelector('dxp-cta') ? res.querySelectorAll('dxp-cta') : res.querySelectorAll('dxp-cta');
                }
            });
            // Preventing by-default behaviour of selection feature with tabindex="-1".
            if (dxpCtas && dxpCtas.length) {
                for (const dxpCta of dxpCtas) {
                    await dxpCta.componentOnReady().then(res => {
                        const link = res ? res.querySelector('a') : res.querySelector('a');
                        link.setAttribute('tabindex', '-1');
                    });
                }
            }
        }
        for (const item of navListItem) {
            const navItem = item.querySelector('li.nav-item-li');
            primaryMenuList.push(navItem);
        }
        this.utility.setPosNSize(primaryMenuList);
    }
    /** nav click - opens overlay */
    parentNavHandler() {
        const listItem = this.element.querySelector('li') ? this.element.querySelector('li') : this.element.querySelector('li');
        if (this.overlayBgImage) {
            this.utility.openOverlay(listItem, this.overlayBgImage);
        }
        else {
            this.utility.openOverlay(listItem);
        }
        this.navHeaderClicked.emit(listItem);
    }
    /** Prevent scrolling the web page with space-bar and all up/down/left/right arrow keys */
    preventDefaultBehaviour(keycode, e) {
        const preventDefaultKyes = [32, 37, 38, 39, 40];
        if (preventDefaultKyes.indexOf(keycode) !== -1) {
            e.preventDefault();
        }
    }
    /** method to focus input element  */
    focusElement(elem) {
        elem.focus();
    }
    /**  click event handler  */
    clickEventHandler(event) {
        // click listener for routing events on anchor tag
        this.base.routingEventListener(event);
        // show and hide overlay
        this.childClickEvent.emit(event.target);
    }
    /** show and hide overlay */
    showHideMenuWithKeyDown(e) {
        const target = e.target ? e.composedPath()[0] : e.target;
        const isNavitem = target.classList.contains('nav-item');
        const parentDxpNav = target.getRootNode && target.getRootNode().host ? target.getRootNode().host.closest('dxp-nav') : target.closest('dxp-nav');
        const closeIcon = parentDxpNav && parentDxpNav ? parentDxpNav.querySelector('.dxp-icon-close')
            : parentDxpNav && parentDxpNav.querySelector('.dxp-icon-close');
        const ariaExpandedNavItem = target.getAttribute('aria-expanded');
        const dxpCtaList = this.element.querySelector(CTA_LIST);
        const parentDxpCta = target.closest('dxp-cta');
        const nextElmDxpCta = (parentDxpCta && parentDxpCta.nextElementSibling)
            || (target.getRootNode && target.getRootNode().host && target.getRootNode().host.nodeName === 'DXP-CTA' && target.getRootNode().host.nextElementSibling);
        const prevElmDxpCta = (parentDxpCta && parentDxpCta.previousElementSibling)
            || (target.getRootNode && target.getRootNode().host && target.getRootNode().host.nodeName === 'DXP-CTA') && target.getRootNode().host.previousElementSibling;
        const lastElmDxpCta = (parentDxpCta && !parentDxpCta.nextElementSibling)
            || (target.getRootNode && target.getRootNode().host && target.getRootNode().host.nodeName === 'DXP-CTA' && !target.getRootNode().host.nextElementSibling);
        const isSubNavItem = target.classList.contains('sub-nav-item');
        const subNavItem = this.element.querySelector(SUB_NAV_ITEM_CLASS);
        const parentDxpNavItemContent = target.closest('dxp-nav-item-content');
        const nextDxpNavItemContent = parentDxpNavItemContent && parentDxpNavItemContent.nextElementSibling;
        const prevDxpNavItemContent = parentDxpNavItemContent && parentDxpNavItemContent.previousElementSibling;
        const keycode = e.keyCode;
        const isCta = target.closest('.dxp-cta');
        // Prevent scrolling the web page with space-bar and all up/down/left/right arrow keys
        this.preventDefaultBehaviour(keycode, e);
        if (isNavitem && (keycode === 13 || keycode === 32)) {
            this.parentNavHandler();
        }
        // If tab key pressed on Quick link : Hide current expanded menus and select next menu item (Level one)
        if (keycode === 9 && ((target.getRootNode && target.getRootNode.host && target.getRootNode().host.nodeName === 'DXP-CTA') || parentDxpCta)) {
            this.parentNavHandler();
            return;
        }
        // If tab key pressed on Sub menu item link: Hide current expanded menus and select next menu item (Level one)
        if ((isCta || isSubNavItem) && keycode === 9) {
            this.parentNavHandler();
        }
        // If tab key pressed on main menu (Level 1): Hide current expanded menus and select next menu item (Level one)
        if ((isNavitem) && ariaExpandedNavItem === 'true' && (keycode === 9 || keycode === 27)) {
            this.parentNavHandler();
        }
        // Select first link of Quick link OR Sub menu item
        if (isNavitem && ariaExpandedNavItem === 'true' && (keycode === 40 || keycode === 38)) {
            let dxpCta;
            let link;
            if (dxpCtaList) {
                dxpCta = dxpCtaList.querySelector('dxp-cta') ? dxpCtaList.querySelector('dxp-cta') : dxpCtaList.querySelector('dxp-cta');
                link = dxpCta ? dxpCta.querySelector('a') : dxpCta.querySelector('a');
            }
            // Select first link of Quick link
            if (link) {
                this.focusElement(link);
                return;
            }
            // Select first link of Sub link
            if (subNavItem) {
                this.focusElement(subNavItem);
            }
        }
        // Navigate through quick links (Down arrow)
        if (keycode === 40 && nextElmDxpCta) {
            const link = nextElmDxpCta ? nextElmDxpCta.querySelector('a') : nextElmDxpCta.querySelector('a');
            if (link) {
                this.focusElement(link);
                return;
            }
        }
        // Navigate through quick links (Up arrow)
        if (keycode === 38 && prevElmDxpCta) {
            let link;
            if (prevElmDxpCta) {
                link = prevElmDxpCta ? prevElmDxpCta.querySelector('a') : prevElmDxpCta.querySelector('a');
            }
            if (link) {
                this.focusElement(link);
                return;
            }
        }
        // Select first link of sub menus from quick link OR close button
        if (lastElmDxpCta && keycode === 40) {
            const currentSubNavItem = this.subNavChildContainer.querySelector(SUB_NAV_ITEM_CLASS);
            // Sub menu first link
            if (currentSubNavItem) {
                this.focusElement(currentSubNavItem);
                return;
            }
            // Expanded menu close button
            if (parentDxpNav) {
                this.focusElement(closeIcon);
            }
        }
        // Navigate through sub menus items (Down arrow)
        if (target && isSubNavItem && nextDxpNavItemContent && keycode === 40) {
            const currentSubNavItem = nextDxpNavItemContent.querySelector(SUB_NAV_ITEM_CLASS);
            if (currentSubNavItem) {
                this.focusElement(currentSubNavItem);
            }
        }
        // Navigate through sub menus items (Up arrow)
        if (target && isSubNavItem && prevDxpNavItemContent && keycode === 38) {
            const currentSubNavItem = prevDxpNavItemContent.querySelector(SUB_NAV_ITEM_CLASS);
            if (currentSubNavItem) {
                this.focusElement(currentSubNavItem);
            }
        }
        // Select close button to close the expanded nav
        if (target && isSubNavItem && !nextDxpNavItemContent && keycode === 40) {
            this.focusElement(closeIcon);
        }
        // Select last link of quick link form sub menu item
        if (target && isSubNavItem && !prevDxpNavItemContent && keycode === 38) {
            if (this.subNavChildContainer) {
                const currentDxpCtaList = this.subNavChildContainer.querySelector(CTA_LIST);
                const dxpCta = currentDxpCtaList && currentDxpCtaList.querySelector('dxp-cta') ?
                    currentDxpCtaList.querySelectorAll('dxp-cta')
                    :
                        currentDxpCtaList.querySelectorAll('dxp-cta');
                const link = dxpCta && dxpCta[dxpCta.length - 1] ?
                    dxpCta[dxpCta.length - 1].querySelector('a')
                    :
                        dxpCta && dxpCta[dxpCta.length - 1].querySelector('a');
                if (link) {
                    this.focusElement(link);
                }
            }
        }
        // expand second level menu items
        if (isNavitem && ariaExpandedNavItem !== 'true' && (keycode === 40 || keycode === 38)) {
            this.parentNavHandler();
        }
    }
    /** Render the nav */
    render() {
        dxp.log.debug(`in dxp-nav-menu render() : ${process.env.MODE}`);
        const styles = [
            h("link", { rel: "stylesheet", href: `` }),
            [this.theme && h("link", { rel: "stylesheet", href: `` })],
            [this.theme && h("link", { rel: "stylesheet", href: `${dxp.config.get('DXP_STYLE_BASE_URL')}/themes/${this.theme}/dxp-nav.min.css` })]
        ];
        return (h("li", { class: `nav-item-li ${this.base.componentClass()}`, dir: this.dir, "data-theme": this.theme, role: "menu" },
            styles,
            h("span", { class: "nav-item h5", tabindex: "0", onClick: () => { this.parentNavHandler(); }, role: "menuitem", "aria-haspopup": "true", "aria-label": this.accessibilityText ? this.accessibilityText : this.linkTitle }, this.navigationTitle),
            h("div", { class: "sub-nav-child-container", ref: el => this.subNavChildContainer = el },
                h("div", { class: "quick-links-container dxp-col-lg-3", ref: el => this.quickLinksContainer = el },
                    h("slot", null),
                    "\u00A0"),
                this.child &&
                    h("div", { ref: el => this.groupContainer = el, class: "group-container dxp-col-lg-4 dxp-col-offset-lg-1" },
                        h("dxp-nav-item-container", null,
                            h("div", { class: "dxp-scrollable-container" },
                                h("div", { class: "dxp-scrollable" },
                                    h("ul", { ref: el => this.navGroupContainer = el },
                                        h("slot", null)))))),
                !this.child &&
                    h("div", { ref: el => this.groupContainer = el, class: "group-container dxp-col-lg-4 dxp-col-offset-lg-1" },
                        h("div", { class: "dxp-scrollable-container" },
                            h("div", { class: "dxp-scrollable" },
                                h("ul", null,
                                    h("slot", { name: "group-content" }))))))));
    }
    static get is() { return "dxp-nav-menu"; }
    static get originalStyleUrls() { return {
        "$": ["dxp-nav-menu.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["dxp-nav-menu.css"]
    }; }
    static get properties() { return {
        "accessibilityText": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Accessibility. Screen readers will read this."
            },
            "attribute": "accessibility-text",
            "reflect": false
        },
        "linkTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "title will display in browser"
            },
            "attribute": "link-title",
            "reflect": false
        },
        "overlayBgImage": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "background image for menu container"
            },
            "attribute": "overlay-bg-image",
            "reflect": false
        },
        "navigationTitle": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "title will display in browser"
            },
            "attribute": "navigation-title",
            "reflect": false
        },
        "child": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "group container(secondary navigation)"
            },
            "attribute": "child",
            "reflect": false
        },
        "quickLinks": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Listener that looks for quick link items object to be assigned/changed externally"
            },
            "attribute": "quick-links",
            "reflect": false
        }
    }; }
    static get states() { return {
        "dir": {},
        "locale": {},
        "theme": {}
    }; }
    static get events() { return [{
            "method": "navHeaderClicked",
            "name": "navHeaderClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "if search term changed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }, {
            "method": "childClickEvent",
            "name": "childClickEvent",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "if search term changed"
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get elementRef() { return "element"; }
    static get watchers() { return [{
            "propName": "child",
            "methodName": "navGroupHandler"
        }, {
            "propName": "quickLinks",
            "methodName": "quickLinksHandler"
        }]; }
    static get listeners() { return [{
            "name": "click",
            "method": "clickEventHandler",
            "target": undefined,
            "capture": true,
            "passive": false
        }, {
            "name": "keydown",
            "method": "showHideMenuWithKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
