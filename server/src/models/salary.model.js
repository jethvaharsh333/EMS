import mongoose, {Schema} from "mongoose";

const salarySchema = new Schema({
    employee_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    },
    organization_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization' 
    },
    base_salary: { 
        type: Number, 
        required: true 
    },
    bonus_salary: { 
        type: Number, 
        default: 0 
    },
    salary_effective_date: { 
        type: Date, 
        required: true 
    },
    payment_status: { 
        type: String,
        enum: ['Pending', 'Paid'], 
        default: 'Pending'
    }
},{
    timestamps:true
})

export const Salary = mongoose.model("Salary", salarySchema);