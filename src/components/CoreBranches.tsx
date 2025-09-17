import { 
  Building, 
  Globe2, 
  BookOpen, 
  FileText,
  ArrowRight,
  Users,
  Scale,
  Landmark
} from 'lucide-react';

const CoreBranches = () => {
  const branches = [
    {
      icon: Building,
      title: "Domestic Politics",
      description: "Understanding Nepal's political landscape, governance structures, and policy-making processes",
      features: [
        "Local Government Analysis",
        "Policy Research & Advocacy", 
        "Electoral Processes",
        "Constitutional Studies"
      ],
      color: "primary",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: Globe2,
      title: "International Politics",
      description: "Exploring global affairs, diplomacy, and Nepal's role in the international community",
      features: [
        "Geopolitical Analysis",
        "Diplomatic Relations",
        "International Organizations",
        "Global Security Issues"
      ],
      color: "secondary", 
      gradient: "from-secondary to-secondary/80"
    },
    {
      icon: BookOpen,
      title: "History",
      description: "Preserving and understanding Nepal's rich historical heritage and cultural identity",
      features: [
        "Cultural Heritage Studies",
        "Historical Research",
        "Traditional Knowledge",
        "Nation Building Stories"
      ],
      color: "primary",
      gradient: "from-primary to-primary/80"
    },
    {
      icon: FileText,
      title: "Right to Information (RTI)",
      description: "Promoting transparency, accountability, and citizen access to government information",
      features: [
        "RTI Act Education",
        "Transparency Advocacy",
        "Government Accountability",
        "Information Access Tools"
      ],
      color: "secondary",
      gradient: "from-secondary to-secondary/80"
    }
  ];

  return (
    <section id="branches" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Core <span className="text-gradient-patriot">Branches</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Four specialized areas of focus that drive our research, advocacy, 
            and activism for a better Nepal.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {branches.map((branch, index) => {
            const IconComponent = branch.icon;
            
            return (
              <div 
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-2"
              >
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${branch.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
                  
                  <div className="relative z-10">
                    <IconComponent className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {branch.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {branch.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-primary" />
                    Key Focus Areas
                  </h4>
                  
                  <ul className="space-y-3">
                    {branch.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 mr-3 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                      branch.color === 'primary' 
                        ? 'bg-primary/10 text-primary hover:bg-primary hover:text-white' 
                        : 'bg-secondary/10 text-secondary hover:bg-secondary hover:text-white'
                    }`}>
                      Explore {branch.title}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <Landmark className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Research Community
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contribute to cutting-edge research in politics, history, and governance. 
              Build expertise while making a real impact on Nepal's future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-activism">
                <Users className="w-5 h-5 mr-2" />
                Join Research Team
              </button>
              <button className="btn-governance">
                <BookOpen className="w-5 h-5 mr-2" />
                Read Our Research
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBranches;