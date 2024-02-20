import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Github Profile : ", profile);

        let userRole = "GitHub User";

        if (profile?.email === "jkkimunyi@gmail.com") {
          userRole = "admin";
        }

        return { ...profile, role: userRole };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      profile(profile) {
        console.log("Google Profile : ", profile);

        let userRole = "Google User";

        if (profile?.email === "jkkimunyi@gmail.com") {
          userRole = "admin";
        }

        return { ...profile, id: profile.sub, role: userRole };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
    },
  },
};
