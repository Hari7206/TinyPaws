
import type { Request, Response } from "express";
import { aiRecommendService } from "../services/aiRecommend.service.js";

export const aiRecommendController = async (
  req: Request,
  res: Response
) => {
  try {
    const { kidsFriendly, apartmentFriendly } = req.body;

    const result = await aiRecommendService(
      kidsFriendly,
      apartmentFriendly
    );

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error("AI recommendation error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to recommend a cat"
    });
  }
};
