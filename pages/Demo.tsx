import React, { useState } from 'react';
import { UserType, DemoFormData } from '../types';
import { Send, User, MapPin, Mail, ChevronRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Demo: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  // Status states: idle, sending, success, error
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  // Step 1 Submission with EmailJS
  const handleStep1Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // --- CONFIGURAÇÃO OBRIGATÓRIA DO EMAILJS ---
    // 1. Crie uma conta em https://www.emailjs.com/
    // 2. Adicione um serviço de email (Gmail, Outlook, etc).
    // 3. Crie um template de email.
    //    - No campo "To Email" (Para) do painel EmailJS, coloque: info@neuralign.com.br
    //      (OU configure lá como {{to_email}} para usar o valor definido abaixo)
    //    - No corpo do email (Painel), use as variáveis: {{message}}, {{from_name}}, {{email}}
    // 4. Substitua as constantes abaixo pelos valores do seu painel:

    const SERVICE_ID = 'YOUR_SERVICE_ID'; // Ex: service_x9d8s7f
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Ex: template_8sh7f6d
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Ex: user_98s7df87s8df

    // Construção da mensagem formatada conforme solicitado
    const messageBody = `
Seu nome completo: ${formData.fullName}
E-mail: ${formData.email}
CEP: ${formData.zipCode}
Tipo de Usuário: ${formData.userType}

Atenciosamente,

Time Neuralign

Não responda esse e-mail !
Esta é uma mensagem automática da neuralign.com.br.

Se você precisar de mais informações, contacte info@neuralign.com.br.
    `.trim();

    // Mapeamento dos dados para o template do EmailJS
    const templateParams = {
      to_email: 'info@neuralign.com.br', // Requer que o template no EmailJS tenha {{to_email}} no campo "To"
      from_name: formData.fullName,
      email: formData.email,
      zip_code: formData.zipCode,
      user_type: formData.userType,
      subject: `DEMO: ${formData.email}`,
      message: messageBody
    };

    try {
      // Verifica se as chaves ainda são os placeholders
      if (SERVICE_ID === 'YOUR_SERVICE_ID') {
         console.error("ERRO: Chaves do EmailJS não configuradas.");
         alert("ATENÇÃO: O e-mail NÃO foi enviado pois as chaves do EmailJS (SERVICE_ID, etc.) ainda não foram configuradas no arquivo 'pages/Demo.tsx'.");
         
         // Simulação apenas para não travar a interface durante o desenvolvimento
         await new Promise(resolve => setTimeout(resolve, 2000));
      } else {
         await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      }
      
      setStatus('success');
      
      // Aguarda mostrando a mensagem de sucesso antes de ir para o próximo passo
      setTimeout(() => {
        setStatus('idle');
        setStep(2);
        window.scrollTo(0, 0);
      }, 2000);

    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar sua solicitação. Por favor, verifique sua conexão e tente novamente.');
    }
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
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= 1 ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-gray-200 text-gray-400'}`}>1</div>
          <div className={`h-1 w-20 rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${step >= 2 ? 'bg-primary text-white scale-110 shadow-lg' : 'bg-gray-200 text-gray-400'}`}>2</div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-100">
          
          {/* Feedback Visual Global (Overlay) */}
          {status === 'success' && (
            <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300 backdrop-blur-sm">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <CheckCircle className="text-green-600 w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Sucesso!</h3>
              <p className="text-gray-600 text-lg">Sua solicitação de demonstração foi enviada.</p>
              <p className="text-gray-400 text-sm mt-8">Redirecionando...</p>
            </div>
          )}

          {step === 1 ? (
            // --- STEP 1 FORM ---
            <div className="p-8 md:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">Demonstração Gratuita</h2>
                <p className="text-gray-600 max-w-sm mx-auto">Preencha seus dados abaixo para liberar seu acesso exclusivo.</p>
              </div>
              
              <form onSubmit={handleStep1Submit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Seu nome completo</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      disabled={status === 'sending'}
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-200"
                      placeholder="Ex: Maria Silva"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-mail</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      disabled={status === 'sending'}
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-200"
                      placeholder="Ex: maria@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">CEP</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="text-gray-400 group-focus-within:text-primary transition-colors" size={20} />
                        </div>
                        <input
                          type="text"
                          name="zipCode"
                          required
                          disabled={status === 'sending'}
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          className="block w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-200"
                          placeholder="00000-000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Usuário</label>
                      <div className="relative">
                        <select
                          name="userType"
                          required
                          disabled={status === 'sending'}
                          value={formData.userType}
                          onChange={handleInputChange}
                          className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all duration-200 appearance-none"
                        >
                          <option value="">Selecione uma opção...</option>
                          {Object.values(UserType).map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                </div>

                {status === 'error' && (
                  <div className="bg-red-50 text-red-700 p-4 rounded-xl flex items-start text-sm border border-red-100 animate-in slide-in-from-top-2">
                    <AlertCircle size={20} className="mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Erro no envio</p>
                      <p>{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full font-bold text-lg py-4 rounded-xl transition-all duration-300 flex justify-center items-center shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                    status === 'sending' 
                      ? 'bg-slate-400 cursor-not-allowed text-white shadow-none transform-none' 
                      : 'bg-gradient-to-r from-primary to-slate-800 text-white hover:to-primary'
                  }`}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="mr-2 animate-spin" size={24} />
                      Processando envio...
                    </>
                  ) : (
                    <>
                      Continuar <ChevronRight className="ml-2" size={24} />
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-gray-400 mt-4">
                  Seus dados estão seguros e serão utilizados apenas para fins de demonstração.
                </p>
              </form>
            </div>
          ) : (
            // --- STEP 2 FORM ---
            <div className="flex flex-col md:flex-row min-h-[500px]">
               {/* Left side image */}
               <div className="md:w-2/5 bg-gray-100 hidden md:block relative overflow-hidden">
                  <img 
                    src="https://picsum.photos/seed/kid/600/900" 
                    alt="Criança aprendendo" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-bold text-lg">"O Neuralign mudou a forma como meu filho estuda."</p>
                    <p className="text-sm opacity-80 mt-2">— Depoimento real</p>
                  </div>
               </div>
               
               <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Quem vai utilizar?</h2>
                  <p className="text-gray-600 mb-8">Estamos quase lá! Precisamos saber quem fará a demonstração para personalizar a experiência.</p>
                  
                  <form onSubmit={handleStep2Submit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nome do usuário (Aluno/Paciente)</label>
                      <input
                        type="text"
                        name="demoUserName"
                        required
                        value={formData.demoUserName}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent focus:bg-white transition-all duration-200"
                        placeholder="Nome da pessoa que vai jogar"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Idade</label>
                      <input
                        type="number"
                        name="demoUserAge"
                        required
                        min="4"
                        max="99"
                        value={formData.demoUserAge}
                        onChange={handleInputChange}
                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent focus:bg-white transition-all duration-200"
                        placeholder="Idade (anos)"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full bg-accent text-white font-bold text-lg py-4 rounded-xl hover:bg-accentHover transition-all duration-300 flex justify-center items-center shadow-md hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <Send className="mr-2" size={20} />
                        Acessar Demonstração
                      </button>
                    </div>
                    
                    <p className="text-xs text-center text-gray-400 mt-4">
                      Ao clicar em "Acessar", você será redirecionado para o ambiente de jogo externo (neuralign.org).
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