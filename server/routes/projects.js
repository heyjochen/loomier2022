const express = require('express');

import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  likeProject,
  deleteProject,
} from '../controllers/projects.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getPost);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);
router.patch('/:id/likeProject', likeProject);
router.post('/newsletter', newsletter);

export default router;
