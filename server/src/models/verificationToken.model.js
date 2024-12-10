import mongoose, {Schema} from "mongoose";

const verificationTokenSchema = new Schema({
    email: { type: String, required: true },
    token: { type: String, required: true, unique: true },
    expires: { type: Date, required: true }
}, {
    timestamps: true
});

export const VerificationToken = mongoose.model("VerificationToken", verificationTokenSchema);