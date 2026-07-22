"use client";

import { useState } from "react";

const SUBJECTS = [
  "Solution SIH",
  "Solution RIS",
  "Solution PACS",
  "Vente d'équipement",
  "Contrat de maintenance",
  "Autre demande",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const org = data.get("organization");
    const subject = data.get("subject");
    const message = data.get("message");
    const email = data.get("email");

    const body = [
      `Nom : ${name}`,
      `Établissement : ${org}`,
      `E-mail : ${email}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:contact@rimed.ci?subject=${encodeURIComponent(
      `[Site web] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" name="name" required />
        <Field label="Établissement" name="organization" required />
      </div>
      <Field label="E-mail" name="email" type="email" required />

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-dark">
          Objet de la demande
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none focus:border-rimed"
        >
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Décrivez votre établissement, votre parc actuel et votre besoin."
          className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-slate/50 focus:border-rimed"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-rimed sm:w-auto"
      >
        Envoyer la demande
      </button>

      {sent && (
        <p className="text-sm text-slate" role="status">
          Votre client de messagerie s&apos;est ouvert avec votre demande
          pré-remplie — il ne reste qu&apos;à l&apos;envoyer.
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-slate-dark">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none placeholder:text-slate/50 focus:border-rimed"
      />
    </div>
  );
}
