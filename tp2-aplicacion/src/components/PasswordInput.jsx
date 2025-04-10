import React, { useState } from "react";

function PasswordInput({ password, setPassword }) {
    const [showPassword, setShowPassword] = useState(false);
    const [copied, setCopied] = useState(false);

    // Función para copiar la contraseña al portapapeles
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 3000); // Mensaje desaparece en 3s
        });
    };

    return (
        <div className="input-container">
            <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Escribí tu contraseña..."
            />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Ocultar" : "Mostrar"}
            </button>
            <button onClick={copyToClipboard} disabled={!password}>
                Copiar
            </button>
            {copied && <span className="copied-message">¡Copiada!</span>}
        </div>
    );
}

export default PasswordInput;
