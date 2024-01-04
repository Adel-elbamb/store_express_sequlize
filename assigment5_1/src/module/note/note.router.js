import { Router } from "express";
const router = Router()
import { addNote, allNotes, allWithUser, deleteNote, updateNote } from "./controller/note.controller.js";

router.post ('/' , addNote)
router.put('/:id' , updateNote)
router.delete('/:id' , deleteNote)
router.get('/', allNotes)
router.get('/user' , allWithUser)


export default router 