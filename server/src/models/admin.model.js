import mongoose, {Schema} from "mongoose";

const adminSchema = new Schema({
    admin_name:{
        type: String,
        required: true,
        unique: true,
    },
    admin_email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        index: true,
    },
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true 
    },
    admin_password: { 
        type: String,
        required: true
    },
    otpcode: {
        type: String,
    },
    two_factor_enabled: {
        type: Boolean,
        default: true
    },
},{
    timestamps:true
})


adminSchema.pre("save", function(next){
    if(!this.isModified("admin_password")) return next();
    this.admin_password = bcrypt.hash(this.admin_password, 10);
})

adminSchema.methods.isPasswordCorrect = async function (admin_password) {
    return await bcrypt.compare(admin_password, this.admin_password);
}

adminSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
}

export const Admin = mongoose.model("Admin", adminSchema);
