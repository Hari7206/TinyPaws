import type { Request, Response } from "express";
import { generateAiResponse } from "../services/nvdia.service.js";



export const askAiController = async (req: Request, res: Response) => {
    let prompt = req.body.prompt;
    let result = await generateAiResponse(prompt);

    return res.status(200).json({
        success: true,
        message: "AI response generated successfully",
        data: result
    });
}
