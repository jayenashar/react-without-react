class Component {
}

const isString = (s) => typeof(s) === 'string' || s instanceof String;

class React {
    static createElement(componentClassOrTagName, attributesAsObject) {
        if (componentClassOrTagName.prototype instanceof Component)
            return new componentClassOrTagName().render();
        else if (isString(componentClassOrTagName))
            return ((element, attributesAsArrayOfArrays) => {
                attributesAsArrayOfArrays.map((attributeAsArray) => element.setAttribute(attributeAsArray[0].replace("className", "class"), attributeAsArray[1]));
                Array.prototype.slice.call(arguments, 2).map((elementOrText) => element.appendChild(isString(elementOrText) ? document.createTextNode(elementOrText) : elementOrText));
                return element;
            })(document.createElement(componentClassOrTagName), Object.entries(attributesAsObject));
    }
}

export {Component};
export default React;
