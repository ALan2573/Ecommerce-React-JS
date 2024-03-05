
import { useState } from 'react';
// import './CheckoutForm.css';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault();

    const userData = {
      name,
      phone,
      email,
    };

    onConfirm(userData);
  };

  return (
    <div className="CheckoutForm">
      <form onSubmit={handleConfirm}>
        <label className="label">
          Nombre
          <input
            className="input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>

        <label className="label">
          Telefono
          <input
            className="input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>

        <label className="label">
          Email
          <input
            className="input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>

        <div className="label">
          <button className="button" type="submit">
            Confirmar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
