import { ApiResponse } from "../utils/ApiResponse"
import { asyncHandler } from "../utils/asyncHandler"

const registerAdmin = asyncHandler( async (req, res) => {
    // const {}

    const admin = "";

    res.status(201).json(
        new ApiResponse(200, admin, "Admin successfully registered")
    )
})

export {registerAdmin};