// import { useEffect, useState } from "react";
// import { getApiUrl } from "@/utils/api";

// const TOKEN_STORAGE_KEY = "la_admin_token";
// const INITIAL_FORM = { email: "", password: "" };

// function formatDate(value) {
//     return new Intl.DateTimeFormat("en-IN", {
//         dateStyle: "medium",
//         timeStyle: "short",
//     }).format(new Date(value));
// }

// export default function AdminDashboard() {
//     const [formData, setFormData] = useState(INITIAL_FORM);
//     const [token, setToken] = useState(() => localStorage.getItem(TOKEN_STORAGE_KEY) || "");
//     const [contacts, setContacts] = useState([]);
//     const [adminEmail, setAdminEmail] = useState("");
//     const [status, setStatus] = useState({ type: "", message: "" });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [isLoadingContacts, setIsLoadingContacts] = useState(false);

//     useEffect(() => {
//         if (!token) {
//             return;
//         }

//         loadSession(token);
//         loadContacts(token);
//     }, [token]);

//     function handleChange(event) {
//         const { name, value } = event.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     }

//     function handleLogout() {
//         localStorage.removeItem(TOKEN_STORAGE_KEY);
//         setToken("");
//         setContacts([]);
//         setAdminEmail("");
//         setStatus({ type: "success", message: "Logged out successfully." });
//         setFormData(INITIAL_FORM);
//     }

//     async function loadSession(authToken) {
//         try {
//             const response = await fetch(getApiUrl("/api/admin/session"), {
//                 headers: {
//                     Authorization: `Bearer ${authToken}`,
//                 },
//             });

//             const payload = await response.json().catch(() => null);

//             if (!response.ok) {
//                 throw new Error(payload?.message || "Unable to validate your session.");
//             }

//             setAdminEmail(payload?.data?.admin?.email || "");
//         } catch (error) {
//             localStorage.removeItem(TOKEN_STORAGE_KEY);
//             setToken("");
//             setStatus({
//                 type: "error",
//                 message: error.message || "Your session expired. Please log in again.",
//             });
//         }
//     }

//     async function loadContacts(authToken) {
//         setIsLoadingContacts(true);

//         try {
//             const response = await fetch(getApiUrl("/api/contacts"), {
//                 headers: {
//                     Authorization: `Bearer ${authToken}`,
//                 },
//             });

//             const payload = await response.json().catch(() => null);

//             if (!response.ok) {
//                 throw new Error(payload?.message || "Unable to load contacts.");
//             }

//             setContacts(payload?.data || []);
//         } catch (error) {
//             setStatus({
//                 type: "error",
//                 message: error.message || "Unable to load contacts.",
//             });
//         } finally {
//             setIsLoadingContacts(false);
//         }
//     }

//     async function handleSubmit(event) {
//         event.preventDefault();
//         setIsSubmitting(true);
//         setStatus({ type: "", message: "" });

//         try {
//             const response = await fetch(getApiUrl("/api/admin/login"), {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     email: formData.email.trim(),
//                     password: formData.password,
//                 }),
//             });

//             const payload = await response.json().catch(() => null);

//             if (!response.ok) {
//                 throw new Error(payload?.message || "Unable to log in.");
//             }

//             const nextToken = payload?.data?.token;
//             const nextAdminEmail = payload?.data?.admin?.email || formData.email.trim();

//             localStorage.setItem(TOKEN_STORAGE_KEY, nextToken);
//             setToken(nextToken);
//             setAdminEmail(nextAdminEmail);
//             setFormData(INITIAL_FORM);
//             setStatus({ type: "success", message: "Admin login successful." });
//         } catch (error) {
//             setStatus({
//                 type: "error",
//                 message: error.message || "Unable to log in.",
//             });
//         } finally {
//             setIsSubmitting(false);
//         }
//     }

//     return (
//         <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(26,86,255,0.12),_transparent_38%),linear-gradient(180deg,_#f8fbff_0%,_#eef4ff_100%)] px-5 py-24 sm:px-8">
//             <div className="mx-auto flex max-w-6xl flex-col gap-8">
//                 <div className="rounded-[32px] border border-white/70 bg-white/85 p-8 shadow-[0_30px_80px_rgba(30,64,175,0.12)] backdrop-blur">
//                     <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cobalt">
//                         Admin Access
//                     </p>
//                     <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
//                         Contact inbox for Least Action
//                     </h1>
//                     <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
//                         Sign in to review every contact submission, including who reached out,
//                         their email, and the project brief they shared.
//                     </p>
//                 </div>

//                 {!token ? (
//                     <div className="mx-auto w-full max-w-lg rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">
//                         <h2 className="text-2xl font-semibold text-slate-900">Admin login</h2>
//                         <p className="mt-2 text-sm text-slate-500">
//                             Use the admin credentials configured in the backend environment.
//                         </p>

//                         <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
//                             <label className="block">
//                                 <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
//                                     Email
//                                 </span>
//                                 <input
//                                     className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/10"
//                                     name="email"
//                                     type="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     placeholder="admin@example.com"
//                                     required
//                                 />
//                             </label>

