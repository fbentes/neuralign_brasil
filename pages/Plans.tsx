import React from 'react';
import { Check, Star } from 'lucide-react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 1,
    name: "Mensal",
    price: "R$ 199,00",
    features: ["Acesso completo à plataforma", "Relatórios de progresso semanais", "Suporte por e-mail", "Cancelamento a qualquer momento"],
    recommended: false
  },
  {
    id: 2,
    name: "Semestral",
    price: "R$ 149,00",
    features: ["Tudo do plano Mensal", "Desconto de 25%", "Sessão de orientação inicial", "Prioridade no suporte"],
    recommended: true
  },
  {
    id: 3,
    name: "Anual",
    price: "R$ 119,00",
    features: ["Tudo do plano Semestral", "Desconto de 40%", "2 Sessões de orientação", "Acesso a webinars exclusivos"],
    recommended: false
  }
];

const Plans: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Escolha o seu plano</h1>
        <p className="text-center text-gray-600 mb-12">Invista no desenvolvimento cognitivo hoje mesmo.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id} 
              className={`rounded-2xl p-8 relative flex flex-col ${
                plan.recommended 
                  ? 'bg-white border-2 border-primary shadow-2xl scale-105 z-10' 
                  : 'bg-gray-50 border border-gray-200 hover:shadow-lg transition-shadow'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-bold flex items-center shadow-sm">
                  <Star size={14} className="mr-1 fill-current" /> Recomendado
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">{plan.name}</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-extrabold text-primary">{plan.price}</span>
                <span className="text-gray-500">/mês</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <Check className="text-green-500 mr-2 flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition-colors ${
                plan.recommended 
                  ? 'bg-primary text-white hover:bg-teal-700' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}>
                Assinar Agora
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;