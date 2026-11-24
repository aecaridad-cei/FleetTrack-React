import { useEffect, useMemo, useRef, useState } from 'react'
import { delivery } from '../data/delivery'
import './DeliveryDashboard.css'

const filters = ['Todos', 'En Almacén', 'En Reparto', 'Entregado', 'Incidencia']

const statusClass = {
  'En Almacén': 'warehouse',
  'En Reparto': 'on-route',
  Entregado: 'delivered',
  Incidencia: 'issue',
}

function ParcelMark() {
  return (
    <svg
      aria-hidden="true"
      className="brand-mark"
      viewBox="0 0 32 32"
      shapeRendering="crispEdges"
    >
      <path fill="#f3bf52" d="M4 9 16 3l12 6v15l-12 6-12-6z" />
      <path fill="#d99638" d="m4 9 12 6v15L4 24z" />
      <path fill="#ffda79" d="m16 15 12-6v15l-12 6z" />
      <path fill="#f8e7b6" d="m11 5.5 12 6-3 1.5-12-6z" />
      <path fill="#18251f" d="M14 15h4v3h-4z" />
      <path fill="#18251f" d="M14 18h3v3h-3z" />
    </svg>
  )
}

function MetricCard({ label, value, detail, tone }) {
  return (
    <article className={`metric-card metric-${tone}`}>
      <span className="metric-label">{label}</span>
      <strong className="metric-value">{value}</strong>
      <span className="metric-detail">{detail}</span>
    </article>
  )
}

function DeliveryRow({ item }) {
  return (
    <article className="delivery-row">
      <div className="shipment-cell">
        <span className="shipment-icon" aria-hidden="true">
          <ParcelMark />
        </span>
        <span>
          <strong className="tracking-code">{item.trackingCode}</strong>
          <span className="shipment-recipient">{item.destinatario}</span>
        </span>
      </div>

      <div className="destination-cell">
        <span className="cell-label">Destino</span>
        <strong>{item.ciudadDestino}</strong>
        <span className="route-notes">
          {item.notasRuta.length > 0
            ? item.notasRuta.join(' · ')
            : 'Sin notas de ruta'}
        </span>
      </div>

      <div className="status-cell">
        <span className="cell-label">Estado</span>
        <span className={`status-badge status-${statusClass[item.estado]}`}>
          <span className="status-dot" />
          {item.estado}
        </span>
      </div>

      <div className="priority-cell">
        <span className="cell-label">Prioridad</span>
        <span className={`priority-label priority-${item.prioridad.toLowerCase()}`}>
          <span className="priority-mark" aria-hidden="true">◆</span>
          {item.prioridad}
        </span>
      </div>

      <div className="courier-cell">
        <span className="cell-label">Repartidor</span>
        <strong>{item.repartidor || 'Por asignar'}</strong>
        <span className="attempt-count">
          {item.intentosEntrega} {item.intentosEntrega === 1 ? 'intento' : 'intentos'}
        </span>
      </div>
    </article>
  )
}

