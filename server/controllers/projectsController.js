const Project = require('../models/projectSchema');
const User = require('../models/userSchema');
const asyncHandler = require('express-async-handler');
// @desc Get all projects
// @GET /api/projects
// access PRIVATE
const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ user: req.user.id }).sort({
    createdAt: -1,
  });
  res.status(200).send(projects);
});

// @desc Create a project
// @POST /api/projects
// access PRIVATE
const setProject = asyncHandler(async (req, res) => {
  const { title, camera, lens, film, notes, user } = req.body;
  if (!title) {
    res.status(400);
    throw new Error('Please add a title');
  }

  const project = await Project.create({
    title,
    camera,
    lens,
    film,
    notes,
    user: req.user.id,
  });

  res.status(200).json(project);
});

// @desc Update a project
// @PUT /api/projects/:id
// access PRIVATE
const updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error('project not found');
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (project.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProject);
});

// @desc Delete a project
// @route /api/projects/:id
// access PRIVATE
const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error('Project not found');
  }

  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (project.user.toString() !== user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await project.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = { getProjects, setProject, updateProject, deleteProject };
