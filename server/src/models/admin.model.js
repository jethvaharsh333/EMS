import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema({
    admin_name:{
        type: String,
        required: true,
        unique: true,
    },
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true 
    },
    admin_password: { 
        type: String, 
        required: true
    },
    two_factor_enabled: {
        type: Boolean,
        default: false 
    },
},{
    timestamps:true
})

export const Admin = mongoose.model("Admin", adminSchema);
