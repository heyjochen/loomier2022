const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getProjects,
  setProject,
  updateProject,
  deleteProject,
} = require('../controllers/projectsController');

router.route('/').get(protect, getProjects).post(protect, setProject);
router.route('/:id').put(protect, updateProject).delete(protect, deleteProject);

module.exports = router;
