import { Router } from "express";
import { getUserAchievementsHandler } from "../controllers/achievement.controller";

const router = Router();
router.get("/", getUserAchievementsHandler);

export default router;