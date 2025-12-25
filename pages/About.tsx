import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Eye, Activity, Layers, Clock, Type, 
  MessageCircle, FileText, Ear, Crosshair, 
  MousePointer, Grid 
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Glassmorphism Card */}
      <section className="relative w-full min-h-[600px] lg:h-[800px] flex items-center justify-center py-20 bg-slate-900 overflow-hidden">
        
        {/* Background Image - Using a similar library/greenery image */}
        <img 
          src="https://static.wixstatic.com/media/3a9f67_8e97ffa018a0412dbef5bf290e3067b0~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a9f67_8e97ffa018a0412dbef5bf290e3067b0~mv2.jpg"
          onError={(e) => {
             e.currentTarget.src = "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop"; 
          }}
          alt="Biblioteca com vista para jardim" 
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay para escurecer levemente e destacar o texto */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Glass Card */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-[40px] p-8 md:p-16 shadow-2xl text-white text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-snug drop-shadow-sm">
                A Neuralign é uma organização sem fins lucrativos que desenvolve soluções de SaaS (serviço como software) educacional, dedicada a criar intervenções de alta tecnologia e baseadas em pesquisa para indivíduos com dificuldades ou deficiências de aprendizagem.
              </h1>
              <p className="text-base md:text-lg lg:text-xl font-light leading-relaxed text-white/95 drop-shadow-sm text-justify md:text-center">
                Como líder no segmento, a empresa concebe programas avançados de treinamento cognitivo, fundamentados nos princípios da neurociência e da plasticidade neural, utilizando técnicas auditivas e visuais originais. Seu principal programa, também chamado <span className="italic font-medium">Neuralign</span>, é focado em melhorar a leitura de pessoas com dislexia e outras dificuldades, promovendo avanços de até dois níveis escolares em poucas semanas. A plataforma é disponibilizada online de forma acessível, tanto logística quanto financeiramente, por meio de licenciados exclusivos em uma crescente lista de países e idiomas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Como é o método do Neuralign?</h2>
             <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
               O programa de desenvolvimento cognitivo Neuralign emprega uma série de exercícios interativos e multissensoriais projetados para treinar as vias neurais associadas à leitura. O objetivo é estimular o cérebro de indivíduos com dificuldades, como a dislexia, a processar informações textuais de maneira mais eficiente, aproximando-se do padrão neurotípico.
             </p>
           </div>

           <div className="mb-20">
             <h3 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center">E como ele funciona?</h3>
             <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                   <span className="block text-5xl font-bold text-blue-100 mb-4">1</span>
                   <h4 className="text-xl font-bold text-primary mb-3">Treinamento Cognitivo</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     15 horas de jogos cognitivos focados em vias de processamento auditivo e visual, memória de trabalho e função executiva. Sessões de 1 hora, no mínimo 3 vezes por semana.
                   </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                   <span className="block text-5xl font-bold text-green-100 mb-4">2</span>
                   <h4 className="text-xl font-bold text-primary mb-3">Leitura Dinâmica</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Desbloqueada após 9 sessões. Projetada para reforçar a rede de leitura. Sessões rápidas de 1 minuto, 5 vezes por semana, durante 10 semanas.
                   </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                   <span className="block text-5xl font-bold text-purple-100 mb-4">3</span>
                   <h4 className="text-xl font-bold text-primary mb-3">Exercícios de Leitura</h4>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     Desenvolve a compreensão através de jogos de construção de palavras e memória. Sessões de 20 minutos, 5 vezes na semana.
                   </p>
                </div>
             </div>
             
             <div className="mt-12 text-center">
                <Link 
                  to="/lead-collection" 
                  className="inline-block px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-slate-800 transition-all transform hover:-translate-y-1"
                >
                  FAÇA UMA DEMONSTRAÇÃO
                </Link>
             </div>
           </div>
        </div>
      </section>

      {/* Areas Developed Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center">Quais áreas são desenvolvidas?</h2>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              <AreaCard 
                icon={<Ear size={24} />}
                title="Processamento Auditivo" 
                description="Maneira como o cérebro reconhece e interpreta sons, especialmente a fala. Essencial para distinguir pequenas diferenças entre sons em palavras."
              />
              <AreaCard 
                icon={<Eye size={24} />}
                title="Processamento Visual" 
                description="Capacidade de processar múltiplos elementos visuais simultaneamente. As capacidades de atenção visual são fundamentais para a variação na leitura."
              />
              <AreaCard 
                icon={<Crosshair size={24} />}
                title="Controle Motor Ocular" 
                description="Capacidade de ambos os olhos trabalharem de forma suave e eficiente ao rastrear um objeto ou olhar de um lugar para outro."
              />
              <AreaCard 
                icon={<Grid size={24} />}
                title="Fechamento Visual" 
                description="Capacidade de identificar uma forma ou objeto inteiro a partir de um contorno ou representação incompleta."
              />
              <AreaCard 
                icon={<Activity size={24} />}
                title="Função Executiva" 
                description="Processos de ordem superior que governam a ação direcionada a objetivos, como controle inibitório e flexibilidade atencional."
              />
              <AreaCard 
                icon={<Brain size={24} />}
                title="Memória de Trabalho" 
                description="Sistema para armazenar e gerenciar temporariamente as informações necessárias para realizar tarefas cognitivas complexas."
              />
              <AreaCard 
                icon={<Type size={24} />}
                title="Decodificação e Codificação" 
                description="A decodificação de fonemas é a raiz da leitura, e a codificação de fonemas é a raiz da escrita."
              />
              <AreaCard 
                icon={<MessageCircle size={24} />}
                title="Consciência Fonológica" 
                description="Permite atender, discriminar, lembrar e manipular sons no nível de frase, palavra, sílaba e fonema."
              />
              <AreaCard 
                icon={<FileText size={24} />}
                title="Morfologia" 
                description="Consciência das menores unidades de significado na linguagem (morfemas), como raízes, prefixos e sufixos."
              />
              <AreaCard 
                icon={<Clock size={24} />}
                title="Timing" 
                description="Capacidade de coordenar o 'olhar' e 'ouvir' simultaneamente para desenvolver um período de memória de trabalho adequado."
              />
              <AreaCard 
                icon={<Layers size={24} />}
                title="Memória Sequencial Visual" 
                description="Capacidade de recordar e reproduzir uma série de estímulos visuais em uma sequência específica."
              />
              <AreaCard 
                icon={<MousePointer size={24} />}
                title="Multissensorial" 
                description="Atividades visuais, auditivas, cinestésicas e táteis para melhorar o aprendizado e a memória."
              />
           </div>
        </div>
      </section>

      {/* References Section - Footer style */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <details className="cursor-pointer group">
            <summary className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 list-none flex items-center">
              Ver Referências Científicas
              <span className="ml-2 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <ul className="space-y-2 text-xs text-slate-400 pl-4 mt-4 transition-all">
              <li>(1) kidshealth.org/en/parents/central-auditory.html</li>
              <li>(2) sciencedirect.com/science/article/pii/S0042698908000679</li>
              <li>(3) sciencedirect.com/science/article/pii/S0010027706001272</li>
              <li>(4) hopecliniconline.com/vision-dysfunctions/reading-learning-and-behavioral-problems/</li>
              <li>(5) nba.uth.tmc.edu/neuroscience/m/s3/chapter08.html</li>
              <li>(6) A Therapy Resource published by Upbility.net VISUAL PERCEPTION SKILLS FOR CHILDREN WITH DYSLEXIA</li>
              <li>(7) understood.org/en/learning-attention-issues/child-learning-disabilities/executive-functioning-issues</li>
              <li>(8) sciencedirect.com/topics/neuroscience/executive-functions</li>
              <li>(9) simplypsychology.org/working%20memory.html</li>
              <li>(10) medicinenet.com/script/main/art.asp?articlekey=7143</li>
            </ul>
          </details>
        </div>
      </section>
    </div>
  );
};

const AreaCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-md hover:border-blue-200 transition-all duration-300">
     <div className="flex items-center mb-4">
       <div className="text-white bg-primary p-2.5 rounded-lg mr-4 shadow-sm">
          {icon}
       </div>
       <h3 className="text-lg font-bold text-slate-800 leading-tight">{title}</h3>
     </div>
     <p className="text-slate-600 text-sm leading-relaxed flex-grow">{description}</p>
  </div>
);

export default About;