export default function DeliveryDashboard() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [search, setSearch] = useState('')
  const searchInputRef = useRef(null)

  useEffect(() => {
    function focusSearch(event) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', focusSearch)
    return () => window.removeEventListener('keydown', focusSearch)
  }, [])

  const filteredDeliveries = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('es')

    return delivery.filter((item) => {
      const matchesStatus = activeFilter === 'Todos' || item.estado === activeFilter
      const searchableFields = [
        item.trackingCode,
        item.destinatario,
        item.ciudadDestino,
        item.estado,
        item.prioridad,
        item.repartidor || '',
      ]
      const matchesSearch =
        !query || searchableFields.some((field) => field.toLocaleLowerCase('es').includes(query))

      return matchesStatus && matchesSearch
    })
  }, [activeFilter, search])

  const deliveredCount = delivery.filter((item) => item.estado === 'Entregado').length
  const routeCount = delivery.filter((item) => item.estado === 'En Reparto').length
  const issueCount = delivery.filter((item) => item.estado === 'Incidencia').length

  return (
    <main className="dashboard-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="Parcel Quest, inicio">
          <span className="brand-icon"><ParcelMark /></span>
          <span className="brand-name">parcel<span>quest</span></span>
        </a>
        <div className="topbar-meta">
          <span className="live-indicator"><span /> Centro de operaciones</span>
          <span className="topbar-divider" />
          <span className="date-stamp">MAD · VLC · BCN</span>
        </div>
      </header>

      <section className="welcome-panel" aria-labelledby="page-title">
        <div className="welcome-copy">
          <span className="eyebrow"><span className="eyebrow-square" /> TABLERO DE MISIÓN / 01</span>
          <h1 id="page-title">Cada paquete,<br /><span>en su camino.</span></h1>
          <p>Un vistazo a todas las entregas de tu flota. La ciudad te espera.</p>
        </div>
        <div className="pixel-scene" aria-hidden="true">
          <div className="scene-sun" />
          <div className="scene-cloud cloud-one" />
          <div className="scene-cloud cloud-two" />
          <div className="scene-buildings">
            <span className="building building-one" />
            <span className="building building-two" />
            <span className="building building-three" />
            <span className="building building-four" />
          </div>
          <div className="scene-road"><span className="road-dashes" /></div>
          <div className="pixel-van">
            <span className="van-box" />
            <span className="van-window" />
            <span className="van-wheel wheel-one" />
            <span className="van-wheel wheel-two" />
          </div>
          <span className="scene-pixel pixel-a" />
          <span className="scene-pixel pixel-b" />
        </div>
        <div className="mission-stamp"><span>LVL</span><strong>01</strong></div>
      </section>

      <section className="metrics-grid" aria-label="Resumen de entregas">
        <MetricCard label="Paquetes en total" value={delivery.length} detail="en el sistema" tone="total" />
        <MetricCard label="En ruta" value={routeCount} detail="en movimiento" tone="route" />
        <MetricCard label="Entregados" value={deliveredCount} detail="misión cumplida" tone="done" />
        <MetricCard label="Incidencias" value={issueCount} detail="requieren atención" tone="issue" />
      </section>

      <section className="manifest-section" aria-labelledby="manifest-title">
        <div className="manifest-heading">
          <div>
            <span className="eyebrow">REGISTRO DE FLOTA</span>
            <h2 id="manifest-title">Manifiesto de entregas <span>{filteredDeliveries.length}</span></h2>
          </div>
          <label className="search-box">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <span className="visually-hidden">Buscar envíos</span>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Buscar envío, ciudad..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <kbd>Ctrl K</kbd>
          </label>
        </div>

        <div className="filter-bar" role="group" aria-label="Filtrar por estado">
          {filters.map((filter) => {
            const count = filter === 'Todos'
              ? delivery.length
              : delivery.filter((item) => item.estado === filter).length

            return (
              <button
                className={`filter-button${activeFilter === filter ? ' is-active' : ''}`}
                key={filter}
                type="button"
                aria-pressed={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
                <span>{count}</span>
              </button>
            )
          })}
        </div>

        <div className="delivery-list">
          <div className="list-header" aria-hidden="true">
            <span>Envío / Destinatario</span>
            <span>Destino</span>
            <span>Estado</span>
            <span>Prioridad</span>
            <span>Repartidor</span>
          </div>
          {filteredDeliveries.length > 0 ? (
            filteredDeliveries.map((item) => <DeliveryRow item={item} key={item.trackingCode} />)
          ) : (
            <div className="empty-state">
              <span className="empty-parcel"><ParcelMark /></span>
              <strong>No encontramos ese paquete</strong>
              <span>Prueba con otro nombre, código o ciudad.</span>
            </div>
          )}
        </div>
      </section>

      <footer className="dashboard-footer">
        <span><span className="footer-pixel" /> FIN DE TRANSMISIÓN</span>
        <span>PARCEL QUEST <span className="footer-divider">/</span> FLOTA 001</span>
      </footer>
    </main>
  )
}
