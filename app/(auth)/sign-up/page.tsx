"use client";

import { useState } from "react";
import { SignUpForm } from "./_components/sign-up-form";

export default function SignUpPage() {
  const [showForm, setShowForm] = useState(true);
  return (
    <div className="bg-black">
      {showForm && <SignUpForm onShowForm={setShowForm} />}
    </div>
  );
}