//                             <label className="block">
//                                 <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
//                                     Password
//                                 </span>
//                                 <input
//                                     className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cobalt focus:ring-2 focus:ring-cobalt/10"
//                                     name="password"
//                                     type="password"
//                                     value={formData.password}
//                                     onChange={handleChange}
//                                     placeholder="Enter your admin password"
//                                     required
//                                 />
//                             </label>

//                             {status.message && (
//                                 <p className={`text-sm ${status.type === "error" ? "text-rose-500" : "text-emerald-600"}`}>
//                                     {status.message}
//                                 </p>
//                             )}

//                             <button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className="w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
//                             >
//                                 {isSubmitting ? "Signing in..." : "Sign in"}
//                             </button>
//                         </form>
//                     </div>
//                 ) : (
//                     <div className="grid gap-6">
//                         <div className="flex flex-col gap-4 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between">
//                             <div>
//                                 <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
//                                     Signed in
//                                 </p>
//                                 <p className="mt-2 text-lg font-semibold text-slate-900">{adminEmail}</p>
//                             </div>

//                             <div className="flex flex-wrap gap-3">
//                                 <button
//                                     type="button"
//                                     onClick={() => loadContacts(token)}
//                                     className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-950"
//                                 >
//                                     Refresh contacts
//                                 </button>
//                                 <button
//                                     type="button"
//                                     onClick={handleLogout}
//                                     className="rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
//                                 >
//                                     Log out
//                                 </button>
//                             </div>
//                         </div>

//                         {status.message && (
//                             <p className={`text-sm ${status.type === "error" ? "text-rose-500" : "text-emerald-600"}`}>
//                                 {status.message}
//                             </p>
//                         )}

//                         <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-xl">
//                             <div className="border-b border-slate-100 px-6 py-5">
//                                 <h2 className="text-xl font-semibold text-slate-900">Submitted contacts</h2>
//                                 <p className="mt-1 text-sm text-slate-500">
//                                     {isLoadingContacts
//                                         ? "Loading contact submissions..."
//                                         : `${contacts.length} contact submission${contacts.length === 1 ? "" : "s"} found.`}
//                                 </p>
//                             </div>

//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full divide-y divide-slate-100">
//                                     <thead className="bg-slate-50">
//                                         <tr>
//                                             <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                                                 Name
//                                             </th>
//                                             <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                                                 Email
//                                             </th>
//                                             <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                                                 Project brief
//                                             </th>
//                                             <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
//                                                 Submitted
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="divide-y divide-slate-100">
//                                         {contacts.map((contact) => (
//                                             <tr key={contact._id} className="align-top">
//                                                 <td className="px-6 py-5 text-sm font-semibold text-slate-900">
//                                                     {contact.name}
//                                                 </td>
//                                                 <td className="px-6 py-5 text-sm text-slate-600">
//                                                     <a className="hover:text-cobalt" href={`mailto:${contact.email}`}>
//                                                         {contact.email}
//                                                     </a>
//                                                 </td>
//                                                 <td className="px-6 py-5 text-sm leading-6 text-slate-600">
//                                                     {contact.projectBrief}
//                                                 </td>
//                                                 <td className="px-6 py-5 text-sm text-slate-500">
//                                                     {formatDate(contact.createdAt)}
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                         {!isLoadingContacts && contacts.length === 0 && (
//                                             <tr>
//                                                 <td colSpan="4" className="px-6 py-10 text-center text-sm text-slate-500">
//                                                     No contact messages yet.
//                                                 </td>
//                                             </tr>
//                                         )}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

import { useEffect, useState } from "react";
import { getApiUrl } from "@/utils/api";

const TOKEN_STORAGE_KEY = "la_admin_token";
const INITIAL_FORM = { email: "", password: "" };

function formatDate(value) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

function StatusBadge({ type, message }) {
  if (!message) return null;

  const isError = type === "error";

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${
        isError
          ? "border-red-200 bg-red-50 text-red-500"
          : "border-emerald-200 bg-emerald-50 text-emerald-500"
      }`}
    >
      <span className="text-base">{isError ? "✕" : "✓"}</span>
      <span>{message}</span>
    </div>
  );
}

export default function AdminDashboard() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [token, setToken] = useState(
    () => localStorage.getItem(TOKEN_STORAGE_KEY) || ""
  );
  const [contacts, setContacts] = useState([]);
  const [adminEmail, setAdminEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingContacts, setIsLoadingContacts] = useState(false);

  useEffect(() => {
    if (!token) return;
    loadSession(token);
    loadContacts(token);
  }, [token]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleLogout() {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    setToken("");
    setContacts([]);
    setAdminEmail("");
    setFormData(INITIAL_FORM);
    setStatus({ type: "success", message: "Session terminated." });
  }

  async function loadSession(authToken) {
    try {
      const response = await fetch(getApiUrl("/api/admin/session"), {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.message || "Unable to validate session.");
      }

      setAdminEmail(payload?.data?.admin?.email || "");
    } catch (error) {
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      setToken("");
      setStatus({
        type: "error",
        message: error.message || "Session expired. Please login again.",
      });
    }
  }

  async function loadContacts(authToken) {
    setIsLoadingContacts(true);
    try {
      const response = await fetch(getApiUrl("/api/contacts"), {
        headers: { Authorization: `Bearer ${authToken}` },
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.message || "Unable to load contacts.");
      }

      setContacts(payload?.data || []);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to load contacts.",
      });
    } finally {
      setIsLoadingContacts(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(getApiUrl("/api/admin/login"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email.trim(),
          password: formData.password,
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.message || "Unable to login.");
      }

      const nextToken = payload?.data?.token;
      const nextAdminEmail =
        payload?.data?.admin?.email || formData.email.trim();

      localStorage.setItem(TOKEN_STORAGE_KEY, nextToken);
      setToken(nextToken);
      setAdminEmail(nextAdminEmail);
      setFormData(INITIAL_FORM);
      setStatus({ type: "success", message: "Authentication successful." });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to login.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const avatarInitial = adminEmail ? adminEmail[0].toUpperCase() : "A";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 text-slate-800">
      <nav className="sticky top-0 z-50 border-b border-indigo-100 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white shadow-md">
              LA
            </div>
            <div>
              <p className="text-sm font-semibold">Least Action</p>
              <p className="text-xs text-slate-400">Admin Console</p>
            </div>
          </div>

          {token && adminEmail && (
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
              <span className="font-mono text-sm text-slate-500">
                {adminEmail}
              </span>
            </div>
          )}
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Admin Console
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Inbox</span>
          </h1>

          <p className="mt-4 max-w-2xl text-slate-500">
            Review inbound project inquiries, manage contact submissions, and
            respond to prospective clients.
          </p>
        </div>

        {!token ? (
          <div className="max-w-md rounded-3xl border border-indigo-100 bg-white p-8 shadow-xl shadow-indigo-100/50">
            <h2 className="text-2xl font-semibold">Sign in to continue</h2>
            <p className="mt-2 text-sm text-slate-500">
              Enter your admin credentials to access the contact inbox.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@example.com"
                  required
                  className="w-full rounded-xl border border-indigo-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••••"
                  required
                  className="w-full rounded-xl border border-indigo-100 bg-slate-50 px-4 py-3 outline-none transition focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                />
              </div>

              {status.message && <StatusBadge type={status.type} message={status.message} />}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Authenticating..." : "Sign In"}
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Total Submissions</p>
                <h3 className="mt-3 text-3xl font-bold">{isLoadingContacts ? "—" : contacts.length}</h3>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Status</p>
                <div className="mt-3 flex items-center gap-2 text-emerald-500 font-semibold">
                  <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </div>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Session</p>
                <p className="mt-3 truncate font-mono text-sm text-slate-500">{adminEmail}</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border bg-white p-6 shadow-sm md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 font-bold text-white">
                  {avatarInitial}
                </div>
                <div>
                  <p className="font-medium">{adminEmail}</p>
                  <p className="text-sm text-slate-400">Active Session · Admin</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => loadContacts(token)}
                  className="rounded-xl border px-5 py-2.5 font-medium hover:bg-slate-50"
                >
                  Refresh
                </button>
                <button
                  onClick={handleLogout}
                  className="rounded-xl border border-red-200 bg-red-50 px-5 py-2.5 font-medium text-red-500 hover:bg-red-100"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {status.message && <StatusBadge type={status.type} message={status.message} />}

            <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
              <div className="flex items-center justify-between border-b px-6 py-5">
                <h2 className="text-lg font-semibold">Submitted Contacts</h2>
                <span className="text-sm text-slate-400">
                  {contacts.length} records
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead className="bg-slate-50">
                    <tr>
                      {["Name", "Email", "Project Brief", "Submitted"].map((item) => (
                        <th
                          key={item}
                          className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
                        >
                          {item}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {isLoadingContacts ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-16 text-center text-slate-400">
                          Fetching records...
                        </td>
                      </tr>
                    ) : contacts.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="px-6 py-16 text-center text-slate-400">
                          No submissions yet
                        </td>
                      </tr>
                    ) : (
                      contacts.map((contact) => (
                        <tr key={contact._id} className="border-t hover:bg-indigo-50/40">
                          <td className="px-6 py-5 font-semibold">{contact.name}</td>
                          <td className="px-6 py-5">
                            <a
                              href={`mailto:${contact.email}`}
                              className="font-mono text-indigo-600 hover:underline"
                            >
                              {contact.email}
                            </a>
                          </td>
                          <td className="max-w-md px-6 py-5 text-slate-600">
                            {contact.projectBrief}
                          </td>
                          <td className="px-6 py-5">
                            <span className="rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-slate-500">
                              {formatDate(contact.createdAt)}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
