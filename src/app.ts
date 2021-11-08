import * as express from "express"

class app{
    public express: express.Application;

    constructor(){
        this.express = express();
        this.setMiddleware();
        this.connectToDB();
        this.setRouts();
        this.catchError();

    }

    private setMiddleware(): void {

    }
    private setRouts():void{

    }

    private async connectToDB(): Promise<void>{

    }
    private catchError():void {

    }

}