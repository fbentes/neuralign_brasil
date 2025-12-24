import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Meu filho tinha muita dificuldade na escola. Depois de 3 meses de Neuralign, a professora notou uma melhora incrível na concentração e na leitura em voz alta.",
    author: "Maria Silva",
    role: "Mãe de aluno"
  },
  {
    id: 2,
    text: "Como psicopedagoga, recomendo o Neuralign para todos os meus pacientes com dislexia. Os resultados são consistentes e duradouros.",
    author: "Dra. Ana Souza",
    role: "Psicopedagoga"
  },
  {
    id: 3,
    text: "Eu sentia muita vergonha de ler em público. O programa me deu confiança e hoje leio livros inteiros por prazer.",
    author: "João Pedro",
    role: "Aluno, 15 anos"
  },
  {
    id: 4,
    text: "A plataforma é intuitiva e divertida. Não parece que estamos estudando, parece um jogo, mas os resultados são sérios.",
    author: "Carla Mendes",
    role: "Mãe"
  }
];

const Testimonials: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">O que dizem sobre nós</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Histórias reais de superação e desenvolvimento com o método Neuralign.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 relative">
              <Quote className="absolute top-6 left-6 text-teal-100" size={48} />
              <div className="relative z-10">
                <p className="text-gray-700 text-lg mb-6 leading-relaxed pt-4">"{t.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{t.author}</h4>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;