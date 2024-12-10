import mongoose, {Schema} from "mongoose";

const organizationSchema = new Schema({
    organization_name: {
        type: String,
        required: true,
        unique: true,
    },
},{
    timestamps:true
})

export const Organization = mongoose.model("Organization", organizationSchema);
