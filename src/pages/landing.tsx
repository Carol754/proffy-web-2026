import { Link } from "react-router";
import logoImg from "../assets/logo.svg";

export function Landing() {
  return (
    <div className="w-screen h-screen bg-purple text-text-in-primary flex justify-center items-center">
      <div className="w-11/12 max-w-[1100px] flex flex-col justify-between h-full py-8">
        
        {/* Cabeçalho do Utilizador */}
        <header className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://github.com/diego3g.png" 
              alt="Perfil" 
              className="w-10 h-10 rounded-full"
            />
            <span className="font-poppins-medium text-sm">Usuário Proffy</span>
          </div>

          <Link 
            to="/sign-in" 
            className="w-10 h-10 bg-purple-dark rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="text-white text-xs">Sair</span>
          </Link>
        </header>

        {/* Banner Principal sem duplicação de texto */}
        <div className="grid grid-cols-2 items-center my-auto gap-8">
          <div>
            <img src={logoImg} alt="Proffy - Sua plataforma de estudos online" className="h-28" />
          </div>

          {/* Painel visual de destaque */}
          <div className="flex flex-col items-center justify-center bg-purple-dark/30 h-[320px] rounded-2xl border border-purple-light/20 p-6 text-center shadow-inner">
            <span className="font-poppins-bold text-xl mb-2 text-white">Estudar e Ensinar</span>
            <span className="text-sm opacity-80 max-w-[300px]">
              Conectando professores e alunos de forma simples e rápida.
            </span>
          </div>
        </div>

        {/* Rodapé e Botões de Ação */}
        <div className="grid grid-cols-2 items-center">
          <div className="flex items-center gap-4">
            <span className="font-poppins-regular text-sm">
              Seja bem-vindo.<br />
              <strong className="font-poppins-bold">O que deseja fazer?</strong>
            </span>
          </div>

          <div className="flex justify-end items-center gap-4">
            {/* Botão Estudar */}
            <Link 
              to="/study" 
              className="w-48 h-16 bg-[#9871F4] hover:bg-purple-dark text-white font-poppins-bold rounded-lg flex items-center justify-center gap-3 transition-colors shadow-sm"
            >
              Estudar
            </Link>

            {/* Botão Dar Aulas */}
            <Link 
              to="/give-classes" 
              className="w-48 h-16 bg-green hover:bg-green-hover text-white font-poppins-bold rounded-lg flex items-center justify-center gap-3 transition-colors shadow-sm"
            >
              Dar aulas
            </Link>
          </div>
        </div>

        {/* Contador de Conexões */}
        <div className="flex items-center justify-end text-xs text-text-in-primary mt-2">
          <span>Total de 200 conexões já realizadas</span>
        </div>

      </div>
    </div>
  );
}