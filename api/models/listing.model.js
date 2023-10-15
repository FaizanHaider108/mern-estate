import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        name: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            required: true,
        },
        address: {
            type: 'string',
            required: true,
        },
        regularPrice: {
            type: Number,
           
        },
        discountedPrice: {
            type: Number,
            
        },
        bathrooms: {
            type: Number,
           
        },
        bedrooms: {
            type: Number,
           
        },
        furnished: {
            type: Boolean,
          
        },
        parking: {
            type: Boolean,
            
        },
        area: {
            type: "string",
        },

        email: {
            type: "string",
        },
        
        contact: {
            type: "number",
        },
        type: {
            type: String,
           
        },
        offer: {
            type: Boolean,
           
        },
        imageUrls: {
            type: Array,
            required: true,
        },
        userRef: {
            type: String,
            required: true
        }
    }, { timestamps: true }
);

const Listing = mongoose.model( "Listing", listingSchema );
 

export default Listing;