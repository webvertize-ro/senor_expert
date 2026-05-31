import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://slmicagwqcjumyaipgjj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNsbWljYWd3cWNqdW15YWlwZ2pqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDIzMzc1MCwiZXhwIjoyMDk1ODA5NzUwfQ.ONdrEBTOxNNRzFyAf8x5WoNQ2g8CMCGz3WHZchKyOHE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
