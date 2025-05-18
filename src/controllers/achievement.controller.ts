import { grantAchievementNFT, getUserAchievements } from "../services/achievement.service";
import { AuthenticatedRequest } from "@/middlewares/auth.middleware";
import { Response } from "express";


export const getUserAchievementsHandler = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const { userId } = req.user || {};
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User not authenticated",
      });
    }
    const achievements = await getUserAchievements(userId);
    res.json({ success: true, achievements });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};