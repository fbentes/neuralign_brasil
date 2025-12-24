import React from 'react';
import { Mail, Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/neuralign' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/neuralign' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/neuralign' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/neuralign' },
  ];

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
            
            {/* Social Media Links - Enhanced Visibility */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-accent hover:text-white text-slate-300 transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><a href="/" className="hover:text-accent transition-colors">Início</a></li>
              <li><a href="/sobre" className="hover:text-accent transition-colors">Sobre nós</a></li>
              <li><a href="/depoimentos" className="hover:text-accent transition-colors">Depoimentos</a></li>
              <li><a href="/planos" className="hover:text-accent transition-colors">Compre agora</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Contato</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:contato@neuralign.com.br" className="hover:text-white transition-colors">
                  contato@neuralign.com.br
                </a>
              </li>
              <li>
                <p>São Paulo, Brasil</p>
              </li>
            </ul>
          </div>

           {/* CTA Column */}
           <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-6">Comece Hoje</h4>
            <p className="text-slate-300 text-sm mb-4">Agende uma demonstração gratuita e conheça o método.</p>
            <a href="/lead-collection" className="inline-block bg-accent hover:bg-accentHover text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-lg hover:shadow-accent/25">
              Demonstração Gratuita
            </a>
           </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2025 Neuralign Brasil. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-white after:left-0 after:-bottom-1 hover:after:w-full after:transition-all">
              Política de Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;