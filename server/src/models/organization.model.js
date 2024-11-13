import mongoose, {Schema} from "mongoose";

const organizationSchema = new Schema({
    org_id:{
        type: mongoose.Schema.Types.ObjectId,
        auto: true
    },
    org_name:{
        type: String,
        required: true,
        unique: true,
    },
    org_email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true
    }

},{
    timestamps:true
})

export const Organization = mongoose.model("Organization", organizationSchema);
