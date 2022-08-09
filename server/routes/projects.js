const express = require('express');

const {
  getProjects,
  getProject,
  createProject,
  updateProject,
  likeProject,
  deleteProject,
} = require('../controllers/projects.js');

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.get('/:id', getProject);
router.patch('/:id', updateProject);
router.delete('/:id', deleteProject);
router.patch('/:id/likeProject', likeProject);

module.exports = router;
