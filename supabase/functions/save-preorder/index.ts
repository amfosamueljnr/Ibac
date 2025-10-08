import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.json();
    
    console.log('Received pre-order data:', formData);

    // Create CSV row
    const csvRow = [
      formData.fullName || '',
      formData.email || '',
      formData.phone || '',
      formData.address || '',
      formData.city || '',
      formData.country || '',
      formData.idType || '',
      formData.nextOfKin || '',
      formData.paymentMethod || '',
      new Date().toISOString()
    ].map(field => `"${String(field).replace(/"/g, '""')}"`).join(',');

    // For now, we'll log the CSV data
    // In production, you would save to a file storage system or database
    console.log('CSV Row:', csvRow);
    
    // You could also save to Supabase Storage or create a database table
    // For this implementation, we're logging it
    
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Pre-order saved successfully',
        data: formData 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error saving pre-order:', error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
