export default function HowItWorks() {
  return (
    <main style={{ padding: "40px", fontFamily: "IBM Plex Sans, sans-serif" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        How the Sovereign Node Works
      </h1>

      <p style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        The Sovereign Node is a static, deterministic web infrastructure layer
        designed to support district-level automation and protocol-governed
        participation. It prioritizes stability, predictability, and
        operational clarity over experimentation or volatility.
      </p>

      <h2 style={{ marginTop: "40px", fontSize: "24px" }}>Static Architecture</h2>
      <p style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        The Node is implemented as a fully static export of a Next.js
        application. This means all surfaces are rendered ahead of time and
        served as static assets. The result is a predictable, cache-friendly,
        and infrastructure-light deployment model.
      </p>

      <ul style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        <li>No server-side runtime dependencies</li>
        <li>Deterministic builds and outputs</li>
        <li>Reduced operational complexity</li>
        <li>Improved reliability and performance</li>
      </ul>

      <h2 style={{ marginTop: "40px", fontSize: "24px" }}>Node Surfaces</h2>
      <p style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        The Sovereign Node is organized into clearly defined surfaces, each
        responsible for a specific aspect of the system. This separation of
        concerns ensures that changes are controlled, auditable, and aligned
        with protocol requirements.
      </p>

      <ul style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        <li>
          <strong>Home:</strong> High-level orientation to the Node and its role.
        </li>
        <li>
          <strong>Protocol:</strong> Participation rules and tier definitions.
        </li>
        <li>
          <strong>Recruitment:</strong> Onboarding and agent pathway.
        </li>
        <li>
          <strong>How It Works:</strong> Architectural and operational overview.
        </li>
      </ul>

      <h2 style={{ marginTop: "40px", fontSize: "24px" }}>District-Level Operation</h2>
      <p style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        Districts operate as independent zones that share a common protocol and
        infrastructure. The Node provides a consistent interface for deploying
        automation, managing participation, and scaling operations across
        multiple districts.
      </p>

      <ul style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        <li>Standardized participation across districts</li>
        <li>Shared protocol and governance</li>
        <li>Configurable automation per district</li>
        <li>Predictable expansion and scaling model</li>
      </ul>

      <h2 style={{ marginTop: "40px", fontSize: "24px" }}>Governance and Change Control</h2>
      <p style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        Governance is implemented through explicit documentation and controlled
        change processes. The Node is designed to minimize ad-hoc modification
        and ensure that all changes are intentional, reviewable, and aligned
        with the Protocol.
      </p>

      <ul style={{ maxWidth: "720px", lineHeight: "1.6" }}>
        <li>Documented roles and responsibilities</li>
        <li>Clear escalation and decision paths</li>
        <li>Versioned protocol and governance files</li>
        <li>Emphasis on stability over rapid iteration</li>
      </ul>
    </main>
  );
}
