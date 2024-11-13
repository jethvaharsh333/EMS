import mongoose, {Schema} from "mongoose";

const leaveSchema = new Schema({
    employee_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    },
    organization_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization' 
    },
    leave_start_date: { 
        type: Date, 
        required: true 
    },
    leave_end_date: {
        type: Date, 
        required: true 
    },
    leave_type: { 
        type: String, 
        enum: ['Sick', 'Casual', 'Vacation', 'Maternity', 'Paternity', 'Unpaid'] 
    },
    leave_reason: { 
        type: String 
    },
    leave_status: { 
        type: String, 
        enum: ['Pending', 'Approved', 'Rejected'], 
        default: 'Pending' 
    },
    leave_approved_by: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        default: null
    }
},{
    timestamps:true
})

export const Leave = mongoose.model("Leave", leaveSchema);