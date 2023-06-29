import express from 'express'
import { postExperience, getLatestExperiences, getInfo } from '../controller/postController.js'

const router = express.Router()

router.post('/', postExperience)
router.get('/experiences', getLatestExperiences)
router.get('/info', getInfo)

export default router