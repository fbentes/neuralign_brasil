import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Sobre o Neuralign</h1>
        
        <div className="prose prose-lg mx-auto text-gray-700">
          <p className="mb-6">
            O Neuralign é mais do que um programa de leitura; é uma ferramenta de transformação cognitiva. Nossa missão é desbloquear o potencial de aprendizado de cada indivíduo através da ciência da neuroplasticidade.
          </p>
          
          <img 
            src="https://picsum.photos/seed/team/1000/400" 
            alt="Equipe Neuralign" 
            className="w-full rounded-xl shadow-md mb-8"
          />

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa História</h2>
          <p className="mb-6">
            Desenvolvido por especialistas em neurociência e educação, o Neuralign nasceu da necessidade de oferecer uma solução eficaz e baseada em evidências para dificuldades de leitura e processamento cognitivo.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Metodologia</h2>
          <p className="mb-6">
            Utilizamos jogos e exercícios adaptativos que desafiam o cérebro a criar novas conexões neurais. O foco não é apenas ensinar a ler, mas preparar o cérebro para processar a linguagem de maneira eficiente.
          </p>
          
          <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-primary mt-8">
            <p className="italic text-gray-800 font-medium">
              "Acreditamos que todo cérebro é capaz de mudar e aprender, independentemente dos desafios iniciais."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;