import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import { Link } from 'react-router-dom'; 
import './CartItem.css'; 

const CartItem = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
        total += item.cost * item.quantity;
    });
    return total;
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleCheckoutShopping = () => {
    alert('Rezervarea a fost trimisă cu succes!');
  };

  return (
    <div className="cart-container">
      {/* Navbar simplu pt Cart */}
      <div style={{ marginBottom: '30px', borderBottom: '1px solid #333', paddingBottom: '15px' }}>
          <Link to="/cars" style={{ textDecoration: 'none', color: '#ff4d4d', fontWeight: 'bold', fontSize: '1.1rem' }}>
              ← Înapoi la Flotă
          </Link>
      </div>

      <h2 className="cart-title">Coșul tău de rezervări</h2>
      
      {cart.length === 0 ? (
        <div className="empty-cart">
            <p>Nu ai nicio mașină rezervată momentan.</p>
            <Link to="/cars">
                <button className="btn-checkout">Vezi Oferta Noastră</button>
            </Link>
        </div>
      ) : (
        <div>
            <div className="cart-items-list">
                {cart.map(item => (
                <div className="cart-item" key={item.id}>
                    {/* Poza Mare */}
                    <img 
                        className="cart-item-image" 
                        src={item.images ? item.images[0] : item.image} 
                        alt={item.name} 
                    />
                    
                    <div className="cart-item-details">
                        <div>
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">€{item.cost} / zi</div>
                        </div>
                        
                        <div className="cart-item-quantity">
                            <button className="quantity-btn" onClick={() => handleDecrement(item)}>-</button>
                            <span className="cart-item-count">{item.quantity}</span>
                            <button className="quantity-btn" onClick={() => handleIncrement(item)}>+</button>
                        </div>
                        
                        <div className="cart-item-actions">
                            <div className="cart-item-total">
                                Subtotal: <strong style={{color: 'white'}}>€{item.cost * item.quantity}</strong>
                            </div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                                ✕ Șterge
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            
            <div className="cart-summary">
                <div className="total_cart_amount">
                    Total estimat (1 zi): <strong>€{calculateTotalAmount()}</strong>
                </div>
                
                <div className="continue_shopping_btn">
                    <Link to="/cars">
                        <button className="btn-continue">Continuă Navigarea</button>
                    </Link>
                    <button className="btn-checkout" onClick={handleCheckoutShopping}>
                        Finalizează Rezervarea
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;