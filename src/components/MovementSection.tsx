import { Card, CardContent } from "@/components/ui/card";

const MovementSection = () => {
  const movements = [
    {
      title: "Running & Jogging",
      description: "Lightweight fabrics that breathe with every stride",
      color: "from-primary to-primary-glow"
    },
    {
      title: "Yoga & Stretching", 
      description: "Flexible materials for perfect form and comfort",
      color: "from-accent to-accent/70"
    },
    {
      title: "High-Intensity Training",
      description: "Durable designs that keep up with your energy",
      color: "from-secondary to-secondary/80"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Happy
            <span className="bg-gradient-secondary bg-clip-text text-transparent"> Movement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every piece is designed to enhance your natural movement, bringing joy and confidence to your active lifestyle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {movements.map((movement, index) => (
            <Card key={index} className="card-athletic group overflow-hidden">
              <CardContent className="p-0">
                <div className={`h-48 bg-gradient-to-br ${movement.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-semibold text-xl text-white mb-2">
                      {movement.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    {movement.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-hero rounded-3xl p-12 text-white">
          <h3 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Move with Purpose
          </h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join thousands of athletes who've discovered the perfect balance of performance, comfort, and style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-white/80">Happy Athletes</div>
            </div>
            <div className="hidden sm:block w-px bg-white/30 mx-8"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-white/80">Sport Categories</div>
            </div>
            <div className="hidden sm:block w-px bg-white/30 mx-8"></div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-white/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovementSection;