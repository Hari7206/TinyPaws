import express , {type Request , type Response} from "express";
import catRoutes from "./routes/cat.routes.js";

const app = express();
app.use(express.json());





app.get("/", (req: Request, res: Response) => {
   res.send({
    success: true,
    message: "Welcome to the TinyPaws API"
   });
});
app.use("/api/cats", catRoutes);
export default app;