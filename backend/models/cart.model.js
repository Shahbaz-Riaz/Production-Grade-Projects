import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: { 
                type: Number,
                required: true
            }
        }
    ],
    totalPrice: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

cartSchema.pre("save", function (next) {
    this.totalPrice = this.items.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);
    next();
});

export default mongoose.model("Cart", cartSchema);
