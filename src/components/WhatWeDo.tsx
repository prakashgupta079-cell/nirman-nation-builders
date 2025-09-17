import { 
  BookOpen, 
  Smile, 
  Megaphone, 
  GraduationCap, 
  PartyPopper, 
  Users,
  ArrowRight,
  Lightbulb,
  Share2,
  Calendar
} from 'lucide-react';

const WhatWeDo = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Research & Journals",
      description: "In-depth research on political, social, and historical issues affecting Nepal and the global community.",
      highlights: [
        "Policy Analysis Reports",
        "Academic Publications", 
        "Research Collaborations",
        "Evidence-Based Solutions"
      ],
      color: "primary",
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: Smile,
      title: "Memes & Gen Z Content",
      description: "Engaging young audiences through relatable content that makes complex political and social issues accessible.",
      highlights: [
        "Educational Memes",
        "Social Media Campaigns",
        "Viral Content Creation",
        "Youth-Centric Messaging"
      ],
      color: "secondary",
      bgColor: "bg-secondary", 
      textColor: "text-white"
    },
    {
      icon: Megaphone,
      title: "Digital Activism",
      description: "Leveraging digital platforms to drive social change and amplify youth voices in national conversations.",
      highlights: [
        "Online Campaigns",
        "Hashtag Movements",
        "Digital Advocacy",
        "Platform Mobilization"
      ],
      color: "primary",
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: GraduationCap,
      title: "Awareness Programs",
      description: "Educational initiatives to improve civic knowledge, political literacy, and social responsibility among youth.",
      highlights: [
        "Civic Education Workshops",
        "Political Literacy Programs",
        "RTI Training Sessions",
        "Community Outreach"
      ],
      color: "secondary",
      bgColor: "bg-secondary",
      textColor: "text-white"
    },
    {
      icon: PartyPopper,
      title: "Youth Fests",
      description: "Dynamic festivals and events that celebrate youth culture while promoting social and political engagement.",
      highlights: [
        "Cultural Celebrations",
        "Leadership Summits",
        "Networking Events",
        "Skill Building Sessions"
      ],
      color: "primary",
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: Users,
      title: "Global Collaboration",
      description: "Building bridges with international youth organizations and fostering cross-cultural understanding.",
      highlights: [
        "International Partnerships",
        "Student Exchanges",
        "Global Youth Networks",
        "Cross-Border Projects"
      ],
      color: "secondary",
      bgColor: "bg-secondary",
      textColor: "text-white"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What We <span className="text-gradient-patriot">Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From academic research to viral memes, we use every tool available 
            to engage, educate, and empower Nepal's youth.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Background */}
                <div className={`${activity.bgColor} p-8 h-full relative`}>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-8 -translate-x-8" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon & Title */}
                    <div className="mb-6">
                      <IconComponent className="w-12 h-12 text-white mb-4 group-hover:scale-110 transition-transform duration-300" />
                      <h3 className="text-2xl font-bold text-white">
                        {activity.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-white/90 leading-relaxed mb-6 flex-1">
                      {activity.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2">
                      {activity.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-white/80 text-sm">
                          <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* Learn More Button */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <button className="w-full py-3 px-4 bg-white/20 hover:bg-white/30 text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-muted-foreground">Research Papers</p>
          </div>
          <div className="text-center p-6 bg-secondary/10 rounded-xl border border-secondary/20">
            <Share2 className="w-12 h-12 text-secondary mx-auto mb-4" />
            <p className="text-3xl font-bold text-secondary">1M+</p>
            <p className="text-muted-foreground">Social Reach</p>
          </div>
          <div className="text-center p-6 bg-primary/10 rounded-xl border border-primary/20">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-3xl font-bold text-primary">10K+</p>
            <p className="text-muted-foreground">Youth Engaged</p>
          </div>
          <div className="text-center p-6 bg-secondary/10 rounded-xl border border-secondary/20">
            <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
            <p className="text-3xl font-bold text-secondary">100+</p>
            <p className="text-muted-foreground">Events Hosted</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Make an Impact?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our diverse initiatives and find the perfect way to contribute 
              to Nepal's youth movement. Every skill, every passion has a place in NIRMAN-77.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-activism">
                Get Involved
              </button>
              <button className="btn-governance">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;