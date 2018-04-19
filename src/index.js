import Snabbdom from "snabbdom-pragma";
const snabbdom = require("snabbdom");

const patch = snabbdom.init([
  require("snabbdom/modules/class").default, // makes it easy to toggle classes
  require("snabbdom/modules/props").default, // for setting properties on DOM elements
  require("snabbdom/modules/style").default, // handles styling on elements with support for animations
  require("snabbdom/modules/eventlisteners").default // attaches event listeners
]);

patch(
  document.body,
  <div>
    <h2> {`The time is: ${new Date().toLocaleTimeString()}`} </h2>
  </div>
);
