import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const GOOGLE_FORM_URL = "https://forms.gle/5dj4p7nrW4VxCRfn9";

const ProjectsSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Upcoming <span className="text-primary">Projects</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Choose between our premium animal or crop farm estates
          </p>
        </div>

        <Tabs defaultValue="animal" className="animate-fade-in-up">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="animal">Animal Estate</TabsTrigger>
            <TabsTrigger value="crop">Crop Estate</TabsTrigger>
          </TabsList>

          <TabsContent value="animal">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="space-y-1 md:space-y-2">
                <CardTitle className="text-xl md:text-2xl text-primary">
                  50-Acre, 360° End-to-End Animal Farm Estate
                </CardTitle>
                <CardDescription className="text-sm md:text-base">Adaklu & Akropong Locations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">Livestock Options:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Broilers", "Layers", "Pigs", "Guinea Fowl", "Snails", "Fish Farming"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">Fully Serviced Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-muted-foreground">
                    <li>• Modern pens & enclosures</li>
                    <li>• Water & electricity supply</li>
                    <li>• Waste management systems</li>
                    <li>• Veterinary care & monitoring</li>
                    <li>• Climate-controlled storage</li>
                    <li>• Professional farm management</li>
                  </ul>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 md:p-6 space-y-2">
                  <p className="text-sm md:text-base text-foreground">
                    <span className="font-semibold">Reservation Slot:</span> GHS 5,000
                  </p>
                  <p className="text-sm md:text-base text-foreground">
                    <span className="font-semibold">Minimum Lease Period:</span> 5 years
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Professionally managed — no manual work required
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="hero" size="lg" className="w-full" onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}>
                  Pre-Order Now
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="crop">
            <Card className="border-2 border-primary/20 shadow-xl">
              <CardHeader className="space-y-1 md:space-y-2">
                <CardTitle className="text-xl md:text-2xl text-primary">
                  Premium Crop Farm Estates
                </CardTitle>
                <CardDescription className="text-sm md:text-base">Short-term & Long-term Options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">Short-term Crops:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Maize", "Soybean", "Chilli", "Cucumber", "Bell Pepper"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">Long-term Crops:</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Coconut", "Pineapple", "Cashew"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 md:px-4 md:py-2 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-2 md:mb-3 text-foreground">Infrastructure:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm md:text-base text-muted-foreground">
                    <li>• Irrigation systems</li>
                    <li>• Warehousing facilities</li>
                    <li>• Solar cold storage</li>
                    <li>• Roads & security</li>
                    <li>• Real-time farm tracking app</li>
                    <li>• Expert agronomist support</li>
                  </ul>
                </div>

                <div className="bg-secondary/50 rounded-lg p-4 md:p-6 space-y-2">
                  <p className="text-sm md:text-base text-foreground">
                    <span className="font-semibold">Reservation Slot:</span> GHS 5,000
                  </p>
                  <p className="text-sm md:text-base text-foreground">
                    <span className="font-semibold">Minimum Lease Period:</span> 5 years
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Fully managed from planting to harvest
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="hero" size="lg" className="w-full" onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}>
                  Pre-Order Now
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectsSection;
