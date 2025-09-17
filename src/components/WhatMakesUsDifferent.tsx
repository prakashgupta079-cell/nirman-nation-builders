import { 
  Zap, 
  Users, 
  Smartphone, 
  Heart, 
  ArrowRight,
  Lightbulb,
  Target,
  Globe
} from 'lucide-react';

const WhatMakesUsDifferent = () => {
  const differentiators = [
    {
      icon: Users,
      title: "Youth-Led, Not NGO-Style",
      description: "Grassroots movement by young people, for young people - authentic voices driving real change",
      details: [
        "Peer-to-peer leadership",
        "Student-driven initiatives", 
        "Youth decision-making",
        "Authentic representation"
      ]
    },
    {
      icon: Lightbulb,
      title: "Academia + Activism + Culture",
      description: "Unique blend of rigorous research, passionate advocacy, and youth culture engagement",
      details: [
        "Evidence-based activism",
        "Research-driven campaigns",
        "Academic credibility",
        "Cultural relevance"
      ]
    },
    {
      icon: Smartphone,
      title: "Social Media Into Action",
      description: "Transforming digital engagement into real-world impact and meaningful civic participation",
      details: [
        "Viral content with purpose",
        "Digital activism campaigns",
        "Online-to-offline mobilization",
        "Platform-based organizing"
      ]
    },
    {
      icon: Heart,
      title: "Local Pride, Global Awareness",
      description: "Celebrating Nepali identity while fostering international understanding and collaboration",
      details: [
        "Cultural heritage pride",
        "Global perspective",
        "International networks",
        "Local-global balance"
      ]
    }
  ];

  const impactMetrics = [
    {
      icon: Target,
      number: "77",
      label: "Districts Reached",
      description: "Nationwide presence"
    },
    {
      icon: Users,
      number: "10K+",
      label: "Youth Engaged", 
      description: "Active community"
    },
    {
      icon: Globe,
      number: "25+",
      label: "Global Partners",
      description: "International network"
    },
    {
      icon: Zap,
      number: "100+",
      label: "Campaigns Launched",
      description: "Proven impact"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Makes Us <span className="text-gradient-patriot">Different</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            NIRMAN-77 isn't just another organization - we're a movement that 
            redefines how young Nepalis engage with society, politics, and the world.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`group ${isEven ? 'card-activism' : 'card-governance'} card-hover-${isEven ? 'activism' : 'governance'} cursor-pointer`}
              >
                <div className="h-full">
                  {/* Header */}
                  <div className="flex items-start mb-6">
                    <div className={`w-16 h-16 rounded-full ${isEven ? 'bg-white/20' : 'bg-white/20'} flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center text-white/80">
                        <ArrowRight className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Metrics */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Growing Impact
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              
              return (
                <div 
                  key={index}
                  className="group text-center p-8 bg-muted/50 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">
                    {metric.number}
                  </p>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    {metric.label}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="text-center mb-16">
          <div className="bg-hero-gradient text-white rounded-2xl p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 gap-4 h-full">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-full w-2 h-2 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
            
            <div className="relative z-10">
              <Zap className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                The NIRMAN-77 Difference
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                We don't just talk about change - we <span className="text-yellow-300 font-bold">research it</span>, 
                we <span className="text-yellow-300 font-bold">create it</span>, and we 
                <span className="text-yellow-300 font-bold"> live it</span>. 
                Every meme, every research paper, every campaign is a step toward 
                a more engaged, aware, and empowered Nepal.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Be Part of Something Different?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join a movement that's rewriting the rules of youth engagement in Nepal. 
              Be part of the generation that bridges tradition and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-activism">
                <Zap className="w-5 h-5 mr-2" />
                Join the Revolution
              </button>
              <button className="btn-governance">
                <Heart className="w-5 h-5 mr-2" />
                Share Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;