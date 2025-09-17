import { ArrowRight, Users, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/nirman-hero.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="NIRMAN-77 Youth Movement" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
              NIRMAN<span className="text-primary">-77</span>
            </h1>
            <div className="w-32 h-1 bg-primary mx-auto mb-6" />
          </div>

          {/* Motto */}
          <div className="mb-8">
            <p className="text-2xl md:text-4xl font-bold text-white mb-4 text-glow-crimson">
              "One Goal, One Nation"
            </p>
            <p className="text-xl md:text-2xl text-white/90 font-semibold">
              77 Districts • One Movement
            </p>
          </div>

          {/* Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              A <span className="text-primary font-bold">youth-led movement</span> empowering 
              globally aware, socially responsible, and academically driven 
              <span className="text-secondary font-bold"> young leaders</span> across Nepal.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-primary mb-3" />
              <p className="text-3xl font-bold text-white">77</p>
              <p className="text-white/80">Districts</p>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-12 h-12 text-primary mb-3" />
              <p className="text-3xl font-bold text-white">One</p>
              <p className="text-white/80">Goal</p>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-12 h-12 text-primary mb-3" />
              <p className="text-3xl font-bold text-white">Global</p>
              <p className="text-white/80">Awareness</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('#about')}
              className="btn-activism group"
            >
              Learn Our Mission
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-outline-activism"
            >
              Join the Movement
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;