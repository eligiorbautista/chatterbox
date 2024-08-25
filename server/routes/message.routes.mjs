import express from "express"; 
import protectedRoute from "../middleware/protectedRoute.mjs";
import { getMessages, sendMessage } from "../controllers/message.controllers.mjs";


const router = express.Router();

router.get("/:id", protectedRoute, getMessages);
router.post("/send/:id", protectedRoute, sendMessage);

export default router;
