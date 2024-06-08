import React from 'react'

type AdminDashboardCardProps = {
  title: string,
  subtitle: string,
  data: string
}

const AdminCard = ({title, subtitle, data}: AdminDashboardCardProps) => {
  return (<article>
      <header>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </header>
      <section>
        <p>{data}</p>
      </section>
    </article>
  )
}

export default AdminCard