import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_SHEET_WEBHOOK_URL = import.meta.env.VITE_GOOGLE_SHEET_WEBHOOK_URL || "";

const PreOrderModal = ({ isOpen, onClose }: PreOrderModalProps) => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    idType: "",
    nextOfKin: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = (): boolean => {
    if (!formData.fullName?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your full name",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.email?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.phone?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your phone number",
        variant: "destructive",
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const validateStep2 = (): boolean => {
    if (!formData.address?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your address",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.city?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter your city",
        variant: "destructive",
      });
      return false;
    }
    if (!formData.country?.trim()) {
      toast({
        title: "Missing Information",
        description: "Please select your country",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (step === 1) {
      if (!validateStep1()) return;
      setStep(2);
    } else if (step === 2) {
      if (!validateStep2()) return;
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (!GOOGLE_SHEET_WEBHOOK_URL) {
      toast({
        title: "Configuration Error",
        description: "Google Sheet webhook URL is not configured. Please add VITE_GOOGLE_SHEET_WEBHOOK_URL to your .env file.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `HTTP ${response.status}`);
      }

      setShowSuccess(true);
      toast({
        title: "Preorder Submitted",
        description: "Thank you! Your preorder has been received successfully.",
      });
    } catch (error) {
      console.error("Error submitting preorder:", error);
      toast({
        title: "Submission Failed",
        description:
          error instanceof Error ? error.message : "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep(1);
    setShowSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      idType: "",
      nextOfKin: "",
    });
    onClose();
  };

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-primary" />
            </div>
            <DialogTitle className="text-2xl mb-4">Thank You!</DialogTitle>
            <DialogDescription className="text-lg">
              Your preorder has been received — your journey with Ibac Farm Estates starts here.
            </DialogDescription>
            <Button variant="hero" size="lg" className="mt-6" onClick={handleClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Pre-Order Your Farm Estate</DialogTitle>
          <DialogDescription>
            Step {step} of 2 - {step === 1 ? "Personal Information" : "Location & ID"}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+233 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                />
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label htmlFor="address">Address *</Label>
                <Input
                  id="address"
                  placeholder="Street address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ghana">Ghana</SelectItem>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="idType">ID Type</Label>
                <Select value={formData.idType} onValueChange={(value) => handleInputChange("idType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select ID type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ghana-card">National ID</SelectItem>
                    <SelectItem value="drivers-license">Driver's License</SelectItem>
                    <SelectItem value="passport">Passport</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="nextOfKin">Next of Kin</Label>
                <Input
                  id="nextOfKin"
                  placeholder="Next of kin name"
                  value={formData.nextOfKin}
                  onChange={(e) => handleInputChange("nextOfKin", e.target.value)}
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-between gap-4">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)} disabled={isSubmitting}>
              Back
            </Button>
          )}
          <Button
            variant="hero"
            onClick={handleNext}
            className="ml-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : step === 2 ? (
              "Submit Preorder"
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderModal;
