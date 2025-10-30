import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://fclimsltaezbvjgakazu.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjbGltc2x0YWV6YnZqZ2FrYXp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4MTQwMzksImV4cCI6MjA3NzM5MDAzOX0.k6XzYihMkfeUszmp1Ug_BVzj8d8qMXttDpw-c7zY4aU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
