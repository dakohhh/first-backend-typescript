import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    firstname: {type: String, required:true},

    lastname: {type: String, required:true},

    email: { type: String, required: true },

    password: {type: String, required:true}

})






export const UserModel = mongoose.model('User', UserSchema);



export const getUsers = () => UserModel.find() // returns all users in the User schema

export const getUsersByEmail = (email: string) => UserModel.findOne({ email });


export const getUserById = (userId: string) => UserModel.findById(userId);

export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save().then((user) => user.toObject())


export const deleteUserById = (userId: string) => UserModel.findOneAndDelete({ _id: userId });


export const updateUserById = (userId: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(userId, values);
