// driver-web-app/src/pages/Login/Login.jsx
import {useState} from "react";
import Logo from "../../assets/logo.png"
import Blop1 from "../../assets/blop-1.png"
import Blop2 from "../../assets/blop-2.png"
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import {Mail, Lock} from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <div className="relative z-10 p-10">
                <img src={Logo} className="h-30"/>
                <form
                    className="w-full mt-10 bg-white rounded-2xl shadow-[0_0_20px_rgba(255,122,26,0.15)] p-4 flex-col gap-4"
                >
                    <Input
                        icon={Mail}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="përdorues@email.com"
                        required
                    />

                    <Input
                        icon={Lock}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Fjalëkalimi123"
                        required
                    />
                </form>
            </div>
        </div>
    )
}

export default Login