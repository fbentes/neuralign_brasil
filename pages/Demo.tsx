import React, { useState } from 'react';
import { UserType, DemoFormData } from '../types';
import { Send, ChevronRight, Loader2, Info } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Demo: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // --- EMAILJS CREDENTIALS ---
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    const messageBody = `
Nome: ${formData.fullName}
Email: ${formData.email}
CEP: ${formData.zipCode}
Tipo: ${formData.userType}
    `.trim();

    const templateParams = {
      to_email: 'info@neuralign.com.br',
      from_name: formData.fullName,
      email: formData.email,
      zip_code: formData.zipCode,
      user_type: formData.userType,
      subject: `LEAD DEMO: ${formData.email}`,
      message: messageBody
    };

    try {
      if (SERVICE_ID !== 'YOUR_SERVICE_ID') {
         await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      } else {
         // Simulate delay for dev
         await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      setStatus('idle');
      setStep(2);
      window.scrollTo(0, 0);

    } catch (error: any) {
      console.error('Email error:', error);
      setStatus('idle');
      setStep(2); 
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'https://neuralign.org/demo';
  };

  return (
    <div className="relative min-h-screen font-sans text-slate-800">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
            <img 
              src="https://static.wixstatic.com/media/3a9f67_f59c4a48b55d449dbf314156cacb44ce~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3a9f67_f59c4a48b55d449dbf314156cacb44ce~mv2.jpg"
              alt="Crianças em sala de aula"
              className="w-full h-full object-cover object-center"
            />
            {/* Overlay levemente escuro para garantir legibilidade */}
            <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen py-16 px-4">
          
          {/* Glassmorphism Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-[30px] border border-white/20 shadow-2xl p-8 md:p-12 w-full max-w-2xl">
            
            <div className="text-center mb-10">
               <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-md text-shadow">
                 Experimente nossa <br/> demonstração!
               </h1>
            </div>

            {step === 1 ? (
              <form onSubmit={handleNextStep} className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white block ml-1 drop-shadow-sm">Seu nome completo *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 focus:bg-white/40 border border-transparent rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white block ml-1 drop-shadow-sm">E-mail *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 focus:bg-white/40 border border-transparent rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white block ml-1 drop-shadow-sm">CEP *</label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 focus:bg-white/40 border border-transparent rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white block ml-1 drop-shadow-sm">Tipo de usuário *</label>
                  <div className="relative">
                    <select
                      name="userType"
                      required
                      value={formData.userType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 focus:bg-white/40 border border-transparent rounded-lg text-white focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all outline-none appearance-none cursor-pointer backdrop-blur-sm [&>option]:text-slate-800"
                    >
                      <option value="" className="text-slate-500">Selecione...</option>
                      {Object.values(UserType).map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronRight className="absolute right-4 top-3.5 text-white/70 rotate-90 pointer-events-none" size={18} />
                  </div>
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="px-8 py-3 bg-[#3a3372] hover:bg-[#4a418f] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center min-w-[140px]"
                  >
                    {status === 'sending' ? (
                        <Loader2 className="animate-spin mr-2" size={20} />
                    ) : (
                        "Próximo"
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                
                <div className="bg-white/20 p-6 rounded-xl border border-white/20 mb-8 backdrop-blur-sm">
                  <h3 className="text-white font-bold mb-1 text-lg drop-shadow-sm">Informações do Usuário</h3>
                  <p className="text-sm text-white/90 drop-shadow-sm">Para personalizar a experiência do teste.</p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white block ml-1 drop-shadow-sm">Nome do usuário *</label>
                  <input
                    type="text"
                    name="demoUserName"
                    required
                    value={formData.demoUserName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 focus:bg-white/40 border border-transparent rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  />
                  <div className="flex items-start mt-2 text-xs text-white/90 bg-white/10 p-3 rounded-md border border-white/10">
                     <Info size={14} className="text-white mr-2 flex-shrink-0 mt-0.5" />
                     <p className="leading-relaxed italic">Quando dizemos "usuário", nos referimos à pessoa que irá realizar as atividades do programa de desenvolvimento Neuralign.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white block ml-1 drop-shadow-sm">Idade do usuário *</label>
                  <input
                    type="number"
                    name="demoUserAge"
                    required
                    min="4"
                    max="99"
                    value={formData.demoUserAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 hover:bg-white/30 focus:bg-white/40 border border-transparent rounded-lg text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all outline-none backdrop-blur-sm"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#3a3372] hover:bg-[#4a418f] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex justify-center items-center"
                  >
                     Iniciar Demonstração <Send className="ml-2" size={18} />
                  </button>
                </div>

                <p className="text-center text-xs text-white/80 mt-4 drop-shadow-sm">
                  Você será redirecionado para o ambiente seguro do Neuralign.
                </p>
              </form>
            )}

          </div>
        </div>
    </div>
  );
};

export default Demo;