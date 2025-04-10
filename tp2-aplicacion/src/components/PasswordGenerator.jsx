import React, { useState } from "react";

function generatePassword({ length, useLower, useUpper, useNumbers, useSymbols }) {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{};:,.<>?";

    let allChars = "";
    let guaranteedChars = [];

    if (useLower) {
        allChars += lower;
        guaranteedChars.push(lower[Math.floor(Math.random() * lower.length)]);
    }
    if (useUpper) {
        allChars += upper;
        guaranteedChars.push(upper[Math.floor(Math.random() * upper.length)]);
    }
    if (useNumbers) {
        allChars += numbers;
        guaranteedChars.push(numbers[Math.floor(Math.random() * numbers.length)]);
    }
    if (useSymbols) {
        allChars += symbols;
        guaranteedChars.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }

    if (allChars.length === 0) return "";

    let remainingLength = length - guaranteedChars.length;
    let password = guaranteedChars;

    for (let i = 0; i < remainingLength; i++) {
        const randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        password.push(randomChar);
    }

    // Mezclar la contraseña final
    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join('');
}

function PasswordGenerator({ setPassword }) {
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [length, setLength] = useState(12);
    const [useLower, setUseLower] = useState(true);
    const [useUpper, setUseUpper] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(false);

    const handleGenerate = () => {
        const newPassword = generatePassword({ length, useLower, useUpper, useNumbers, useSymbols });
        setPassword(newPassword);
    };

    return (
        <div className="generator">
            <div style={{ marginBottom: "10px" }}>
                <button onClick={handleGenerate}>Generar contraseña aleatoria</button>
                <button onClick={() => setShowAdvanced(prev => !prev)} style={{ marginLeft: "10px" }}>
                    {showAdvanced ? "Ocultar opciones avanzadas" : "Mostrar opciones avanzadas"}
                </button>
            </div>

            {showAdvanced && (
                <div className="advanced-panel">
                    <div>
                        <label>
                            Largo:
                            <input
                                type="number"
                                min="4"
                                max="32"
                                value={length}
                                onChange={(e) => setLength(Number(e.target.value))}
                                style={{ marginLeft: "10px", width: "50px" }}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={useLower}
                                onChange={(e) => setUseLower(e.target.checked)}
                            />
                            Minúsculas
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={useUpper}
                                onChange={(e) => setUseUpper(e.target.checked)}
                            />
                            Mayúsculas
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={useNumbers}
                                onChange={(e) => setUseNumbers(e.target.checked)}
                            />
                            Números
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={useSymbols}
                                onChange={(e) => setUseSymbols(e.target.checked)}
                            />
                            Símbolos
                        </label>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordGenerator;
