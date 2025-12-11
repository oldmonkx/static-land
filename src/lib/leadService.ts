import { supabase } from '@/integrations/supabase/client';

interface LeadData {
  name: string;
  phone: string;
  email: string;
  source: string;
}

const PABBLY_WEBHOOK_URL = 'YOUR_PABBLY_WEBHOOK_URL';

export const saveLead = async (data: LeadData): Promise<{ success: boolean; error?: string }> => {
  try {
    const { error } = await supabase
      .from('leads')
      .insert({
        name: data.name,
        phone: data.phone,
        email: data.email,
        source: data.source,
      });

    if (error) {
      console.error('Supabase error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Lead save error:', err);
    return { success: false, error: 'Failed to save lead' };
  }
};

export const sendToWebhook = async (data: LeadData): Promise<void> => {
  try {
    await fetch(PABBLY_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors',
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error('Webhook error:', err);
  }
};

export const submitLead = async (data: LeadData): Promise<{ success: boolean }> => {
  // Save to Supabase (primary)
  const result = await saveLead(data);
  
  // Send to Pabbly webhook (backup)
  await sendToWebhook(data);
  
  // Return success even if Supabase fails (webhook is backup)
  return { success: true };
};
