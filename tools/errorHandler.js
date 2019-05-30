
const errorClass = content => `
  body:before {
    white-space: pre;
    font-size: 20px;
    color: white;
    background-color: red;
    padding: 40px;
    font-family: monospace;
    display:block;
    content: "${content}";
  }`;

const errorHandler = content => errorClass(content);


export default errorHandler;
