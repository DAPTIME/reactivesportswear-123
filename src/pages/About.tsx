import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              About
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Reactive</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe movement should be joyful, effortless, and unrestricted. Our mission is to create lightweight athletic wear that moves with you, not against you.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Founded in 2020, Reactive Sportswear emerged from a simple observation: athletes needed clothing that celebrated movement, not constrained it. We started with a single mission—to create the lightest, most comfortable athletic wear that brings joy to every workout.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              What began in a small studio has grown into a movement of happy athletes who refuse to be weighed down. Every piece we design is crafted with the belief that when you feel lighter, you move better, and when you move better, you feel happier.
            </p>
            <p className="text-muted-foreground text-lg">
              Today, Reactive Sportswear serves thousands of athletes worldwide, from casual joggers to competitive runners, all united by a love for movement and the pursuit of their personal best.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
            <p className="font-display text-2xl text-center text-muted-foreground italic">
              "Movement should bring joy, not restriction."
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
          Our Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Joy in Movement</h3>
            <p className="text-muted-foreground">
              We design for happiness. Every product should make you smile when you move.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Performance First</h3>
            <p className="text-muted-foreground">
              Lightweight doesn't mean compromising on performance. We optimize both.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Community Driven</h3>
            <p className="text-muted-foreground">
              Our athletes inspire our designs. We listen, learn, and evolve together.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Quality Promise</h3>
            <p className="text-muted-foreground">
              Every stitch, every fabric choice—we're committed to excellence in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-center text-foreground">
          Our Team
        </h2>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          We're a diverse team of designers, engineers, athletes, and dreamers united by one goal: making athletic wear that brings joy to every movement. From fabric scientists to professional athletes, every team member contributes their unique expertise to create products that perform.
        </p>
        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4"></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Design Team</h3>
            <p className="text-muted-foreground text-sm">Creating beauty in motion</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4"></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Innovation Lab</h3>
            <p className="text-muted-foreground text-sm">Pushing boundaries of performance</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-4"></div>
            <h3 className="font-display font-semibold text-lg text-foreground">Athlete Partners</h3>
            <p className="text-muted-foreground text-sm">Real-world testing and feedback</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
