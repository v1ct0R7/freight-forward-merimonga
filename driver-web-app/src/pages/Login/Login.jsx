// driver-web-app/src/pages/Login/Login.jsx
import {useState} from "react";
import "./Login.css"
import Logo from "../../assets/logo.png"
import Blop1 from "../../assets/blop-1.png"
import Blop2 from "../../assets/blop-2.png"
import Input from "../../components/ui/Input";
import Label from "../../components/ui/Label";
import Button from "../../components/ui/Button"
import {Mail, Lock} from "lucide-react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="page-background">
            <img
                className="background-decoration blop-2-decoration"
                src={Blop1}
                alt=""
            />

            <img
                className="background-decoration blop-1-decoration"
                src={Blop2}
                alt=""
            />

            <div className="flex flex-col items-center justify-center min-h-screen relative z-10 p-5">
                <img src={Logo} className="h-60"/>
                <form
                    className="w-full mt-10 flex flex-col gap-4"
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
                    <Button type="submit" className="w-full relative">
                        Hyr
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Login