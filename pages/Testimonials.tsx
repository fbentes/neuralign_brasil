import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const expertTestimonials = [
  {
    text: "Por meio de um processo chamado neuroplasticidade acelerada, essa intervenção semelhante a um jogo permite que o cérebro disléxico construa as conexões necessárias para uma leitura eficaz. Isso realmente muda a vida.",
    author: "Dra. Rina Gupta, Ph.D.",
    role: "Psicóloga Ex-diretora de Saúde Mental e Bem-Estar Estudantil, Queens University"
  },
  {
    text: "Eu adoro essa intervenção porque ela lida com as causas subjacentes das dificuldades de aprendizagem... À medida que o processamento da linguagem visual e falada melhora, a capacidade de ouvir e se comunicar também melhora. É uma abordagem abrangente.",
    author: "Maria De Ionno",
    role: "Psicóloga, Brain Solution Plus, Austrália"
  },
  {
    text: "Ler é um comportamento complexo que requer o desenvolvimento bem-sucedido de várias estruturas e funções cerebrais. O programa interativo da Neuralign tem como alvo os circuitos neurais envolvidos na leitura de uma maneira divertida e envolvente.",
    author: "Rima Balshe, PhD.",
    role: "Psicóloga, Universidade de Coventry, Cairo"
  }
];

const studentTestimonials = [
  {
    id: 1,
    text: "Estamos muito felizes com o desenvolvimento cognitivo e da leitura de nossa filha desde que ela iniciou as atividades propostas pelo Neuralign, juntamente com o acompanhamento psicopedagógico. As atividades são atrativas e temos notado um avanço significativo na leitura e dificuldade ortográfica. A leitura tem se tornado mais fluente e o interesse por livros também melhorou. A oportunidade de conhecermos e termos contato com o Neuralign foi muito relevante e nos mostrou que as habilidades de leitura e aprendizagem são potencialmente estimuladas pelo programa e proporcionaram à nossa filha mais segurança e confiança",
    author: "Flávia e Rodrigo, pais de Alice"
  },
  {
    id: 2,
    text: "Eu sentia muita vergonha de ler em público. O programa me deu confiança e hoje leio livros inteiros por prazer. As mudanças foram percebidas não só na escola, mas na minha autoestima.",
    author: "João Pedro, 15 anos"
  },
  {
    id: 3,
    text: "O Neuralign me ajudou a entender melhor as tarefas da escola. Agora faço tudo mais rápido e consigo me concentrar por muito mais tempo nas aulas.",
    author: "Lucas, 10 anos"
  }
];

const Testimonials: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play desativado para permitir leitura confortável de textos longos
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % studentTestimonials.length);
  //   }, 8000);
  //   return () => clearInterval(timer);
  // }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % studentTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + studentTestimonials.length) % studentTestimonials.length);
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* Seção de Especialistas */}
      <section className="relative w-full py-20 lg:py-32 bg-primary overflow-hidden min-h-screen flex items-center">
        {/* Imagem de Fundo com Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/3a9f67_dc4ba7774203434683b18d90e7fac171~mv2.jpg" 
            alt="Psicóloga na biblioteca" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Card Centralizado com efeito Glassmorphism Escuro */}
          <div className="bg-black/60 backdrop-blur-sm rounded-[30px] p-8 md:p-16 border border-white/5 max-w-4xl mx-auto shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center drop-shadow-lg leading-tight">
              O Neuralign é um programa aprovado por psicólogos ao redor do mundo.
            </h2>

            <div className="space-y-10">
              {expertTestimonials.map((expert, index) => (
                <div key={index} className="text-white">
                  <p className="text-lg md:text-xl leading-relaxed mb-4 font-normal opacity-95">
                    “{expert.text}”
                  </p>
                  <p className="text-base md:text-lg">
                    <span className="font-bold">— {expert.author}</span> <span className="opacity-90">{expert.role}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Alunos/Pais (Carrossel Estilo Roxo) */}
      <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#7F769F]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000&auto=format&fit=crop" 
             alt="Pessoa lendo livro" 
             className="w-full h-full object-cover object-center opacity-40 mix-blend-overlay"
           />
           <div className="absolute inset-0 bg-[#837DA8]/90"></div>
        </div>

        <div className="container mx-auto px-12 relative z-10">
          
          <div className="max-w-5xl mx-auto text-center text-white">
            {/* Ícone de Citação */}
            <div className="mb-8 flex justify-center">
                <Quote className="w-16 h-16 text-white/80 fill-current transform rotate-180" />
            </div>

            <div className="relative min-h-[300px] flex flex-col justify-center">
              {/* Conteúdo do Slide */}
              <div className="transition-opacity duration-500 ease-in-out">
                 <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-10 px-4 md:px-16 tracking-wide">
                   "{studentTestimonials[currentSlide].text}"
                 </p>
                 
                 <div className="flex flex-col items-center justify-center">
                   <p className="text-lg font-bold text-white tracking-wide">
                     {studentTestimonials[currentSlide].author}
                   </p>
                 </div>
              </div>
            </div>

            {/* Indicadores (Bolinhas) */}
            <div className="flex justify-center mt-12 space-x-3">
              {studentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white w-3 h-3' : 'bg-white/40 w-2 h-2 hover:bg-white/60'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Botões de Navegação (Setas Laterais Grandes) */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft size={64} strokeWidth={1} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-300 focus:outline-none"
            aria-label="Próximo depoimento"
          >
            <ChevronRight size={64} strokeWidth={1} />
          </button>

        </div>
      </section>
    </div>
  );
};

export default Testimonials;