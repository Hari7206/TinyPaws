import express , {type Request , type Response} from "express";
import catRoutes from "./routes/cat.routes.js";
import aiRoutes from "./routes/ai.routes.js"
import aiRecommendRoutes from "./routes/aiRecommend.routes.js"
import mcpRoutes from "./routes/test-mcp.routes.js"
const app = express();
app.use(express.json());



app.get("/", (req: Request, res: Response) => {
   res.send({
      success: true,
      message: "Welcome to the TinyPaws API"
   });
});
app.use("/api/cats", catRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/aiRecommend", aiRecommendRoutes);
app.use("/api/mcp", mcpRoutes);
export default app;