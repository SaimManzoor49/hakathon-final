import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    shipping: {
      type: Boolean,
    },
    quantity:{
      type: Number,
      required:true

    },
    // ratings:[
    //   {
    //     user:{
    //       type:mongoose.ObjectId,
    //       ref:'user',
    //       required:true
    //     },
    //     rating:{
    //       type:String,
    //       required:true
    //     },
    //     review:{
    //       type:String,
    //       required:true
    //     }

        
    //   }
    // ],
    // size:{
    //   type:String,
    //   required:true
    // },
    // color:{
    //   type:String,
    //   required:true
    // },
    // address:{
    //   type:String,
    //   required:true
    // }
  },
  { timestamps: true }
);

export const productModel = mongoose.model("products", productSchema);
