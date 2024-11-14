import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const employeeSchema = new Schema({
    employee_email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    employee_name: {
        type: String,
        required: true,
        unique: true,
    },
    employee_password: { 
        type: String, 
        required: true 
    },
    employee_image: {
        type: String,
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

employeeSchema.pre("save", function(next){
    if(!this.isModified("employee_password")) return next();
    this.employee_password = bcrypt.hash(this.employee_password, 10);
})

employeeSchema.methods.isPasswordCorrect = async function (employee_password) {
    return await bcrypt.compare(employee_password, this.employee_password);
}

employeeSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            employee_email: this.employee_email,
            employee_name: this.employee_name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
}
employeeSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
}

export const Employee = mongoose.model("Employee", employeeSchema);