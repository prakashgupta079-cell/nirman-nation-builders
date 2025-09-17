import { 
  AlertTriangle, 
  BookOpen, 
  Smartphone, 
  FileText, 
  Users, 
  Brain,
  Globe,
  Info
} from 'lucide-react';

const Challenge = () => {
  const challenges = [
    {
      icon: AlertTriangle,
      title: "Low Civic Awareness",
      description: "Limited understanding of political processes and citizen responsibilities",
      color: "text-primary"
    },
    {
      icon: Brain,
      title: "Political Illiteracy", 
      description: "Lack of knowledge about governance, policies, and democratic participation",
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Weak Research Culture",
      description: "Limited research skills and evidence-based thinking among youth",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Limited Youth Engagement",
      description: "Young people disconnected from civic and political processes",
      color: "text-secondary"
    },
    {
      icon: Smartphone,
      title: "Social Media Misuse",
      description: "Passive consumption instead of constructive digital activism",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Lack of Geopolitical Awareness",
      description: "Limited understanding of global politics and international relations",
      color: "text-secondary"
    },
    {
      icon: Info,
      title: "Poor RTI Awareness",
      description: "Insufficient knowledge about Right to Information and transparency tools",
      color: "text-primary"
    },
    {
      icon: FileText,
      title: "Academic-Activism Gap",
      description: "Disconnect between academic learning and real-world application",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Challenges We <span className="text-gradient-patriot">Address</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nepal's youth face systemic challenges that limit their potential. 
            NIRMAN-77 identifies and tackles these barriers head-on.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => {
            const IconComponent = challenge.icon;
            return (
              <div 
                key={index}
                className="group bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-${challenge.color === 'text-primary' ? 'primary' : 'secondary'}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-8 h-8 ${challenge.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of young Nepalis who are transforming challenges into opportunities 
              for national progress and global engagement.
            </p>
            <button className="btn-activism">
              Join Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Challenge;