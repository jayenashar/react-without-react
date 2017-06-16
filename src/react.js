class Component {
    constructor(props) {
        this.props = props;
    }

    setState(state) {
        this.state = Object.assign(this.state, state);
        ((element) => element.replaceWith(this.render()))(this.__element);
    }
}

const attributeNames = {
    className: 'class',
    xLinkHref: 'xlink:href'
};

class React {
    static createElement(componentClassOrTagName, props) {
        if (componentClassOrTagName.prototype instanceof Component)
            return new componentClassOrTagName(props).render();
        else // if (typeof(componentClassOrTagName) === 'string' || componentClassOrTagName instanceof String)
            return ((element, propEntries) => {
                props.__self.__element = element;
                propEntries.map((propEntry) => {
                    (/**
                     * @param {string} name name of attribute
                     * @param {string|function} value value of attribute, or event handler
                     */
                        (name, value) => {
                        if (name in attributeNames)
                            name = attributeNames[name];
                        if (name.indexOf('on') === 0) {
                            element.addEventListener(name.slice(2).toLowerCase(), value);
                        } else {
                            if (name !== 'checked' || value)
                                element.setAttribute(name.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase()), value);
                        }
                    })(...propEntry);
                    return 1;
                });
                Array.prototype.slice.call(arguments, 2).map((elementOrText) => element.appendChild(elementOrText.nodeType ? elementOrText : document.createTextNode(elementOrText)));
                return element;
            })(document.createElement(componentClassOrTagName), Object.entries(props));
    }
}

export {Component};
export default React;
