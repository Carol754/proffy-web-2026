import { Link, useNavigate } from "react-router";
import logoImg from "../assets/logo.svg";

export function GiveClasses() {
  const navigate = useNavigate();

  function handleCreateClass(event: React.FormEvent) {
    event.preventDefault();
    alert("Cadastro de aula criado com sucesso!");
    navigate("/study");
  }

  return (
    <div className="w-full min-h-screen bg-[#F0F0F7] flex flex-col items-center pb-24">
      {/* Cabeçalho Roxo */}
      <header className="w-full bg-purple pt-6 pb-28 px-4 flex justify-center">
        <div className="w-full max-w-[700px] flex flex-col">
          {/* Topo / Navegação */}
          <div className="flex justify-between items-center mb-12">
            <Link 
              to="/landing" 
              className="text-white hover:opacity-80 transition-opacity text-sm font-poppins-medium flex items-center gap-2"
            >
              ← Voltar
            </Link>
            <img src={logoImg} alt="Proffy" className="h-6" />
          </div>

          {/* Título */}
          <div className="flex flex-col items-center text-center">
            <h1 className="font-poppins-bold text-3xl text-white leading-tight max-w-[450px]">
              Que incrível que você quer dar aulas.
            </h1>
            <p className="text-text-in-primary text-sm mt-3 max-w-[350px]">
              O primeiro passo é preencher este formulário de inscrição.
            </p>
          </div>
        </div>
      </header>

      {/* Formulário Principal */}
      <main className="w-full max-w-[700px] px-4 -mt-14">
        <form 
          onSubmit={handleCreateClass}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
        >
          {/* Seção 1: Seus dados */}
          <fieldset className="p-8 border-b border-gray-200">
            <legend className="font-poppins-bold text-xl text-gray-800 mb-6 flex items-center justify-between w-full pb-4 border-b border-gray-100">
              Seus dados
            </legend>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-poppins-regular">Nome completo</label>
                <input 
                  type="text" 
                  required
                  className="h-12 rounded-lg px-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 mb-1 font-poppins-regular">Avatar (link da sua foto)</label>
                  <input 
                    type="url" 
                    required
                    placeholder="https://github.com/seu-utilizador.png"
                    className="h-12 rounded-lg px-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs text-gray-500 mb-1 font-poppins-regular">WhatsApp</label>
                  <input 
                    type="text" 
                    required
                    placeholder="(00) 00000-0000"
                    className="h-12 rounded-lg px-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-poppins-regular">Biografia (máximo 300 caracteres)</label>
                <textarea 
                  required
                  rows={4}
                  className="rounded-lg p-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple resize-none"
                />
              </div>
            </div>
          </fieldset>

          {/* Seção 2: Sobre a aula */}
          <fieldset className="p-8 border-b border-gray-200">
            <legend className="font-poppins-bold text-xl text-gray-800 mb-6 flex items-center justify-between w-full pb-4 border-b border-gray-100">
              Sobre a aula
            </legend>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1 font-poppins-regular">Matéria</label>
                <select 
                  defaultValue="" 
                  required
                  className="h-12 rounded-lg px-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple"
                >
                  <option value="" disabled hidden>Selecione uma opção</option>
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
                <label className="text-xs text-gray-500 mb-1 font-poppins-regular">Custo da sua hora por aula (R$)</label>
                <input 
                  type="number" 
                  required
                  placeholder="80"
                  className="h-12 rounded-lg px-4 bg-[#FAFAFC] border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-purple"
                />
              </div>
            </div>
          </fieldset>

          {/* Rodapé do Formulário */}
          <footer className="bg-[#FAFAFC] p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="text-xl">⚠️</span>
              <span>Importante! <br />Preencha todos os dados com cuidado.</span>
            </div>

            <button 
              type="submit"
              className="w-full sm:w-auto bg-green hover:bg-green-hover text-white font-poppins-bold h-14 px-12 rounded-lg transition-colors text-base flex items-center justify-center cursor-pointer"
            >
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}