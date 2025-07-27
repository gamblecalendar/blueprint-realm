import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Calendar, Clock, Tag } from "lucide-react";

const Blog = () => {
  const categories = [
    { name: "All", active: true },
    { name: "React", active: false },
    { name: "TypeScript", active: false }, 
    { name: "Database", active: false },
    { name: "Security", active: false },
    { name: "Performance", active: false },
    { name: "CSS", active: false }
  ];

  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and scalable React applications with modern patterns and tools.",
      date: "1/15/2024",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "JavaScript", "Frontend"],
      image: "/lovable-uploads/c138b8bd-c33d-4af3-bf34-e56f87574c07.png"
    },
    {
      title: "Mastering TypeScript for Better Code Quality", 
      excerpt: "Discover how TypeScript can improve your development workflow and catch errors before they reach production.",
      date: "1/10/2024",
      readTime: "12 min read", 
      category: "TypeScript",
      tags: ["TypeScript", "JavaScript", "Development"],
      image: "/lovable-uploads/c138b8bd-c33d-4af3-bf34-e56f87574c07.png"
    },
    {
      title: "Database Design Patterns for Modern Apps",
      excerpt: "Explore essential database design patterns that will help you build efficient and maintainable data layers.",
      date: "1/5/2024", 
      readTime: "15 min read",
      category: "Database",
      tags: ["Database", "SQL", "Backend"],
      image: "/lovable-uploads/c138b8bd-c33d-4af3-bf34-e56f87574c07.png"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "React": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "TypeScript": "bg-blue-600/20 text-blue-300 border-blue-600/30", 
      "Database": "bg-green-500/20 text-green-400 border-green-500/30",
      "Security": "bg-red-500/20 text-red-400 border-red-500/30",
      "Performance": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "CSS": "bg-purple-500/20 text-purple-400 border-purple-500/30"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="min-h-screen py-8">
      {/* Header */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, programming best 
            practices, and emerging technologies.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 mb-12">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 bg-card border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              size="sm"
              className={`${
                category.active 
                  ? "bg-gradient-primary glow-effect" 
                  : "hover:bg-secondary"
              } transition-smooth`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="card-gradient overflow-hidden group cursor-pointer">
              {/* Post Image */}
              <div className="aspect-video bg-gradient-to-r from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`inline-block px-2 py-1 rounded-full text-xs border ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth mb-3 leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <div 
                      key={tagIndex}
                      className="flex items-center space-x-1 px-2 py-1 bg-secondary/50 rounded-md text-xs text-muted-foreground"
                    >
                      <Tag className="h-3 w-3" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;