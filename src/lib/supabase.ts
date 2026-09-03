import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  '';

let supabaseInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }
  if (!supabaseInstance) {
    supabaseInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
  }
  return supabaseInstance;
}

export interface LeadInsertPayload {
  name: string;
  email: string;
  agency: string;
  recruitment_type: string;
  message?: string;
}

/**
 * Inserts a lead into the Supabase "leads" table.
 * Columns: name, email, agency, recruitment_type, message
 * (id, created_at, status will use database defaults)
 */
export async function submitLeadToSupabase(payload: LeadInsertPayload) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    throw new Error(
      'Supabase backend is not configured yet. Please configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in environment variables.'
    );
  }

  const record: Record<string, string> = {
    name: payload.name.trim(),
    email: payload.email.trim().toLowerCase(),
    agency: payload.agency.trim(),
    recruitment_type: payload.recruitment_type.trim(),
  };

  if (payload.message && payload.message.trim()) {
    record.message = payload.message.trim();
  }

  const { data, error } = await supabase
    .from('leads')
    .insert([record]);

  if (error) {
    console.error('Supabase leads insert error:', error);
    if (error.code === '42501' || error.message?.toLowerCase().includes('row-level security')) {
      throw new Error(
        'Database permission error (RLS): Anonymous inserts are blocked. Please enable an insert policy on the "leads" table in your Supabase dashboard.'
      );
    }
    throw new Error(error.message || 'Failed to submit form to database.');
  }

  return data;
}

/**
 * Invokes the Supabase Edge Function 'send-lead-email' to send an email notification.
 * Called only after successful database insert.
 */
export async function invokeSendLeadEmail(payload: LeadInsertPayload) {
  const supabase = getSupabaseClient();

  if (!supabase) {
    console.warn('Supabase client is not configured; skipping send-lead-email invocation.');
    return null;
  }

  const { data, error } = await supabase.functions.invoke('send-lead-email', {
    body: {
      name: payload.name.trim(),
      email: payload.email.trim(),
      agency: payload.agency.trim(),
      recruitment_type: payload.recruitment_type.trim(),
      message: payload.message ? payload.message.trim() : '',
    },
  });

  if (error) {
    console.error('Supabase send-lead-email Edge Function error:', error);
  } else {
    console.log('Supabase send-lead-email Edge Function invoked successfully:', data);
  }

  return { data, error };
}
