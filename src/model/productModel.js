import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const productSchema = new mongoose.Schema({
    title:{type: String, require:true},
    description:{type: String, require:true},
    price: {type:Number, require:true},
    thumbnail: {type: String},
    code:{type:String, require:true},
    stock:{type:Number, require: true},
    status:{type:Boolean},
    category:{type:String, require:true},
})
productSchema.plugin(mongoosePaginate)

export default productSchema