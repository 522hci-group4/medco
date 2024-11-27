import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://abaltbdmryonpxldaiup.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiYWx0YmRtcnlvbnB4bGRhaXVwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjc0NTYyMSwiZXhwIjoyMDQ4MzIxNjIxfQ.cE_y2ADESkKKpt2FgZnHBl47Hqk1cNMQPsGzOgu_eVQ'

export const supabase = createClient(supabaseUrl, supabaseKey);
