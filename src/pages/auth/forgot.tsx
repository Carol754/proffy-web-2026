import { useState } from "react";
import { Link, useNavigate } from "react-router";
import logoImg from "../../assets/logo.svg";

export function Forgot() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }
    // Avança para a tela de confirmação
    navigate("/forgot/send-email");
  }

  return (
    <div className="w-screen h-screen bg-purple flex justify-center items-center overflow-hidden">
      <div className="w-full h-full flex flex-col md:flex-row">
        {/* Painel lateral com a identidade visual Proffy */}
        <div className="hidden md:flex flex-col justify-center items-center bg-purple w-1/2 p-12 text-white relative">
          <Link to="/sign-in" className="absolute top-8 left-8 text-white hover:opacity-80 transition-opacity flex items-center gap-2 font-poppins-medium text-sm">
            ← Voltar
          </Link>
          <div className="flex flex-col items-center text-center">
            <img src={logoImg} alt="Proffy - Sua plataforma de estudos online" className="h-24 mb-2" />
          </div>
        </div>

        {/* Formulário */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-16 bg-white relative">
          <Link to="/sign-in" className="md:hidden absolute top-6 left-6 text-purple hover:opacity-80 transition-opacity font-poppins-medium text-sm">
            ← Voltar
          </Link>

          <div className="max-w-[350px] mx-auto w-full">
            <h1 className="font-poppins-bold text-3xl text-gray-800 mb-2">
              Eita, esqueceu sua senha?
            </h1>
            <p className="font-poppins-regular text-sm text-gray-500 mb-8">
              Não esquenta, vamos dar um jeito nisso.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col">
                <input 
                  type="email" 
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-14 rounded-lg px-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple"
                />
              </div>

              <button 
                type="submit"
                className="w-full h-14 bg-green hover:bg-green-hover text-white font-poppins-bold rounded-lg transition-colors text-base flex items-center justify-center cursor-pointer mt-2"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}