class Component {
    setState(state) {
        this.state = Object.assign(this.state, state);
        ((element) => element.replaceWith(this.render()))(this.__element);
    }
}

const attributeNames = {
    className: 'class',
    strokeMiterlimit: 'stroke-miterlimit',
    vectorEffect: 'vector-effect',
    xLinkHref: 'xlink:href'
};

class React {
    static createElement(componentClassOrTagName, attributesAsObject) {
        if (componentClassOrTagName.prototype instanceof Component)
            return new componentClassOrTagName().render();
        else // if (typeof(componentClassOrTagName) === 'string' || componentClassOrTagName instanceof String)
            return ((element, attributesAsArrayOfArrays) => {
                attributesAsObject.__self.__element = element;
                attributesAsArrayOfArrays.map((attributeAsArray) => {
                    ((name, value) => {
                        if (name in attributeNames)
                            name = attributeNames[name];
                        if (name.indexOf('on') === 0) {
                            element.addEventListener(name.slice(2).toLowerCase(), value);
                        } else {
                            element.setAttribute(name, value);
                        }
                    })(...attributeAsArray);
                    return 1;
                });
                Array.prototype.slice.call(arguments, 2).map((elementOrText) => element.appendChild(elementOrText.nodeType ? elementOrText : document.createTextNode(elementOrText)));
                return element;
            })(document.createElement(componentClassOrTagName), Object.entries(attributesAsObject));
    }
}

export {Component};
export default React;
