function isString(string) {
    return typeof(string) === 'string' || string instanceof String;
}

function isComponentClass(componentClass) {
    return componentClass.prototype instanceof Component;
}

function createNode(elementOrString) {
    if (isString(elementOrString))
    // if it's a string, we need to create a node
        return document.createTextNode(elementOrString);
    else
    // if it's an element, then it's already a node
        return elementOrString;
}


function createElement(tagName, attributesObject, children) {
    const element = document.createElement(tagName);
    const attributes = Object.entries(attributesObject);

    attributes.forEach(setAttribute);
    children.map(createNode).forEach(element.appendChild.bind(element));

    return element;

    function setAttribute(attribute) {
        // here we replace the react names for HTML attributes while setting the attribute
        let name = attribute[0].replace("className", "class");
        let value = attribute[1];
        element.setAttribute(name, value);
    }
}

class React {
    static createElement(componentClassOrTagName, attributesObject) {
        if (isComponentClass(componentClassOrTagName)) {
            // if it's a component, render the component
            return new componentClassOrTagName().render();
        } else if (isString(componentClassOrTagName)) {
            // if it's a string, then create an element
            const children = [].slice.call(arguments, 2);
            return createElement(componentClassOrTagName, attributesObject, children);
        } else {
            throw new TypeError("Don't know how to create element from " + componentClassOrTagName);
        }
    }
}

class Component {
}

export default React;
export {Component};
