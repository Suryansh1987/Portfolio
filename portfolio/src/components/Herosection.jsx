import { ArrowDown } from "lucide-react";

export const Herosection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">Suryansh</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Singh</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
                    I'm Suryansh Singh, a full-stack developer and founder of <strong>TheNerdishMic</strong>,
                    building modern web apps with the MERN stack and Next.js. I help startups and creators
                    turn ideas into scalable digital products.
                </p>
                <div>
                    <a href="#projects" className="cosmic-button">
                        View My work
                    </a>


                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
  <span className="text-sm text-muted-foreground">Scroll</span>
  <ArrowDown className="h-5 w-5 text-primary" />
</div>



        </section>
    );
};
