import { useMarketplace } from '../context/MarketplaceContext';
import { Link } from 'react-router-dom';

export default function CartPage() {
    const { cart, removeFromCart, getCartTotal, clearCart } = useMarketplace();

    const total = getCartTotal();

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-extrabold text-[#181411]">My Cart ({cart.length})</h1>

            {cart.length > 0 ? (
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Cart Items */}
                    <div className="flex-1 w-full space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="bg-white rounded-xl border border-primary/10 p-4 shadow-sm flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <div className="w-full sm:w-32 h-24 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                    <img src={item.image} alt={item.title || item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-bold text-[#181411]">{item.title || item.name}</h3>
                                            <p className="text-xs text-[#8a7560] mb-2">{item.location}</p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:bg-red-50 p-1.5 rounded-full transition-colors"
                                            title="Remove"
                                        >
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <div className="text-xs font-bold text-[#5c5044] bg-background-light px-2 py-1 rounded">
                                            {item.type === 'machinery' ? 'Heavy Machinery' : 'Skilled Worker'}
                                        </div>
                                        <div className="text-right">
                                            <span className="text-lg font-extrabold text-[#181411]">₹{item.price}</span>
                                            <span className="text-xs text-[#8a7560] ml-1">{item.unit}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={clearCart}
                            className="text-sm font-bold text-red-600 hover:underline"
                        >
                            Clear Cart
                        </button>
                    </div>

                    {/* Summary */}
                    <div className="w-full lg:w-[320px] bg-white rounded-xl border border-primary/10 p-6 shadow-sm sticky top-24">
                        <h2 className="text-lg font-bold text-[#181411] mb-4">Order Summary</h2>
                        <div className="space-y-2 mb-4 text-sm text-[#5c5044]">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Taxes (18%)</span>
                                <span>₹{(total * 0.18).toLocaleString()}</span>
                            </div>
                            <div className="border-t border-primary/10 pt-2 flex justify-between font-bold text-[#181411] text-base">
                                <span>Total</span>
                                <span>₹{(total * 1.18).toLocaleString()}</span>
                            </div>
                        </div>
                        <button className="w-full py-3 bg-[#181411] text-white font-bold rounded-lg hover:bg-primary transition-colors shadow-lg">
                            Proceed to Checkout
                        </button>
                        <p className="text-xs text-[#8a7560] text-center mt-3">
                            Secure Checkout powered by Razorpay
                        </p>
                    </div>
                </div>
            ) : (
                <div className="text-center py-20 bg-white rounded-xl border border-primary/10 border-dashed">
                    <div className="w-16 h-16 bg-background-light rounded-full flex items-center justify-center mx-auto mb-4 text-[#8a7560]">
                        <span className="material-symbols-outlined text-3xl opacity-50">shopping_cart</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#181411] mb-1">Your cart is empty</h3>
                    <p className="text-sm text-[#8a7560] mb-6">Looks like you haven't added any services yet.</p>
                    <Link to="/dashboard" className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-lg hover:bg-[#d9720b] transition-colors shadow-lg shadow-primary/20">
                        Browse Services
                    </Link>
                </div>
            )}
        </div>
    );
}
