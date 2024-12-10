import mongoose, {Schema} from "mongoose";

const departmentSchema = new Schema({
    department_name:{
        type: String,
        required: true,
        unique: true,
    },
    department_head: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true
    },
    organization_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization',
        required: true 
    },
    employees: [
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Employee' 
        },
    ],
},{
    timestamps:true
})

export const Department = mongoose.model("Department", departmentSchema);