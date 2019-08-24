import React, { useState } from 'react';
import Input from '../Input/Input';
import './styles.scss';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

const poorlyValidateEmail = email => email && email.includes('@');

const Kontaktuot = () => {
  const [data, setData] = useState({
    email: '',
    phone: '',
    name: '',
    message: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendMail = sendData => {
    if (checkData(sendData)) {
      fetch(`https://www.enformed.io/nai53vxo/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(sendData),
      })
        .then(response => response.json())
        .then(() => setSuccess('sekmingai issiusta'))
        .catch(() => setError('Deja ivyko klaida. Gal pasukit mums? :)'));
    }
  };
  const checkData = ({ email, phone, name, message }) => poorlyValidateEmail(email) && phone && name && message;
  return (
    <div style={{ marginBottom: '64px' }}>
      <h3>Parasykite mums!</h3>
      <form id="contact">
        <div className="Contact">
          <div className="Contact_container_rows">
            <Input
              onChange={val => setData({ ...data, phone: val })}
              value={data.phone}
              placeholder="Jusu telefonas"
              type="phone"
            />
            <Input
              onChange={val => setData({ ...data, email: val })}
              value={data.email}
              placeholder="El. pastas"
              type="email"
            />
            <Input
              onChange={val => setData({ ...data, name: val })}
              value={data.name}
              placeholder="Jusu vardas"
              type="name"
            />
          </div>
          <div className="Contact_textarea">
            <Textarea
              onChange={val => setData({ ...data, message: val })}
              value={data.message}
              type="text"
              placeholder="Jusu zinute"
            />
            <div className="Contact_buttonContainer">
              <Button
                disabled={!!success}
                onClick={() => {
                  setError('');
                  if (!poorlyValidateEmail(data.email)) {
                    return setError('Neteisingas el pasto adresas');
                  }
                  if (checkData(data)) {
                    return sendMail(data, val => setError(val));
                  }
                  return setError('Visi laukai yra privalomi');
                }}
                buttonText="Siusti"
              />
            </div>
            {error && <p className="Contact_error">{error}</p>}
            {success && <p className="Contact_success">{success}</p>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Kontaktuot;
