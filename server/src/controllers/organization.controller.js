import { Organization } from "../models/organization.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

const registerOrganization = asyncHandler( async (req, res) => {
    const { organization_name } = req.body
    
    if(organization_name === ""){
        throw new ApiError(400, "Organization name is required")
    }

    const org_name = organization_name.toLowerCase();

    const organization = await Organization.create({
        organization_name: org_name,
    })

    res.status(201).json(
        new ApiResponse(200, organization, "Organization registered successfully")
    )
})

export {registerOrganization};