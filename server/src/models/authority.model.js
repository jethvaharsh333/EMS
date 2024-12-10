import mongoose, {Schema} from "mongoose";

const authoritySchema = new Schema({
    employee_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Employee', 
        required: true,
    },
    manage_employee: {
        add: { type: Boolean, default: false },
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
    },
    manage_department: {
        add: { type: Boolean, default: false },
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
    },
    manage_task:{
        add: { type: Boolean, default: false },
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
    },
    manage_salary: {
        add: { type: Boolean, default: false },
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
    },
    manage_leave: {
        add: { type: Boolean, default: false },
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
    },
    manage_attendance: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        delete: { type: Boolean, default: false },
    },
},{
    timestamps:true
})

export const Authority = mongoose.model("Authority", authoritySchema);
