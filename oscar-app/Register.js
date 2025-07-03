import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage } from "./firebaseConfig";
import axios from "axios";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer");
  const [certificate, setCertificate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. Create user in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      // 2. Upload certificate if seller
      let certificateUrl = null;
      if (role === "seller" && certificate) {
        const certRef = ref(storage, `certificates/${uid}/${certificate.name}`);
        await uploadBytes(certRef, certificate);
        certificateUrl = await getDownloadURL(certRef);
      }

      // 3. Call backend to save user role and certificate URL
      await axios.post("http://localhost:5000/users", { uid, role, certificateUrl });

      alert("Registration successful!");
    } catch (err) {
      alert("Error: " + err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>Password:
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <label>Role:
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="buyer">Buyer (Free)</option>
          <option value="seller">Seller (Paid)</option>
          <option value="driver">Driver/Service Provider</option>
        </select>
      </label>

      {role === "seller" && (
        <>
          <label>Upload Certificate:
            <input type="file" onChange={e => setCertificate(e.target.files[0])} required />
          </label>
          <p>Note: Sellers must pay a registration fee (simulate payment outside this demo)</p>
        </>
      )}

      <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
    </form>
  );
}
