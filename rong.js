const app  = require("./app.js");

const html = require("bel");
const css = require("sheetify");
const prefix = css`
  :host div {
    background-color: green;
    font-size:40px;
  }
`
const tree = html`
  <section class=${prefix}>
    <h1>My beautiful, centered title</h1>
    <div>this is a demo</div>
  </section>
`
const usertype =new app.UserType("dalong");

const detailinfo ={
    userName:usertype.userName,
    htmlDOM:tree
}
console.log(usertype.print())
document.documentElement.appendChild(detailinfo.htmlDOM);