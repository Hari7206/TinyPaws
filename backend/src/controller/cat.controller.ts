
import type { Request, Response } from "express";
import { createCatService, getAllCatsService, getSingleCatService, recommendService, searchCatsService } from "../services/cat.service.js";


export const createCatController = async (req: Request, res: Response) => {
    let result = await createCatService(req.body);

    return res.status(201).json({
        success: true,
        message: "Cat created successfully",
        data: result
    });
}

export const getAllCatsController = async (req: Request, res: Response) => {
    let result = await getAllCatsService();

    return res.status(200).json({
        success: true,
        message: "All cats retrieved successfully",
        data: result
    });
}




export const getSingleCatController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (typeof id !== "string" || !id) {
      return res.status(400).json({
        success: false,
        message: "A valid cat ID is required",
      });
    }

    const result = await getSingleCatService(id);

    return res.status(result ? 200 : 404).json({
      success: Boolean(result),
      message: result ? "Cat retrieved successfully" : "Cat not found",
      data: result,
    });
  } catch (error) {
    console.error("Failed to retrieve cat:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



export const searchCatsController = async (req: Request, res: Response) => {
    let result = await searchCatsService(req.query.q as string);


    return res.status(200).json({
        success: true,
        message: "Cats retrieved successfully",
        data: result
    })
}


export const recommendCatsController = async (req: Request, res: Response) => {
       const { kidsFriendly, apartmentFriendly } = req.query;

    let result = await recommendService({
      kidsFriendly: kidsFriendly === 'true',
      apartmentFriendly: apartmentFriendly === 'true'
    });

    return res.status(200).json({
        success: true,
        message: "Recommended cats retrieved successfully",
        data: result
    });
}