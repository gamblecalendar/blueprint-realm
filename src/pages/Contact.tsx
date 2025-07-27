import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Calendar, Send, Github, Linkedin, Twitter, MessageSquare, Heart } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@developer.com",
      description: "Send me an email anytime",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+1 (555) 123-4567",
      description: "Call for urgent matters",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA", 
      description: "Available for local meetups",
      color: "from-pink-500 to-purple-500"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Mon - Fri, 9AM - 6PM PST",
      description: "Best time to reach me", 
      color: "from-orange-500 to-red-500"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", color: "hover:text-gray-400" },
    { icon: Linkedin, name: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Twitter, name: "Twitter", color: "hover:text-sky-400" },
    { icon: MessageSquare, name: "Discord", color: "hover:text-indigo-400" }
  ];

  const quickResponses = [
    { icon: "🟢", text: "Usually responds in a few hours" },
    { icon: "📹", text: "Available for video calls" },
    { icon: "💖", text: "Open to collaborations" }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hello? I'd love to hear 
            from you. Let's create something amazing together!
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} className="card-gradient p-6 text-center group cursor-pointer">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-primary font-semibold mb-2">
                  {method.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {method.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="card-gradient p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold gradient-text mb-2">Send Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Name *
                  </label>
                  <Input 
                    placeholder="Your full name" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com" 
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Subject
                </label>
                <Input 
                  placeholder="What's this about?" 
                  className="bg-secondary/50 border-border focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell me about your project or just say hello..."
                  rows={6}
                  className="bg-secondary/50 border-border focus:border-primary resize-none"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full bg-gradient-primary hover:scale-105 transition-bounce glow-effect"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Additional Info */}
          <div className="space-y-6">
            {/* Quick Response */}
            <Card className="card-gradient p-6">
              <h3 className="text-xl font-bold gradient-text mb-4">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                I typically respond to messages within 24 hours. For urgent matters, feel free 
                to reach out via phone or schedule a quick call.
              </p>
              <div className="space-y-3">
                {quickResponses.map((response, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{response.icon}</span>
                    <span className="text-muted-foreground">{response.text}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="card-gradient p-6">
              <h3 className="text-xl font-bold gradient-text mb-4">Connect on Social</h3>
              <p className="text-muted-foreground mb-6">
                Follow me on social media for updates, tech insights, and behind-the-scenes 
                content.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button 
                      key={index}
                      variant="outline" 
                      className={`flex items-center justify-center space-x-2 h-12 ${social.color} transition-smooth`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{social.name}</span>
                    </Button>
                  );
                })}
              </div>
            </Card>

            {/* Let's Connect CTA */}
            <Card className="card-gradient p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold gradient-text mb-2">Let's Connect!</h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to connect with fellow developers, discuss new projects, 
                or just chat about the latest in tech. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-gradient-primary hover:scale-105 transition-bounce flex-1">
                  Send Message
                </Button>
                <Button variant="outline" className="hover:bg-secondary flex-1">
                  Schedule Call
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;