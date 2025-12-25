import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white font-sans">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:h-[800px] flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
            <img 
            src="https://static.wixstatic.com/media/3a9f67_9dd2b995200f4a129c88742cebd4da28~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a9f67_9dd2b995200f4a129c88742cebd4da28~mv2.jpg"
            alt="Garotinha sorridente em casa durante escola online com laptop" 
            className="w-full h-full object-cover object-center opacity-60"
            onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1610484826967-09c5720778c7?q=80&w=2000&auto=format&fit=crop"; 
            }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent mix-blend-multiply"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-3/5 text-white">
                <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 drop-shadow-sm">
                    Desenvolva a sua leitura e cognição com um programa cientificamente comprovado.
                    </h1>
                    <p className="text-base md:text-lg text-slate-100 mb-8 leading-relaxed font-light">
                    O Neuralign melhora a leitura de alunos disléxicos em uma média de 50% em 10 semanas, de acordo com um relatório do Centro de Pesquisa Cognitiva Aplicada e do Departamento de Psicologia da Universidade Carleton.
                    </p>
                    <div className="flex flex-wrap gap-4">
                    <Link 
                        to="/lead-collection" 
                        className="w-full sm:w-auto text-center px-8 py-4 bg-accent hover:bg-accentHover text-white font-bold rounded-lg shadow-lg transition-all transform hover:-translate-y-1 text-sm md:text-base uppercase tracking-wide"
                    >
                        Faça agora uma demonstração gratuita!
                    </Link>
                    </div>
                </div>
            </div>
            
            <div className="w-full md:w-2/5 flex justify-center md:justify-end relative">
               {/* ESSA Badge */}
               <div className="relative w-48 h-48 md:w-64 md:h-64 animate-in zoom-in duration-700 hover:scale-105 transition-transform">
                  <img 
                    src="https://static.wixstatic.com/media/3a9f67_858a145d8b0a47869ceb8ec300849e11~mv2.png" 
                    alt="ESSA Level 1 Evidence - Strong Evidence" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
             <div className="w-full md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Resultados apoiados por pesquisas
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8 text-justify font-light">
                  O Neuralign teve sua eficácia comprovada, através de um ensaio clínico controlado quasi-randomizado, do Centro de Pesquisa Cognitiva Aplicada e do Departamento de Psicologia da Universidade Carleton, no Canadá; e possui nível mais alto de comprovação científica exigido pela lei norte-americana <i>Every Student Succeeds Act</i> para programas educacionais.
                </p>
                <a 
                  href="https://bit.ly/relatoriofinalneuralignbrasil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white bg-primary px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                >
                  Leia o relatório
                  <ArrowRight className="ml-2" size={18} />
                </a>
             </div>
             <div className="w-full md:w-1/2 flex flex-col items-center gap-8">
                <img 
                  src="https://static.wixstatic.com/media/3a9f67_b30b583e2f1d4006bc4e0ea07216fedd~mv2.png" 
                  alt="Carleton University Logo"
                  className="w-3/4 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Single Quote Section */}
      <section className="py-24 bg-surface relative overflow-hidden border-y border-slate-100">
         <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
               <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14.017 21L14.017 18C14.017 16.896 14.91 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 8.448 14.017 9V11C14.017 11.552 13.569 12 13.017 12H12.017V5H22.017V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.91097 16 7.01697 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H6.01697C5.46497 8 5.01697 8.448 5.01697 9V11C5.01697 11.552 4.56897 12 4.01697 12H3.01697V5H13.017V15C13.017 18.314 10.331 21 7.01697 21H5.01697Z" />
                    </svg>
                  </div>
               </div>
               <blockquote className="text-2xl md:text-3xl font-light text-slate-800 leading-normal mb-8 italic">
                 "Eu gosto muito de fazer as atividades do Neuralign! Eu me concentro muito mais e o Neuralign me ajuda muito na ortografia e na leitura."
               </blockquote>
               <div className="flex flex-col items-center">
                 <cite className="block text-xl font-bold text-primary not-italic mb-1">
                   Alice, 11 anos
                 </cite>
                 <div className="h-1 w-12 bg-accent rounded-full"></div>
               </div>
            </div>
         </div>
      </section>

      {/* Diverse Ages Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6">
           <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
                   Para diversas idades e propósitos.
                 </h2>
                 <p className="text-slate-200 text-lg leading-relaxed text-justify font-light">
                   O Neuralign foi pensado de maneira que, ao estimular a neuroplasticidade para leitura, haja um desenvolvimento em áreas do cérebro responsáveis pelas funções executivas, memória de trabalho, concentração e mais, independente da idade do usuário.
                 </p>
              </div>
              <div className="w-full lg:w-1/2">
                 {/* Video Placeholder */}
                 <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black aspect-video group cursor-pointer border border-white/10">
                    {/* Placeholder Image */}
                    <img 
                      src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop" 
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-50 transition-opacity"
                      alt="Estudante usando laptop"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                          <Play size={32} className="text-white fill-current ml-1" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;