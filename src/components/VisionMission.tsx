import { Eye, Target, Heart, Lightbulb, Users, Globe } from 'lucide-react';

const VisionMission = () => {
  const missionPoints = [
    {
      icon: Lightbulb,
      title: "Foster Civic & Research Knowledge",
      description: "Building analytical thinking and evidence-based decision making"
    },
    {
      icon: Heart,
      title: "Strengthen Cultural & Historical Understanding", 
      description: "Deepening appreciation for Nepal's heritage and identity"
    },
    {
      icon: Globe,
      title: "Promote Political Engagement",
      description: "Encouraging active participation in domestic and international politics"
    },
    {
      icon: Users,
      title: "Connect Nepali Youth Globally",
      description: "Building networks with young leaders worldwide"
    },
    {
      icon: Target,
      title: "Cultivate Transparency & Accountability",
      description: "Promoting good governance and citizen oversight"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Section */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <Eye className="w-12 h-12 text-primary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-primary">Vision</span>
            </h2>
          </div>
          
          <div className="bg-hero-gradient text-white rounded-2xl p-12 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold leading-relaxed">
              To build a <span className="text-yellow-300">globally aware</span>, 
              <span className="text-yellow-300"> socially responsible</span>, and 
              <span className="text-yellow-300"> academically driven</span> youth generation in Nepal.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <Target className="w-12 h-12 text-secondary mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our <span className="text-secondary">Mission</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionPoints.map((point, index) => {
              const IconComponent = point.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`group ${isEven ? 'card-activism' : 'card-governance'} card-hover-${isEven ? 'activism' : 'governance'} cursor-pointer`}
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`w-16 h-16 rounded-full ${isEven ? 'bg-white/20' : 'bg-white/20'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">
                      {point.title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed flex-1">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Vision Statement */}
        <div className="mt-20 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-4xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Why It Matters
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nepal's future depends on empowered youth who understand both their local responsibilities 
              and global opportunities. Through research, activism, and cultural pride, we're building 
              the foundation for a stronger, more connected Nepal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;