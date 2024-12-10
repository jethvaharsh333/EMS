import { Admin } from "../models/admin.model.js";
import { VerificationToken } from "../models/verificationToken.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { generateSecureRandomCode } from "../utils/generateSecureRandomCode.js";

const registerAdmin = asyncHandler( async (req, res) => {
    const {admin_name, admin_email, admin_password, organization_id} = req.body;

    if ([admin_name, admin_email, admin_password, organization_id].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All admin fields are required")
    }

    const verificationCode = generateSecureRandomCode();

    const admin = await Admin.create({
        admin_name: admin_name,
        admin_email: admin_email,
        admin_password: admin_password,
        organization_id: organization_id,
    });

    const verficationtoken = await VerificationToken.create({
        email: admin_email,
        token: verificationCode,
        expires: Date.now() + 2*60*60*1000
    });

    const createdAdmin = await Admin.findOne(admin._id).select(
        "-admin_password"
    );

    res.status(201).json(
        new ApiResponse(200, createdAdmin, "Admin successfully registered")
    )
})

const verifyAdmin = asyncHandler( async (req, res) => {
    const token = generateSecureRandomCode();

    const { admin_id, otpcode } = req.body;

    const admin = await Admin.findById(admin_id);

    sendVerificationEmail(admin.admin_email, token);

    // if(otpcode)
})

const loginAdmin = asyncHandler( async (req, res) => {
    
})

export {registerAdmin};