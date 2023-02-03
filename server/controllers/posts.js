import PostModel from "../models/postMessages.js";
import mongoose from "mongoose";
export const getPosts = async (req, res) => {
    try {
        const getaMessages = await PostModel.find();
        res.status(200).json(getaMessages);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPosts = async (req, res) => {
    let newMemory = new PostModel (req.body); 
    try {
        await newMemory.save();
        res.status(201).json({newMemory});        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const updatePost = async (req, res) => {
    const {id: _id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No ID');
    }
    else {
        const updatedPost = await postMessage.findByIdAndUpdate(_id, post, { new: true});
        res.json(updatePost);
    }
}