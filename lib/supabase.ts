import { createClient } from "@supabase/supabase-js";

/*
  هذا الملف ينشئ اتصالاً بقاعدة بيانات Supabase.

  إذا تغير المشروع مستقبلاً فلن تحتاجي إلا لتعديل
  ملف .env.local فقط.
*/

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);