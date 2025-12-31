import KanbanCard from '../components/KanbanCard'

const columns = {
  Backlog: [
    { title: 'SEO Audit', desc: 'Initial website audit' },
    { title: 'Ad Account Setup', desc: 'Google Ads onboarding' }
  ],
  Running: [
    { title: 'Lead Funnel', desc: 'Meta + landing page' },
    { title: 'Email Automation', desc: 'n8n workflow active' }
  ],
  Completed: [
    { title: 'Keyword Research', desc: 'Completed for Q1' }
  ]
}

export default function Workflows() {
  return (
    <div style={{ padding: "24px" }}>
      <h1 style={{ marginBottom: "16px" }}>Workflows</h1>

      <div style={{
        display: "flex",
        gap: "16px"
      }}>
        {Object.entries(columns).map(([name, cards]) => (
          <div key={name} style={{
            flex: 1,
            background: "#0f1426",
            border: "1px solid #1e2440",
            borderRadius: "10px",
            padding: "12px"
          }}>
            <div style={{
              fontWeight: 600,
              marginBottom: "12px"
            }}>
              {name}
            </div>

            {cards.map((c, i) => (
              <KanbanCard
                key={i}
                title={c.title}
                desc={c.desc}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
