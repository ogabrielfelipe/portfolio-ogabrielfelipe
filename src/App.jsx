import { Cpu } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowBigUp } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Globe } from "lucide-react";
import { Code } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GitHubLogoIcon } from "@radix-ui/react-icons";



const CodeFlowLogo = () => (
  <svg viewBox="0 0 100 100" width="50" height="50">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00F0FF" />
        <stop offset="100%" stopColor="#0077B6" />
      </linearGradient>
    </defs>
    <g fillRule="evenodd">
      <rect x="20" y="20" width="60" height="60" rx="12" fill="url(#grad1)" />
      <path d="M40 40h20v20H40z" fill="#FFFFFF" fillOpacity="0.8" />
      <path d="M60 40h20v20H60z" fill="#FFFFFF" fillOpacity="0.8" />
    </g>
  </svg>
);


function App() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Para uma rolagem suave
    });
  };

  

  return (
    <>
    <div className="min-h-screen bg-black text-white flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-cyan-400 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <CodeFlowLogo />
            <span className="ml-2 text-2xl font-bold">Gabriel Felipe</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-cyan-300 transition">Sobre</a></li>
              <li><a href="#services" className="hover:text-cyan-300 transition">Projetos</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-blue-900 to-black py-60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMCBMNjAgNjBNMTEgMCBMNjAgNDlNMCAxMSBMNDkgNjAiIHN0cm9rZT0iIzBBQzdFNCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')]"></div>
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Pronto para transformar sua visão em realidade digital
            </h1>
            <p className="text-xl mb-8 text-blue-200">Sou um desenvolvedor criativo independente de Cardoso Moreira, no sudeste do Brasil.</p>
            
          </div>
        </section>

        <section id="about" className="py-80 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Nossa Visão
            </h2>
            <p className="text-lg text-center max-w-2xl mx-auto text-blue-200">
              Na CodeFlow, estamos na vanguarda da revolução tecnológica, criando soluções que moldam o futuro digital. 
              Nossa expertise em desenvolvimento web e mobile transcende o convencional, entregando inovação em cada linha de código.
            </p>
          </div>
        </section>

        <section id="services" className="py-60 bg-black">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Projetos desenvolvidos
            </h2>
            
              <Carousel className="flex flex-wrap"> 
                <CarouselContent>
              {[
                { title: 'Desenvolvimento Web Avançado', description: "", icon: Code, linkGitHub: "https://github.com/ogabrielfelipe/05-nest-clean" },
                { title: 'Apps Mobile do Futuro', icon: Globe },
                { title: 'Inteligência Artificial & IoT', icon: Cpu },
                { title: 'Inteligência Artificial & IoT', icon: Cpu }
              ].map((service, index) => (
                <CarouselItem key={index} className="md:basis-2/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-blue-900 bg-opacity-20 p-6 border-transparent rounded-lg shadow-lg">
                      <CardContent className="flex flex-col gap-3 aspect-square items-center justify-center p-6" >
                        <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-semibold mb-2 text-blue-300">{service.title}</h3>
                        <p className="text-blue-200">Transformando ideias em realidade com tecnologias de ponta e soluções inovadoras para o mundo digital em constante evolução.</p>
                        <button onClick={() => window.open(service.linkGitHub)} className="flex flex-row gap-2 justify-center  bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                          <GitHubLogoIcon className="w-8 h-8"/>
                        </button>
                      </CardContent> 
                    </Card>
                    </div>
                </CarouselItem>                
              ))}            
                </CarouselContent>

                <CarouselPrevious className=" bg-blue-900 bg-opacity-20" />
                <CarouselNext className=" bg-blue-900 bg-opacity-20"/>
              </Carousel>

          </div>
        </section>

        <section id="contact" className="py-80 bg-gradient-to-t from-black to-blue-900">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Conecte-se Comigo
            </h2>
            <p className="text-lg mb-8 text-blue-200">Estou pronto para te ajudar!</p>
            <div className="flex flex-row gap-2 m-8 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                <Linkedin />
              </button>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                <Github />
              </button>
            </div>

            <span className="text-l flex flex-row gap-2 justify-center">Email: ogabriel.v.felipe@gmail.com</span>
            
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-blue-200 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Gabriel Felipe. Pronto para transformar sua visão em uma realidade digital.</p>
        </div>
      </footer>
    </div>

    <button 
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
    >
     <ArrowBigUp />
    </button>
    </>
  )
}

export default App
