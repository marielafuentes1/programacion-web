import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://narvhxrkbenosgsprypy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hcnZoeHJrYmVub3Nnc3ByeXB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY2Nzk0NzcsImV4cCI6MjA0MjI1NTQ3N30.DU_oKKdzSHmsUdmTNDXBy-Z8EEwtGDjqaSin5pxAhZk"
);
export default supabase;
