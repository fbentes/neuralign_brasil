import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop" 
          alt="Criança sorridente estudando" 
          className="absolute inset-0 w-full h-full object-cover object-top opacity-90"
        />
        
        {/* Gradient Overlay for better text readability if needed, though the card handles it */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 sm:px-6 relative h-full flex items-center">
          <div className="relative w-full lg:w-1/2">
            
            {/* ESSA Badge - Positioned absolutely relative to the container/card area */}
            <div className="absolute -top-12 -right-6 z-20 hidden md:flex flex-col items-center justify-center w-24 h-24 bg-green-600 rounded-full text-white text-center shadow-lg border-2 border-white transform rotate-12">
               <span className="text-[8px] uppercase tracking-wider font-bold mb-0.5">LXD Research</span>
               <span className="text-xl font-extrabold leading-none">ESSA</span>
               <span className="text-[10px] font-bold">Level 1</span>
               <span className="text-[10px]">Evidence</span>
               {/* Zigzag border effect simulation or just use a simple circle for CSS simplicity */}
            </div>

            {/* Glass Card */}
            <div className="bg-slate-900/60 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative z-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Desenvolva a sua leitura e cognição com um programa cientificamente comprovado.
              </h1>
              
              <p className="text-base md:text-lg text-slate-100 mb-8 leading-relaxed font-light">
                O Neuralign melhora a leitura de alunos disléxicos em uma média de 50% em 10 semanas, de acordo com um relatório do Centro de Pesquisa Cognitiva Aplicada e do Departamento de Psicologia da Universidade Carleton.
              </p>
              
              <Link 
                to="/lead-collection" 
                className="inline-block w-full md:w-auto text-center px-8 py-4 bg-indigo-900 hover:bg-indigo-800 text-white font-bold rounded-lg shadow-lg transition-colors duration-300 uppercase tracking-wide text-sm"
              >
                Faça agora uma demonstração gratuita!
              </Link>
            </div>
          </div>
          
          {/* Blackbox logo placeholder in bottom right */}
          <div className="absolute bottom-8 right-8 z-10 hidden md:block opacity-80">
             <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center border border-slate-700">
                <div className="grid grid-cols-3 gap-0.5 p-2">
                   {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                   ))}
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Por que escolher o Neuralign?</h2>
            <p className="text-slate-600 text-lg">
              Nossa metodologia combina neurociência avançada com gamificação para criar resultados duradouros.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Neuroplasticidade Aplicada</h3>
              <p className="text-slate-600 leading-relaxed">
                Exercícios projetados para criar novas conexões neurais, fortalecendo as áreas do cérebro responsáveis pela leitura e foco.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Comprovação Científica</h3>
              <p className="text-slate-600 leading-relaxed">
                Resultados validados por estudos clínicos e reconhecidos internacionalmente como intervenção de alta eficácia.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group">
              <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Activity size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Resultados Mensuráveis</h3>
              <p className="text-slate-600 leading-relaxed">
                Acompanhe o desenvolvimento com relatórios detalhados que mostram a evolução cognitiva semana a semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content / Science Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">A Ciência</h3>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">Como o cérebro aprende a ler?</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                A leitura não é uma habilidade natural do cérebro; ela exige o "recrutamento" de diversas áreas neurais. O Neuralign estimula especificamente essas conexões.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 mr-3 flex-shrink-0">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-slate-700">Estimulação do córtex visual e auditivo simultaneamente.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1 mr-3 flex-shrink-0">
                    <ArrowRight size={14} />
                  </div>
                  <span className="text-slate-700">Fortalecimento da memória de trabalho e funções executivas.</span>
                </li>
              </ul>
              <div className="mt-8">
                 <Link to="/sobre" className="text-accent font-bold hover:text-accentHover inline-flex items-center">
                    Conheça mais sobre o método <ArrowRight className="ml-2" size={18} />
                 </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
               <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop" 
                alt="Pesquisa científica do cérebro" 
                className="rounded-2xl shadow-lg w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Pronto para transformar o aprendizado?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de estudantes que já descobriram seu verdadeiro potencial.
          </p>
          <Link 
            to="/lead-collection" 
            className="inline-block px-10 py-4 bg-accent text-white font-bold rounded-lg shadow-lg hover:bg-accentHover transition-colors"
          >
            Começar Agora
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;