import React, { useState } from 'react';
import { UserType, DemoFormData } from '../types';
import { Send, User, MapPin, Mail, ChevronRight } from 'lucide-react';

const Demo: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<DemoFormData>({
    fullName: '',
    email: '',
    zipCode: '',
    userType: '',
    demoUserName: '',
    demoUserAge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Step 1 Submission
  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate Network Request
    await new Promise(resolve => setTimeout(resolve, 1000));

    // a) Construct the email content as requested
    const emailSubject = `DEMO: ${formData.email}`;
    const emailBody = `
Seu nome completo: ${formData.fullName}
E-mail: ${formData.email}
CEP: ${formData.zipCode}
Tipo de Usuário: ${formData.userType}

Atenciosamente,

Time Neuralign

Não responda esse e-mail !
Esta é uma mensagem automática da neuralign.com.br.

Se você precisar de mais informações, contacte info@neuralign.com.br.
    `;

    console.log("--- MOCK EMAIL SENT TO info@neuralign.com.br ---");
    console.log(`Subject: ${emailSubject}`);
    console.log("Body:");
    console.log(emailBody);
    console.log("-----------------------------------------------");

    alert(`E-mail de confirmação enviado para info@neuralign.com.br (Mock).\n\nVerifique o console para detalhes.`);

    setLoading(false);
    setStep(2);
    window.scrollTo(0, 0);
  };

  // Step 2 Submission
  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    // c) Redirect to external demo
    window.location.href = 'https://neuralign.org/demo';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        
        {/* Progress Indicator */}
        <div className="mb-8 flex justify-center items-center space-x-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>1</div>
          <div className={`h-1 w-16 ${step >= 2 ? 'bg-primary' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-primary text-white' : 'bg-gray-300 text-gray-500'}`}>2</div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {step === 1 ? (
            // --- STEP 1 FORM ---
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Demonstração Gratuita</h2>
              <p className="text-gray-600 mb-8 text-center">Preencha seus dados para iniciar.</p>
              
              <form onSubmit={handleStep1Submit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Seu nome completo</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="Maria Silva"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      placeholder="maria@exemplo.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CEP</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
                        <input
                          type="text"
                          name="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                          placeholder="00000-000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tipo de Usuário</label>
                      <select
                        name="userType"
                        required
                        value={formData.userType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Selecione...</option>
                        {Object.values(UserType).map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors flex justify-center items-center"
                >
                  {loading ? 'Enviando...' : (
                    <>
                      Próximo <ChevronRight className="ml-2" size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            // --- STEP 2 FORM (b: DEMONSTRACAO_NOME_USUARIO mimic) ---
            <div className="flex flex-col md:flex-row">
               {/* Left side image mimicking the structure of a specific landing page */}
               <div className="md:w-1/3 bg-gray-100 hidden md:block">
                  <img 
                    src="https://picsum.photos/seed/kid/400/800" 
                    alt="Criança aprendendo" 
                    className="w-full h-full object-cover"
                  />
               </div>
               
               <div className="p-8 md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Quem vai utilizar?</h2>
                  <p className="text-gray-600 mb-6">Estamos quase lá! Precisamos saber quem fará a demonstração para personalizar a experiência.</p>
                  
                  <form onSubmit={handleStep2Submit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nome do usuário (Aluno/Paciente)</label>
                      <input
                        type="text"
                        name="demoUserName"
                        required
                        value={formData.demoUserName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="Nome da pessoa que vai jogar"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Idade</label>
                      <input
                        type="number"
                        name="demoUserAge"
                        required
                        min="4"
                        max="99"
                        value={formData.demoUserAge}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="Idade (anos)"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent text-white font-bold py-3 rounded-lg hover:bg-yellow-600 transition-colors flex justify-center items-center shadow-md"
                    >
                      <Send className="mr-2" size={18} />
                      Ir para o Jogo (Demonstração)
                    </button>
                    
                    <p className="text-xs text-center text-gray-400 mt-4">
                      Ao clicar em "Ir para o Jogo", você será redirecionado para o ambiente de demonstração externo.
                    </p>
                  </form>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;