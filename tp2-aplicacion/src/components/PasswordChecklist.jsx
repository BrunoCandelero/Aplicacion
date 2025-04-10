// src/components/PasswordChecklist.jsx
import React from "react";

function PasswordChecklist({ password }) {
    const checks = [
        { label: "Contiene mayúsculas", regex: /[A-Z]/ },
        { label: "Contiene minúsculas", regex: /[a-z]/ },
        { label: "Contiene números", regex: /[0-9]/ },
        { label: "Contiene símbolos", regex: /[^A-Za-z0-9]/ },
        { label: "Tiene al menos 8 caracteres", test: (pwd) => pwd.length >= 8 }
    ];

    return (
        <div style={{ textAlign: "left", margin: "20px auto", maxWidth: "400px" }}>
            <h4>Requisitos:</h4>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {checks.map((check, i) => {
                    const isValid = check.regex
                        ? check.regex.test(password)
                        : check.test(password);
                    return (
                        <li key={i} style={{ color: isValid ? "limegreen" : "red", marginBottom: "6px" }}>
                            {isValid ? "✅" : "❌"} {check.label}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default PasswordChecklist;
