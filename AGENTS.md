<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public legal documents in independent content routes with shared navigation so each page has its own metadata and is directly accessible.
- Keep the shared consent module unchanged; use optional-consent.ts for worldwide explicit opt-in, and set consent defaults before any measurement code to prevent implicit grants.
- Serve the site's fonts locally to avoid contacting a font provider before a visitor makes any choice.
- Do not equate consent controls with disabling native visitor analytics; that platform setting requires separate owner authorization.
