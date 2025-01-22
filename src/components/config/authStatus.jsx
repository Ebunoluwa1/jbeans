// // src/components/AuthStatus.js
// import React, { useState, useEffect } from 'react';
// import { supabase } from './supabaseClient';
// import Signinpage from '../components/common/signinpage';
// // import SignOut from './SignOut';

// const AuthStatus = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = () => {
//       const currentUser = supabase.auth.user();
//       setUser(currentUser);
//     };

//     // Check user on mount
//     fetchUser();

//     // Listen for changes in user authentication status
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );

//     return () => {
//       authListener?.unsubscribe();
//     };
//   }, []);

//   return (
//     <div>
//       {user ? (
//         <>
//           <h3>Welcome, {user.email}</h3>
//           {/* <SignOut /> */}
//         </>
//       ) : (
//         <Signinpage />
//       )}
//     </div>
//   );
// };

// export default AuthStatus;
