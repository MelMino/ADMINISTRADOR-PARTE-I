const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    descripcion: { type: String },
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);




