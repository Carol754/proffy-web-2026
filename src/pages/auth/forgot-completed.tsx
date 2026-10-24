import { Link } from "react-router";

export function ForgotCompleted() {
  return (
    <div className="w-screen h-screen bg-purple flex justify-center items-center p-4">
      <div className="max-w-[480px] w-full flex flex-col items-center text-center text-white">
        {/* Ícone de check verde centralizado sobre fundo roxo */}
        <div className="w-24 h-24 bg-[#04D361] rounded-2xl flex items-center justify-center mb-8 shadow-md">
          <span className="text-white text-4xl font-bold">✓</span>
        </div>

        <h1 className="font-poppins-bold text-3xl md:text-4xl mb-4 leading-tight">
          Redefinição enviada!
        </h1>

        <p className="font-poppins-regular text-sm md:text-base opacity-80 mb-10 max-w-[380px] leading-relaxed">
          Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.
        </p>

        <Link 
          to="/sign-in"
          className="w-full max-w-[320px] h-14 bg-green hover:bg-green-hover text-white font-poppins-bold rounded-lg transition-colors text-base flex items-center justify-center shadow-md cursor-pointer"
        >
          Voltar ao login
        </Link>
      </div>
    </div>
  );
}