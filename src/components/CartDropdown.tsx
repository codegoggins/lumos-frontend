import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuX, LuShoppingCart } from "react-icons/lu";
import { useCart } from "../context/CartContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

const CartDropdown = ({ open, onClose }: Props) => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose]);

  if (!open) return null;

  const subtotal = state.items.reduce((s, i) => s + i.price, 0);

  return (
    <div
      ref={ref}
      className="absolute top-14 right-0 w-[380px] bg-bg-primary rounded-2xl shadow-xl border border-lightborder z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="px-5 pt-4 pb-3 flex items-center justify-between border-b border-lightborder">
        <h3 className="text-sm font-bold text-text-primary flex items-center gap-2">
          <LuShoppingCart size={15} /> Cart ({state.items.length})
        </h3>
      </div>

      {/* Items */}
      <div className="max-h-[320px] overflow-y-auto">
        {state.items.length === 0 ? (
          <div className="py-12 text-center text-text-muted text-[12px]">
            Your cart is empty
          </div>
        ) : (
          state.items.map((item) => (
            <div
              key={item.id}
              className="px-5 py-3 flex gap-3 border-b border-lightborder/50 last:border-0 hover:bg-bg-grey transition-colors"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-10 rounded-lg object-cover shrink-0 shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-semibold text-text-primary truncate leading-tight">
                  {item.name}
                </p>
                <p className="text-[10px] text-text-muted mt-0.5">{item.instructor}</p>
              </div>
              <div className="flex flex-col items-end gap-1 shrink-0">
                <span className="text-[12px] font-bold text-text-primary">
                  ${item.price}
                </span>
                <button
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                  className="text-text-muted hover:text-error transition-colors"
                >
                  <LuX size={13} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {state.items.length > 0 && (
        <div className="px-5 py-4 border-t border-lightborder bg-bg-grey/50">
          <div className="flex justify-between mb-3">
            <span className="text-[12px] text-text-secondary font-medium">Subtotal</span>
            <span className="text-sm font-bold text-text-primary">${subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={() => {
              onClose();
              navigate("/checkout");
            }}
            className="w-full bg-primary hover:bg-primary-hover text-white py-2.5 rounded-lg text-[12px] font-semibold transition-colors shadow-sm"
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDropdown;
