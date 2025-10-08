import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Smartphone, CheckCircle2 } from "lucide-react";

interface PreOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PreOrderModal = ({ isOpen, onClose }: PreOrderModalProps) => {
  const [step, setStep] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPaymentMethod, setShowPaymentMethod] = useState(false);
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
    paymentMethod: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.fullName || !formData.email || !formData.phone) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.address || !formData.city || !formData.country) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields",
          variant: "destructive",
        });
        return;
      }
      setStep(3);
    }
  };

  const handlePaymentSelect = async (method: string) => {
    const finalFormData = { ...formData, paymentMethod: method };
    setFormData(finalFormData);
    setShowPaymentMethod(true);
    
    try {
      // Save to backend
      const response = await fetch(
        `https://sxpsqpojegxrnmqevhmq.supabase.co/functions/v1/save-preorder`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(finalFormData),
        }
      );

      const result = await response.json();
      
      if (result.success) {
        console.log('Pre-order saved successfully');
      } else {
        console.error('Failed to save pre-order:', result.error);
      }
    } catch (error) {
      console.error('Error submitting pre-order:', error);
    }

    setTimeout(() => {
      setShowPaymentMethod(false);
      setShowSuccess(true);
    }, 2000);
  };

  const handleClose = () => {
    setStep(1);
    setShowSuccess(false);
    setShowPaymentMethod(false);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      idType: "",
      nextOfKin: "",
      paymentMethod: "",
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
              Your reservation has been received — your journey with Ibac Farm Estates starts here.
            </DialogDescription>
            <Button variant="hero" size="lg" className="mt-6" onClick={handleClose}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  if (showPaymentMethod) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <div className="animate-spin w-16 h-16 border-4 border-primary border-t-transparent rounded-full mx-auto mb-6"></div>
            <DialogTitle className="text-xl">Processing Payment...</DialogTitle>
            <DialogDescription>
              {formData.paymentMethod === "card" ? "Redirecting to secure payment gateway..." : "Initializing Mobile Money payment..."}
            </DialogDescription>
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
            Step {step} of 3 - {step === 1 ? "Personal Information" : step === 2 ? "Location & ID" : "Payment Method"}
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
                    <SelectItem value="ghana-card">Ghana Card</SelectItem>
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

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Select your preferred payment method to complete your GHS 10,000 reservation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handlePaymentSelect("card")}
                  className="p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                >
                  <CreditCard className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-1">Credit Card</h3>
                  <p className="text-sm text-muted-foreground">Pay securely with your credit card</p>
                </button>
                <button
                  onClick={() => handlePaymentSelect("mobile")}
                  className="p-6 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all text-left"
                >
                  <Smartphone className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-lg mb-1">Mobile Money</h3>
                  <p className="text-sm text-muted-foreground">Pay with MTN, Vodafone, or AirtelTigo</p>
                </button>
              </div>
            </div>
          )}
        </div>

        {step < 3 && (
          <div className="flex justify-between gap-4">
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button variant="hero" onClick={handleNext} className="ml-auto">
              {step === 2 ? "Continue to Payment" : "Next"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PreOrderModal;
