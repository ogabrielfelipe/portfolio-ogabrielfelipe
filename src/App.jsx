import { ArrowBigUp } from "lucide-react";
import { Linkedin } from "lucide-react";
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

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
        <section className="flex flex-row flex-wrap  bg-gradient-to-b from-blue-900 to-black py-60 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMCBMNjAgNjBNMTEgMCBMNjAgNDlNMCAxMSBMNDkgNjAiIHN0cm9rZT0iIzBBQzdFNCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')]"></div>
          </div>
          <div className=" max-w-[600px] flex flex-col text-center justify-center container mx-auto  relative z-10">
            <h1 className=" text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Pronto para transformar sua visão em realidade digital
            </h1>
            <p className="text-xl mb-8 text-blue-200">Desenvolvedor criativo que transforma desafios em oportunidades digitais, convertendo ideias em soluções tecnológicas.</p>
          </div>

          <div className=" w-[550px] flex flex-col text-center justify-center container mx-auto  relative z-10 p-1 bg-gradient-to-r from-blue-600 to-cyan-400">
            <img src="https://live.staticflickr.com/65535/54023588130_1fe3f31d99_b.jpg" alt="imagem gerada por inteligência a" />
            <span className="p-2 text-justify">Imagem gerada por Inteligência Artificial. <p></p>
              Prompt: Technology symbol, which has a futuristic appearance with purple colors and abstract</span>
          </div>

        </section>

        <section id="about" className="py-80 bg-gradient-to-b from-black to-blue-900">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Sobre mim
            </h2>
            <p className="text-lg  max-w-2xl mx-auto p-3 text-blue-200 text-justify ">
              Meu nome é Gabriel Felipe, sou formado em Sistemas de Informação e, terminando a Pós-Graduação em desenvolvimento Full-Stack com ênfase em JavaScript. Possuo mais de 3 anos de experiência na área de TI, sempre me dedicando estar buscando conhecimento com o intuito de me aperfeiçoar, minha abordagem combina criatividade técnica com um forte foco na resolução de problemas, permitindo-o enfrentar desafios complexos e entregar soluções de alta qualidade.
              <p className="p-2"></p>
              Acredito que a tecnologia tem o poder de transformar negócios e melhorar vidas. Minha missão é usar minhas habilidades e conhecimentos para criar soluções que façam a diferença, sempre buscando aprender e evoluir no processo.
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
                
                  {
                    title: "FunLearn",
                    description: "Este projeto tem como objetivo o desenvolvimento de uma ferramenta web, voltada para auxiliar professores e alunos no ensino e aprendizagem de diversos temas, ficando a critério do professor definir o tema e cadastrar as perguntas. O sistema visa trabalhar o conteúdo através de uma interface simples e intuitiva através de um jogo de perguntas e respostas, deixando assim, menos cansativa e mais divertida a aprendizagem.",
                    image: ["https://live.staticflickr.com/65535/54023233409_86eb8b6052_k.jpg","https://live.staticflickr.com/65535/54022891256_8a60a7bab1_k.jpg","https://live.staticflickr.com/65535/54023344105_a785e89b44_b.jpg","https://live.staticflickr.com/65535/54023233399_c295d4735f_k.jpg", "https://live.staticflickr.com/65535/54023233389_999bae2a90_k.jpg"],
                    github: "https://github.com/ogabrielfelipe/funLearn",
                    stack: ["React.js", "Next.js", "Styled Components", "SASS", "Node.js", "Express.js", "Prisma"],
                  },
                  {
                    title: "ws.service",
                    description: "O objetivo do sistema é para realizar o controllhe de HelpDesks, onde o administrador poderia cadastrar a competência (mês vigente) e com isso os usuários poderiam realizar o cadastro de solicitantes, os sistemas que prestam suporte e os módulos, na virada do mês o administrador fecharia a competência e não poderia ser realizado mais nenhuma cadastro na competência anterior e o mesmo poderia exportar os atendimentos dos usuários.",
                    image: [],
                    github: "https://github.com/ogabrielfelipe/ws.service",
                    stack: ["Python", "Flask", "Flask-SQLAlchemy"],
                  },
                  {
                    title: "In.Orbt",
                    description: "Projeto desenvolvido durante o evento da Rocketseat. O projeto teve como desafio desenvolver uma plataforma de metas, onde é possível cadastrar uma objetivo e colocar quantas vezes quer compri-lo na semana.",
                    image: ["https://live.staticflickr.com/65535/54023250133_9ab080c9f1_b.jpg", "https://live.staticflickr.com/65535/54023347429_9247a30d32_h.jpg", "https://live.staticflickr.com/65535/54023007971_5d8642f1fa_h.jpg"],
                    github: "https://github.com/ogabrielfelipe/nlw-in-orbit-frontend",
                    stack: ["React.js", "Tailwind", "Node.js", "Fastify", "DrizzleORM"],
                  },
                  {
                    title: "Daily Diet",
                    description: "Desafio durante o curso de Node.js da Rocketseat, onde consiste em desenvolver o backend (API) de um sistema de Dieta.",
                    image: [],
                    github: "https://github.com/ogabrielfelipe/desafio-02-daily-diet",
                    stack: ["Knex", "Node.js", "TypeScript", "Fastify"],
                  }

                
              ].map((service, index) => (
                <CarouselItem key={index} className="md:basis-2/2 lg:basis-1/3">
                  <div className="p-1">
                    <Dialog>
                      <Card className="bg-blue-900 bg-opacity-20 border-transparent rounded-lg shadow-lg">
                        <CardContent className="flex flex-col gap-3 aspect-square items-center justify-center p-6" >
                            
                          <h3 className="text-xl font-semibold mb-2 text-blue-300">{service.title}</h3>
                          <p className="text-blue-200">{service.description}</p>
                          <div className="flex flex-wrap flex-col gap-4">
                            <span className="text-blue-200 font-semibold text-l">Tecnologias Utilizadas:</span>
                            <div className="flex flex-wrap flex-row gap-4">
                              {service.stack.map((stack, index) => {
                                return (
                                  <span key={index} className="text-sm text-blue-50 bg-blue-700 rounded-sm p-2">{stack}</span>
                                )
                              })}
                            </div>
                            
                          </div>

                          <DialogContent className="bg-gradient-to-tr from-blue-900 to-blue-400 text-white border-transparent sm:max-w-screen-lg">                               
                              <DialogHeader>
                                <DialogTitle>Saiba mais sobre o projeto {service.title}</DialogTitle>
                              </DialogHeader>
                              <div className="flex flex-col gap-8 m-10">
                                <span>Galeria de Fotos:</span>
                                <Carousel>
                                  <CarouselContent>
                                    {service.image.map((image, index) =>(
                                      <CarouselItem key={index} className="flex justify-center">
                                        <img src={image} alt={service.title} />
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>

                                  <CarouselPrevious className=" bg-blue-900 bg-opacity-20" />
                                  <CarouselNext className=" bg-blue-900 bg-opacity-20"/>
                                </Carousel>
                                
                                <DialogFooter className="sm:justify-center">
                                  <DialogClose asChild>
                                    <button className="text-blue-50 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                                      <a href={service.github} target="_blank" rel="noopener noreferrer" className="flex flex-row " >
                                        <GitHubLogoIcon className="h-6 w-6 mr-3" />
                                        <span>Acesse o GitHub</span>
                                      </a>
                                    </button>
                                  </DialogClose>
                                </DialogFooter>
                                
                              </div>

                          </DialogContent>
                        </CardContent> 
                        <div className="flex justify-center mb-6">
                            {service.image.length !== 0 ? (
                              <DialogTrigger asChild className="justify-center">
                                <button className="text-blue-50 bg-gradient-to-r from-blue-500 to-cyan-400  px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                                  Saiba Mais!
                                </button>
                              </DialogTrigger>) :
                              <button className="text-blue-50 bg-gradient-to-r from-blue-500 to-cyan-400 px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                              <a href={service.github} target="_blank" rel="noopener noreferrer" className="flex flex-row " >
                                <GitHubLogoIcon className="h-6 w-6 mr-3" />
                                <span>Acesse o GitHub</span>
                              </a>
                            </button>
                            }
                          
                        </div>
                      </Card>


                    </Dialog>
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
                <Linkedin onClick={() => window.open("https://www.linkedin.com/in/ogabrielfelipe/")} className="h-8 w-8"/>
              </button>

              <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-cyan-500 transition shadow-lg hover:shadow-cyan-500/50">
                <GitHubLogoIcon onClick={() => window.open("https://github.com/ogabrielfelipe")} className="h-8 w-8"/>
              </button>
            </div>

            <span className="text-l flex flex-row gap-2 justify-center">Email: <a>ogabriel.v.felipe@gmail.com</a></span>
            
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
