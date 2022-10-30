const { where } = require("sequelize");
const User = require("../models/users")

exports.getAll = async (req, res) => {
    try {
        const ALL = await User.findAll();
        return res.status(200).json(ALL); 

    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.getOne = async (req, res)=>{
    try {
        const user = await User.findByPk(req.params.id );
        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.createOne = async (req,res)=>{
    try {
        const User_Profile_Model = {
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            department: req.body.department,
            designation: req.body.designation,
            tenant_id: req.body.tenant_id,
            image_url: req.body.image_url,
            city: req.body.city,
            country: req.body.country,
            bio: req.body.bio,
            social_links: req.body.social_links,
            employee_id: req.body.employee_id
        }
        try {
            const user = await User.create(User_Profile_Model);
            console.log("User is created successfully!");
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
        
    } catch (error) {
        return res.status(500).json(error);
    }
};

exports.updateOne = async(req,res)=>{
    try {
        const User_Profile_Model = {
            first_name: req.body.first_name,
            second_name: req.body.second_name,
            department: req.body.department,
            designation: req.body.designation,
            tenant_id: req.body.tenant_id,
            image_url: req.body.image_url,
            city: req.body.city,
            country: req.body.country,
            bio: req.body.bio,
            social_links: req.body.social_links,
            employee_id: req.body.employee_id
        }
        try {
            const user = await User.update(User_Profile_Model, {where: {id: req.params.id}});
            return res.status(201).json(user);
        } catch (error) {
            return res.status(500).json(error);
        }
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deleteOne =  async (req,res)=>{
    try {
        const user = await User.destroy({where: {id: req.params.id}})
        console.log("User is deleted successfully!");
        return res.status(201).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}
