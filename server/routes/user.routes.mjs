import express from "express";
import protectedRoute from "../middleware/protectedRoute.mjs";
import { getUsersForSidebar } from "../controllers/user.controllers.mjs";

const router = express.Router();

router.get("/", protectedRoute, getUsersForSidebar);

export default router;
