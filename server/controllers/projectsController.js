const Project = require('../models/projectSchema');

// @desc Get all projects
// @GET /api/projects
// access PRIVATE
const getProjects = async (req, res) => {
  const projects = await Project.find({}).sort({ createdAt: -1 });
  res.status(200).send(projects);
};

// @desc Create a project
// @POST /api/projects
// access PRIVATE
const setProject = async (req, res) => {
  const { title, camera, lens, film, notes } = req.body;

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
  });

  res.status(200).json(project);
};

// @desc Update a project
// @PUT /api/projects/:id
// access PRIVATE
const updateProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error('project not found');
  }

  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedProject);
};

// @desc Delete a project
// @route /api/projects/:id
// access PRIVATE
const deleteProject = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    res.status(400);
    throw new Error('project not found');
  }

  await project.remove();

  res.status(200).json({ id: req.params.id });
};

module.exports = { getProjects, setProject, updateProject, deleteProject };
