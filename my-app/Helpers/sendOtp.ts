import { supabase } from '@/supabaseConfig';


const sendOtp = async (phoneNumber: string) => {
    const { error } = await supabase.auth.signInWithOtp({ phone: phoneNumber});
    if (error) {
      alert(error.message);
    } else {
      alert('OTP sent to your phone!');
    }
  }

  export default sendOtp;