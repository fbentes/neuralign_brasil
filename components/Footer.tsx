import React from 'react';
import { Mail, Facebook, Linkedin, Youtube, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8" id="contato">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Neuralign</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Transformando vidas através da neurociência aplicada e tecnologia cognitiva avançada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="/sobre" className="hover:text-white transition-colors">O Programa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ciência</a></li>
              <li><a href="/depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:contato@neuralign.com.br" className="hover:text-white transition-colors">
                  contato@neuralign.com.br
                </a>
              </li>
              <li>
                <p>São Paulo, Brasil</p>
              </li>
            </ul>
          </div>

           {/* Newsletter / CTA */}
           <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Agende agora</h4>
            <p className="text-slate-300 text-sm mb-4">Descubra como podemos ajudar no desenvolvimento cognitivo.</p>
            <a href="/lead-collection" className="inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors border border-white/20">
              Iniciar Demonstração
            </a>
           </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2025 Neuralign Brasil. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;