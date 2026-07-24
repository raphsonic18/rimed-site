# Rimed — Site vitrine

Site vitrine Next.js 14 (App Router) + TypeScript + Tailwind CSS pour Rimed
(vente et maintenance d'équipements médicaux, industriels et consommables ;
solutions SIH, RIS, PACS).

## Structure

```
app/
  page.tsx              → Accueil
  solutions/page.tsx     → SIH, RIS, PACS
  equipements/page.tsx   → Vente, maintenance, consommables
  contact/page.tsx       → Formulaire de contact
  layout.tsx, globals.css
components/              → Header, Footer, Logo, Waveform, ServiceCard, ContactForm, Eyebrow
```

## Développement local

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000

## Déploiement sur Vercel

**Option 1 — via le site Vercel**
1. Poussez ce dossier sur un dépôt GitHub/GitLab/Bitbucket.
2. Sur [vercel.com](https://vercel.com), cliquez "Add New… → Project" et importez le dépôt.
3. Vercel détecte automatiquement Next.js — aucune configuration nécessaire.
4. Cliquez "Deploy".

**Option 2 — via la CLI**
```bash
npm i -g vercel
vercel        # déploiement de test
vercel --prod # déploiement en production
```

## À personnaliser avant mise en ligne

- **Coordonnées** : e-mail, téléphone et adresse sont à mettre à jour dans
  `components/Footer.tsx` et `app/contact/page.tsx`.
- **Logo** : `components/Logo.tsx` recrée le wordmark en CSS. Pour utiliser le
  fichier logo officiel, placez l'image dans `public/` et remplacez ce
  composant par un `<Image src="/logo.png" ... />` (import `next/image`).
- **Formulaire de contact** : `components/ContactForm.tsx` ouvre le client
  mail de l'utilisateur (`mailto:`) sans dépendance backend. Pour un envoi
  direct depuis le serveur, créez une route `app/api/contact/route.ts` et
  branchez un service comme Resend ou SendGrid (nécessite une clé API en
  variable d'environnement Vercel).
- **Nom de domaine** : une fois déployé, ajoutez votre domaine dans
  Vercel → Project Settings → Domains.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Polices : Space Grotesk (titres), IBM Plex Sans (texte), IBM Plex Mono (données techniques)
