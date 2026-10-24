import { Link } from "react-router";
import logoImg from "../assets/logo.svg";

export function Study() {
  return (
    <div className="w-full min-h-screen bg-[#F0F0F7] flex flex-col items-center pb-12">
      {/* Cabeçalho Roxo */}
      <header className="w-full bg-purple pt-6 pb-20 px-4 flex justify-center">
        <div className="w-full max-w-[700px] flex flex-col">
          {/* Topo / Navegação */}
          <div className="flex justify-between items-center mb-8">
            <Link 
              to="/landing" 
              className="text-white hover:opacity-80 transition-opacity text-sm font-poppins-medium flex items-center gap-2"
            >
              ← Voltar
            </Link>
            <img src={logoImg} alt="Proffy" className="h-6" />
          </div>

          {/* Título */}
          <div>
            <h1 className="font-poppins-bold text-2xl text-white leading-tight">
              Estes são os proffys disponíveis.
            </h1>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal Centralizado com largura fixa */}
      <main className="w-full max-w-[700px] px-4 -mt-10 flex flex-col gap-6">
        {/* Formulário de Filtros Forçado em 3 Colunas Fixo */}
        <form 
          className="w-full bg-transparent gap-4"
          style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 1fr' }}
        >
          <div className="flex flex-col">
            <label className="text-text-in-primary text-xs mb-1 font-poppins-regular">
              Matéria
            </label>
            <select 
              defaultValue="" 
              className="h-12 w-full rounded-lg px-3 bg-white text-gray-800 text-sm focus:outline-none shadow-sm border border-gray-200"
            >
              <option value="" disabled hidden>Selecione</option>
              <option value="Artes">Artes</option>
              <option value="Biologia">Biologia</option>
              <option value="Ciências">Ciências</option>
              <option value="Educação Física">Educação Física</option>
              <option value="Física">Física</option>
              <option value="Geografia">Geografia</option>
              <option value="História">História</option>
              <option value="Matemática">Matemática</option>
              <option value="Português">Português</option>
              <option value="Química">Química</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-text-in-primary text-xs mb-1 font-poppins-regular">
              Dia da semana
            </label>
            <select 
              defaultValue="" 
              className="h-12 w-full rounded-lg px-3 bg-white text-gray-800 text-sm focus:outline-none shadow-sm border border-gray-200"
            >
              <option value="" disabled hidden>Selecione</option>
              <option value="0">Domingo</option>
              <option value="1">Segunda-feira</option>
              <option value="2">Terça-feira</option>
              <option value="3">Quarta-feira</option>
              <option value="4">Quinta-feira</option>
              <option value="5">Sexta-feira</option>
              <option value="6">Sábado</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-text-in-primary text-xs mb-1 font-poppins-regular">
              Hora
            </label>
            <input 
              type="time" 
              className="h-12 w-full rounded-lg px-3 bg-white text-gray-800 text-sm focus:outline-none shadow-sm border border-gray-200"
            />
          </div>
        </form>

        {/* Card do Professor */}
        <article className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mt-2">
          <header className="p-6 flex items-center gap-4">
            <img 
              src="https://github.com/diego3g.png" 
              alt="Diego Fernandes" 
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <strong className="block font-poppins-bold text-lg text-gray-800">
                Diego Fernandes
              </strong>
              <span className="text-xs text-gray-500 font-poppins-regular">
                Química
              </span>
            </div>
          </header>

          <p className="px-6 text-sm text-gray-600 leading-relaxed font-poppins-regular mb-6">
            Entusiasta das melhores tecnologias de química avançada.<br /><br />
            Apaixonado por mudar a vida das pessoas através de experiências revolucionárias e por aprender coisas novas todos os dias.
          </p>

          <footer className="bg-gray-50 p-6 border-t border-gray-100 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              Preço/hora <strong className="block text-base text-purple font-poppins-bold">R$ 80,00</strong>
            </p>

            <a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green hover:bg-green-hover text-white font-poppins-bold h-12 px-6 rounded-lg flex items-center gap-3 transition-colors text-sm"
            >
              Entrar em contato
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}