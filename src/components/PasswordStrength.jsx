import React from "react";

function getPasswordStrength(password) {
    if (password.length === 0) return { label: "", color: "transparent", percent: 0 };
    if (password.length < 6) return { label: "Poco segura", color: "red", percent: 20 };

    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    if (password.length >= 10 && hasUpper && hasLower && hasNumber && hasSymbol) {
        return { label: "Muy segura", color: "green", percent: 100 };
    }

    return { label: "Segura", color: "orange", percent: 60 };
}

function PasswordStrength({ password }) {
    const { label, color, percent } = getPasswordStrength(password);

    return (
        <div className="strength-container">
            <p className="strength-label">Fortaleza: {label}</p>
            <div className="strength-bar">
                <div
                    className="strength-fill"
                    style={{
                        width: `${percent}%`,
                        backgroundColor: color
                    }}
                ></div>
            </div>
        </div>
    );
}

export default PasswordStrength;
