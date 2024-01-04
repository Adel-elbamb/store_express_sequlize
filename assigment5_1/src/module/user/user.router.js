import { Router } from "express";
import { addUser, allUser, deleteUser, olderUser, oneUser, searchBetween, searchUserstartA, signIN, updateUser } from "./controller/user.controller.js";
const router =Router()

router.post('/' , addUser)
router.post ('/sign' , signIN)
router.put('/:id', updateUser)
router.delete('/:id' , deleteUser)
router.get('/' ,allUser)
router.get('/:id' , oneUser)
router.post('/start' , searchUserstartA)
router.post('/bet' , searchBetween)
router.get('/older' , olderUser)

export default router 