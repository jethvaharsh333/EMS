import { Admin } from "../models/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const registerAdmin = asyncHandler( async (req, res) => {
    const {admin_name, admin_email, admin_password, organization_id} = req.body;

    if ([admin_name, admin_email, admin_password, organization_id].some((field) => field?.trim() === "")){
        throw new ApiError(400, "All admin fields are required")
    }

    const admin = await Admin.create({
        admin_name: admin_name,
        admin_email: admin_email,
        admin_password: admin_password,
        organization_id: organization_id,
    });

    const createdAdmin = await Admin.findOne(admin._id).select(
        "-admin_password"
    );

    res.status(201).json(
        new ApiResponse(200, createdAdmin, "Admin successfully registered")
    )
})

const loginUser = asyncHandler( async (req, res) => {
    
})

export {registerAdmin};