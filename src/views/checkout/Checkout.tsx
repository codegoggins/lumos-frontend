import { useNavigate } from "react-router-dom";
import { LuArrowLeft, LuX, LuShieldCheck, LuClock, LuBookOpen, LuStar } from "react-icons/lu";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  const subtotal = state.items.reduce((s, i) => s + i.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="flex-1 overflow-y-auto bg-bg-grey">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-bg-primary rounded-full transition-colors text-text-secondary"
          >
            <LuArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-text-primary">Checkout</h1>
          <span className="text-[12px] text-text-muted bg-bg-primary px-3 py-1 rounded-full border border-lightborder font-medium">
            {state.items.length} course{state.items.length !== 1 ? "s" : ""}
          </span>
        </div>

        {state.items.length === 0 ? (
          <div className="bg-bg-primary rounded-xl border border-lightborder p-16 text-center shadow-sm">
            <p className="text-lg font-medium text-text-primary mb-2">Your cart is empty</p>
            <p className="text-[13px] text-text-muted mb-6">Add courses from the Lesson page to get started.</p>
            <button
              onClick={() => navigate("/lesson")}
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              Browse Courses
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {state.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-bg-primary rounded-lg border border-lightborder p-5 shadow-sm flex gap-5 group hover:shadow-md transition-shadow"
                >
                  <div className="relative shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-48 h-32 rounded-lg object-cover shadow-sm"
                    />
                    <span className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm">
                      Course
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col py-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[15px] font-bold text-text-primary leading-snug">{item.name}</h3>
                        <p className="text-[12px] text-text-muted mt-1.5">by {item.instructor}</p>
                      </div>
                      <button
                        onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                        className="p-2 text-text-muted hover:text-error hover:bg-error/10 rounded-lg transition-all shrink-0 opacity-0 group-hover:opacity-100"
                      >
                        <LuX size={16} />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <span className="text-[11px] text-text-muted flex items-center gap-1.5 bg-bg-grey px-2.5 py-1 rounded-lg">
                        <LuClock size={12} /> {item.duration}
                      </span>
                      <span className="text-[11px] text-text-muted flex items-center gap-1.5 bg-bg-grey px-2.5 py-1 rounded-lg">
                        <LuBookOpen size={12} /> Full Access
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-3">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <LuStar key={star} size={12} className={`${star <= 4 ? "text-warning fill-warning" : "text-warning/40 fill-warning/40"}`} />
                        ))}
                        <span className="text-[10px] text-text-muted ml-1">4.8</span>
                      </div>
                      <span className="text-lg font-bold text-primary">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-bg-primary rounded-lg border border-lightborder p-6 shadow-sm sticky top-8">
                <h3 className="text-sm font-bold text-text-primary mb-5">Order Summary</h3>
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-[13px]">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="font-medium text-text-primary">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[13px]">
                    <span className="text-text-secondary">Tax (10%)</span>
                    <span className="font-medium text-text-primary">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-lightborder pt-3 flex justify-between">
                    <span className="text-sm font-bold text-text-primary">Total</span>
                    <span className="text-lg font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    dispatch({ type: "CLEAR_CART" });
                    navigate("/lesson");
                  }}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg text-sm font-semibold transition-colors shadow-sm mb-3"
                >
                  Complete Purchase
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-text-muted">
                  <LuShieldCheck size={13} className="text-success" />
                  30-day money-back guarantee
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
