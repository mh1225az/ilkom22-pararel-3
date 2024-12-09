const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middlewares/auth.middleware');
const {
    createMaterial,
    getAllMaterials,
    updateMaterial,
    deleteMaterial
} = require('../controllers/material.controller');

router.route('/')
    .get(getAllMaterials)
    .post(protect, authorize('admin'), createMaterial);

router.route('/:id')
    .put(protect, authorize('admin'), updateMaterial)
    .delete(protect, authorize('admin'), deleteMaterial);

module.exports = router;