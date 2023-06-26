import express from 'express'
import { postExperience, getLatestExperiences } from '../controller/postController.js'

const router = express.Router()

router.post('/', postExperience)
router.get('/experiences', getLatestExperiences)

export default router