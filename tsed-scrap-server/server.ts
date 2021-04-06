import { Configuration, Inject, PlatformApplication } from "@tsed/common";
import bodyParser from "body-parser";
// import compress from "compression";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from 'cors';

const rootDir = __dirname;

@Configuration({
    rootDir,
    acceptMimes: ["application/json"],
    serveStatic: {
        "/": `${rootDir}/../build`
    }
})
export class Server {
    @Inject()
    app: PlatformApplication;

    @Configuration()
    settings: Configuration;

    /**
     * This method let you configure the express middleware required by your application to works.
     * @returns {Server}
     */
    public $beforeRoutesInit(): void | Promise<any> {
        this.app
            .use(cors())
            .use(cookieParser())
            // .use(compress({}))
            .use(methodOverride())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
                extended: true
            }));
    }
}
