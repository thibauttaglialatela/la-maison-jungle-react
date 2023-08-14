import { useState } from "react";
import "../styles/Footer.css";

function Footer() {
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    // Utiliser une expression régulière pour valider l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    const isValid = validateEmail(email);
    if (!isValid) {
      alert("L'adresse email n'est pas valide.");
    }
  };

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleBlur}
        />
        <button onClick={() => alert(email)}>Enregistrer</button>
      </div>
    </footer>
  );
}

export default Footer;
