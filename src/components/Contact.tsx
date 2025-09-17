import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Send,
  Users,
  MessageCircle,
  Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@nirman77.org",
      description: "Get in touch for collaborations"
    },
    {
      icon: Phone,
      title: "Call Us", 
      details: "+977-1-XXXXXXX",
      description: "Direct line for urgent matters"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kathmandu, Nepal",
      description: "Central coordination office"
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: "Facebook", url: "#", color: "hover:text-blue-600" },
    { icon: Instagram, name: "Instagram", url: "#", color: "hover:text-pink-600" },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "hover:text-blue-700" }
  ];

  const quickActions = [
    {
      icon: Users,
      title: "Join Our Team",
      description: "Become a core member",
      action: "Apply Now"
    },
    {
      icon: MessageCircle,
      title: "Start a Chapter",
      description: "Lead in your district",
      action: "Get Started"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Join our programs",
      action: "View Events"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get <span className="text-gradient-patriot">Involved</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to be part of Nepal's youth revolution? Connect with us and 
            start making a difference in your community and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your ideas, questions, or how you'd like to get involved..."
                    rows={6}
                    className="w-full"
                    required
                  />
                </div>
                
                <Button type="submit" className="btn-activism w-full">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Actions */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium">
                          {info.details}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Quick Actions
              </h3>
              
              <div className="space-y-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div key={index} className="group p-4 bg-muted/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer border border-border/30 hover:border-primary/30">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <IconComponent className="w-6 h-6 text-primary mr-3" />
                          <div>
                            <h4 className="font-semibold text-foreground">
                              {action.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              {action.description}
                            </p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          {action.action}
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-6">
                Follow Our Journey
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      className={`flex items-center justify-center p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors ${social.color} group`}
                    >
                      <IconComponent className="w-6 h-6 mr-2" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-hero-gradient text-white rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-white/90 mb-4 text-sm">
                Get the latest news, research, and event updates directly in your inbox.
              </p>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Every Voice Matters in NIRMAN-77
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you're a researcher, activist, content creator, or simply someone who 
              cares about Nepal's future - there's a place for you in our movement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-activism">
                <Users className="w-5 h-5 mr-2" />
                Join the Movement
              </button>
              <button className="btn-governance">
                <Calendar className="w-5 h-5 mr-2" />
                Attend Next Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;