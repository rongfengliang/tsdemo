import log from "./log"
@log
export class UserType {

    appv:APPV;
    userName: string;
    constructor(name: string,appv ? :APPV) {
        this.userName = name;
        this.appv=appv;
    }
    print() {
        console.log(JSON.stringify(this.userName))
    }
}

export class AppVersion {

    appVersion: string;
    getVersion() {
        return this.appVersion;
    }

}
export enum APPV{
    FIRST,
    SECOND,
    THIRD
}
export default {UserType,AppVersion}