# XSS Vulnerabilities Experiments with React Development

This study was split into 5 different experiments.

## Experiments

### [Direct Insertion](/src/pages/plain-tag)

JSX syntax allows React to insert variable contents directly into code. For instance, a user's input in a text field can be stored in a state variable and injected into the page via JSX. The goal of this experiment is to determine if there's any treatment for the case a malicious user types valid HTML syntax in the text field.

### Insertion via property `dangerouslySetInnerHTML`

React defines a property called `dangerouslySetInnerHTML` which allows the developer direct access to DOM's `innerHTML` method. This method is the main gateway for Cross-Site Scripting attacks and here the goal is to understand the path an input goes until is indeed inserted into the DOM.

### Hyperlink's `href` property

One of the ways to deceive an unwarned visitor is to execute malicious JavaScript code after they click on a hyperlink. Hyperlinks are elements used in web pages to perform some action - mainly navigation between different pages. The goal of this experiment is to verify if React allows this way of executing arbitrary code.

### Malicious Code Injection via props

Props are one of the key features of JSX syntax in React. This concept allows an application built in these technologies to have code highly componentized, combinable, and reuseable. For instance, it is possible to make generic components behave differently based on props. The goal of this experiment is to verify if tampered props can allow an XSS attack to happen.

### Malicious CSS Injection via CSS-in-JS

The JavaScript-oriented development brought with it libraries such as `styled-components` and `emotion` which allow a developer to write CSS inside JavaScript. The goal of this experiment is to verify if this code pattern can expose a user to an XSS attack.