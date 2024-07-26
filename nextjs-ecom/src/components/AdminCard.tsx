import React from 'react'

type AdminDashboardCardProps = {
  title: string,
  subtitle: string,
  data: string
}

const AdminCard = ({title, subtitle, data}: AdminDashboardCardProps) => {
  return (<article>
      <header>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </header>
      <section>
        <p>{data}</p>
      </section>
    </article>
  )
}

export default AdminCard