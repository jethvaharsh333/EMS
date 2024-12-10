import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    organization_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Organization' 
    },
    task_name: { 
        type: String, 
        required: true 
    },
    task_description: { 
        type: String 
    },
    task_assigned_to: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    },
    task_due_date: { 
        type: Date 
    },
    task_status: { 
        type: String, 
        enum: ['Assigned', 'In Progress', 'Completed', 'Reviewed'] 
    },
    task_priority: { 
        type: String, 
        enum: ['Low', 'Medium', 'High', 'Critical'] 
    },
    task_created_by: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee' 
    }
},{
    timestamps:true
})

export const Task = mongoose.model("Task", taskSchema);