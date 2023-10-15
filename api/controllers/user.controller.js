import bcryptjs from "bcryptjs";
import User from "../models/user.model.js"
import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/error.js";
export const user = ( req, res ) => {
    res.json({ message: "Api route is working horaa" });
};


export const updateUser = async ( req, res,next ) => {
    if ( req.user.id !== req.params.id ) return next( errorHandler( 401, "You can only update your own account!" ) );
    try {
        if ( req.body.password ) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10)
        }
        const updateUser = await User.findByIdAndUpdate( req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true } )
        
        const { password, ...rest } = updateUser._doc;
        res.status( 200 ).json( rest );

    } catch (error) {
        next(error)
    }
}


// dleting the user

export const deleteUser = async ( req, res , next) => {
    if ( req.user.id !== req.params.id ) return next( errorHandler( 401, 'You can only delete your accoutn!' ) )
    try {
        await User.findByIdAndDelete( req.params.id );
        res.clearCookie( 'access_token' );
        res.status( 200 ).json( "User has been deleted!" )
    } catch (error) {
        next( error );
    }
}

 
export const getUserListings = async (req, res, next) => {
    // Ensure that the user is authenticated and req.user.id is available
    if (req.user && req.user.id) {
        // Compare req.user.id with req.params.id
        if (req.user.id === req.params.id) {
            try {
                // Find listings associated with the user
                const listings = await Listing.find({ userRef: req.params.id });
                res.status(200).json(listings);
            } catch (error) {
                next(error);
            }
        } else {
            // Return a 401 Unauthorized error if the user IDs don't match
            return next(errorHandler(401, "You can only view your own listings"));
        }
    } else {
        // Handle cases where the user is not authenticated
        return next(errorHandler(401, "Authentication required"));
    }
};
