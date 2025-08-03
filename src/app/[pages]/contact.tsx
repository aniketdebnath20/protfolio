import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/usescrollanimation";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "debnathaniket@41gmail.com",
      link: "https://mail.google.com/mail/u/0/"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "********",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Mumbai",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-background opacity-30"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-glow-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-accent rounded-full blur-3xl opacity-10 animate-glow-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-20 transition-all duration-800 ${
            titleAnimation.isVisible 
              ? 'animate-fade-in-up opacity-100' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
              Lets Connect
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I d love to hear from you. 
            Lets create something amazing together.
          </p>
        </div>

        <div 
          ref={contentAnimation.ref}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 ${
            contentAnimation.isVisible 
              ? 'animate-slide-in-left opacity-100' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/10 shadow-elegant hover:shadow-glow transition-all duration-500">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Lets Talk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I m always interested in hearing about new opportunities, 
                  creative projects, or just having a friendly chat about web development.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center space-x-6 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                      <div className="flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-xl text-primary-foreground shadow-lg group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                        <a 
                          href={info.link}
                          className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-300 block"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className={`p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/10 shadow-elegant hover:shadow-glow transition-all duration-700 ${
            contentAnimation.isVisible 
              ? 'animate-slide-in-right opacity-100' 
              : 'opacity-0 translate-x-8'
          }`}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Send className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">Send a Message</h3>
              </div>
              <p className="text-muted-foreground">
                Fill out the form below and I ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="h-12 bg-background/50 border-2 border-border/50 hover:border-primary/30 focus:border-primary/50 focus:shadow-glow transition-all duration-300"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                    className="h-12 bg-background/50 border-2 border-border/50 hover:border-primary/30 focus:border-primary/50 focus:shadow-glow transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-sm font-semibold text-foreground">Project Details</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements you have in mind..."
                  rows={6}
                  required
                  className="bg-background/50 border-2 border-border/50 hover:border-primary/30 focus:border-primary/50 focus:shadow-glow transition-all duration-300 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-14 text-lg font-semibold shadow-lg hover:shadow-glow transition-all duration-300 group" 
                variant="hero"
                size="lg"
              >
                <Send className="mr-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;