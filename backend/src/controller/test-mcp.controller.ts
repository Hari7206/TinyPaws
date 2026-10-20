import { getMcpClient } from  '../services/mcp.service.js'
import { type Request, type Response } from 'express';
import { generateAiResponse } from '../services/nvdia.service.js';


export const testMcpController = async (req: Request, res: Response) => {

    const client = await getMcpClient();
    const result = await client.callTool({
        name: "recommend_cats",
        arguments: {
            kidsFriendly: true,
            apartmentFriendly: true
        }
    })

    const textContent = result.content.find(
  (item) => item.type === "text"
);

if (!textContent) {
  return res.status(500).json({
    success: false,
    message: "No text content returned from MCP tool",
  });
}

const catsData = textContent.text;


    let prompt = ` Available cats breeds are ${catsData}. Recommend a best cat breed for a family with kids and living in an apartment.`;


    let aiResponse = await generateAiResponse(prompt);
    return res.json({
        sucess: true,
        data: aiResponse
    });

}


