import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'; // required for React Native

const supabaseUrl = 'https://wqtmhwlyovgyahjwoyyx.supabase.co'; // replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndxdG1od2x5b3ZneWFoandveXl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MDczNTUsImV4cCI6MjA2MDE4MzM1NX0.4JOshIgdSIamx49le4EKq1j1fEe2gXF4fW9oUE32UMo'; // replace with your Supabase anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
