import React, { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import PasswordStrength from "./components/PasswordStrength";
import PasswordGenerator from "./components/PasswordGenerator";
import PasswordChecklist from "./components/PasswordChecklist";

function App() {
    const [password, setPassword] = useState("");

    return (
        <div className="container">
            <h1>Comprobador de Fortaleza de Contraseña</h1>
            <PasswordInput password={password} setPassword={setPassword} />
            <PasswordChecklist password={password} /> {}
            <PasswordStrength password={password} />
            <PasswordGenerator setPassword={setPassword} />
        </div>
    );
}

export default App;
