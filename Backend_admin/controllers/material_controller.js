const Material = require('../models/material_models');

exports.createMaterial = async (req, res) => {
    try {
        req.body.createdBy = req.user.id;
        const material = await Material.create(req.body);
        res.status(201).json({
            success: true,
            data: material
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await Material.find().populate('courseId');
        res.status(200).json({
            success: true,
            data: materials
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

exports.updateMaterial = async (req, res) => {
    try {
        let material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({
                success: false,
                error: 'Material not found'
            });
        }
        
        material = await Material.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        
        res.status(200).json({
            success: true,
            data: material
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({
                success: false,
                error: 'Material not found'
            });
        }
        
        await material.remove();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
};