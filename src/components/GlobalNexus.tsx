import { 
  Globe, 
  Users, 
  Heart, 
  Lightbulb, 
  ArrowRight,
  MapPin,
  Star,
  Handshake
} from 'lucide-react';

const GlobalNexus = () => {
  const connections = [
    {
      region: "South Asia",
      countries: ["India", "Bangladesh", "Sri Lanka", "Bhutan"],
      focus: "Regional cooperation and cultural exchange",
      color: "text-primary"
    },
    {
      region: "East Asia", 
      countries: ["China", "Japan", "South Korea", "Mongolia"],
      focus: "Economic partnerships and technological innovation",
      color: "text-secondary"
    },
    {
      region: "Europe",
      countries: ["UK", "Germany", "France", "Netherlands"],
      focus: "Democratic governance and educational exchange",
      color: "text-primary"
    },
    {
      region: "Americas",
      countries: ["USA", "Canada", "Brazil", "Mexico"],
      focus: "Youth leadership and social entrepreneurship",
      color: "text-secondary"
    }
  ];

  const features = [
    {
      icon: Heart,
      title: "Cross-Cultural Connections",
      description: "Building meaningful relationships with young leaders from diverse backgrounds and cultures worldwide."
    },
    {
      icon: Handshake,
      title: "Global Collaboration",
      description: "Joint projects, research initiatives, and advocacy campaigns that address shared global challenges."
    },
    {
      icon: Lightbulb,
      title: "Broadened Perspectives", 
      description: "Exposing Nepali youth to different viewpoints, ideas, and solutions from around the world."
    },
    {
      icon: Star,
      title: "Shared Learning",
      description: "Knowledge exchange programs that benefit both Nepali youth and their international counterparts."
    }
  ];

  return (
    <section id="global-nexus" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 gap-4 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="bg-primary rounded-full w-2 h-2 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <Globe className="w-16 h-16 text-primary mr-4 animate-float" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Global Youth <span className="text-gradient-patriot">Nexus</span>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connecting Nepali youth with young leaders worldwide to foster 
            cross-cultural understanding and collaborative solutions.
          </p>
        </div>

        {/* World Map Representation */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-primary/20">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Our Global Network
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {connections.map((connection, index) => (
                <div 
                  key={index}
                  className="group bg-muted/50 rounded-xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <MapPin className={`w-6 h-6 ${connection.color} mr-2`} />
                    <h4 className="text-lg font-bold text-foreground">
                      {connection.region}
                    </h4>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {connection.countries.map((country, countryIndex) => (
                        <span 
                          key={countryIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {connection.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Makes Our Network Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`group ${isEven ? 'card-activism' : 'card-governance'} card-hover-${isEven ? 'activism' : 'governance'} cursor-pointer`}
                >
                  <div className="flex items-start">
                    <div className={`w-12 h-12 rounded-full ${isEven ? 'bg-white/20' : 'bg-white/20'} flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">
                        {feature.title}
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Global Impact Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Youth Climate Summit
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Collaborated with 15 countries on climate action initiatives, 
                leading to policy recommendations for the UN Youth Climate Summit.
              </p>
              <div className="flex items-center text-primary text-sm font-semibold">
                <ArrowRight className="w-4 h-4 mr-2" />
                50+ participants
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-secondary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Digital Democracy Project
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Joint research with European universities on digital governance, 
                featured in international policy journals.
              </p>
              <div className="flex items-center text-secondary text-sm font-semibold">
                <ArrowRight className="w-4 h-4 mr-2" />
                5 countries involved
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border/50">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Cultural Exchange Program
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Monthly virtual exchanges with youth organizations across Asia, 
                sharing best practices and cultural insights.
              </p>
              <div className="flex items-center text-primary text-sm font-semibold">
                <ArrowRight className="w-4 h-4 mr-2" />
                Monthly sessions
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <Globe className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Global Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Connect with young leaders worldwide and be part of a movement 
              that's shaping the future through international collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-activism">
                <Users className="w-5 h-5 mr-2" />
                Connect Globally
              </button>
              <button className="btn-governance">
                <Globe className="w-5 h-5 mr-2" />
                Explore Network
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNexus;