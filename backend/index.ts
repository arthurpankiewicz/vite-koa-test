// hatchify-app/server/index.ts
import Koa from "koa";
import { User as User } from "../schemas/user.js";
console.log("user", User);

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

(async () => {
  app.listen(3000, () => {
    console.log("Started on port 3000");
  });
})();
