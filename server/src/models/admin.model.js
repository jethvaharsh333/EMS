import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema({
    admin_id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    admin_name:{
        type: String,
        required: true,
        unique: true,
    },
    admin_email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    }

},{
    timestamps:true
})

export const Admin = mongoose.model("Admin", adminSchema);
