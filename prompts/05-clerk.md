Read AGENTS.md first and follow it strictly.

Study the existing auth screens and current mocked auth flow, then replace the mock behavior with real JavaScript Native Sign in Clerk authentication by following the Clerk documentation provided below. 

Keep the existing UI and navigation flow intact. Implement email-based Sign Up, Sign In, social auth where supported, and verification code handling through Clerk. 

After successful verification or authentication, route the user in this order:
1. If unauthenticated, navigate to `/onboarding`.
2. If authenticated but no language is selected, navigate to `/language-selection`.
3. If authenticated and a language is selected, navigate to `/home`.

Do not change the screen design. If there is any need, ask me before implementation

---

(Here paste the latest [**Clerk documentation**](https://clerk.com/docs/expo/getting-started/quickstart))