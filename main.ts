import user from "./User";
import app from "./app";
const userproxy ={
    name:"dalong",
    age:333
}
const usertype = new app.UserType("dddd");
const proxy =new user();
proxy.proxy(userproxy);
proxy.print2();
usertype.print();