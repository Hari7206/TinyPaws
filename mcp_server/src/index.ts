import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import { getAllCatsTool, recommendCatsTool } from "./tools/recommendCats.tool.ts";

const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-app/1.0";

const server= new McpServer({ 
    name: "weather-app",
    version: "1.0",
})

server.registerTool("recommend_cats", {
    title: "Recommend Cats",
    description: "Recommends a best cats breed based on user preferences for kids and apartment friendliness.",
    inputSchema: z.object({
        kidsFriendly: z.boolean(),
        apartmentFriendly: z.boolean()
    })
},
async ({kidsFriendly, apartmentFriendly}) => {
    const result = await recommendCatsTool(kidsFriendly, apartmentFriendly);
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(result)
            }
        ]
    };
}
)


server.registerTool("get_all_cats", {
    title: "Get All Cats",
    description: "Retrieves a list of all available cat breeds.",
},
async () => {
    const result = await getAllCatsTool();
    return {
        content: [
            {
                type: "text",
                text: JSON.stringify(result)
            }
        ]
    };
}
)






const transporter = new StdioServerTransport();

await server.connect(transporter);


console.log("Starting MCP server...");
