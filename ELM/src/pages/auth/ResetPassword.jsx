import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import axios from "axios";
import api from "../../services/api";

function ResetPassword() {

    const [password, setPassword] = useState("");

    const [params] = useSearchParams();

    const token = params.get("token");

    const handleSubmit = async () => {

        await api.post(
            "/auth/reset-password",
            {
                token,
                newPassword: password
            }
        );

        alert("Password Reset Success");
    };

    return (
        <>
            <input
                type="password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Reset Password
            </button>
        </>
    );
}

export default ResetPassword;