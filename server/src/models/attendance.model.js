import mongoose, {Schema} from "mongoose";

const attendanceSchema = new Schema({
    employee_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    },
    organization_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization' 
    },
    attendance_date: {
        type: Date, 
        required: true 
    },
    clock_in_time: { 
        type: Date 
    },
    clock_out_time: { 
        type: Date 
    },
    attendance_status: { 
        type: String, 
        enum: ['Present', 'Absent', 'Leave'], 
        default: 'Present' 
    }
},{
    timestamps:true
})

export const Attendance = mongoose.model("Attendance", attendanceSchema);
