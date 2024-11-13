import mongoose, {Schema} from "mongoose";

const employeeSchema = new Schema({
    employee_email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    employee_name:{
        type: String,
        required: true,
        unique: true,
    },
    employee_password: { 
        type: String, 
        required: true 
    },
    status: { 
        type: String, 
        enum: ['Active', 'Inactive', 'Terminated'], 
        default: 'Active'
    },
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization', 
        required: true
    },
    department_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Department', 
        default: null 
    },
    is_department_head: { 
        type: Boolean, 
        default: false 
    },
    authority_type: { 
        type: String, 
        enum: ['Hierarchical', 'All'],
        default: 'Hierarchical'
    },
    date_joined: { 
        type: Date, 
        required: true,
        default: Date.now
    },

},{
    timestamps:true
})

export const Employee = mongoose.model("Employee", employeeSchema);
