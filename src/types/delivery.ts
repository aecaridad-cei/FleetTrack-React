export type DeliveryStatus =
    | 'En Almacén'
    | 'En Reparto'
    | 'Entregado'
    | 'Incidencia'

export type DeliveryPriority = 'Baja' | 'Media' | 'Alta' | 'Urgente'

export type RouteNote =
    | 'asegurado'
    | 'entrega completada'
    | 'fragil'
    | 'normal'
    | 'prioritario'
    | 'revisar'
    | 'urgente'

export interface Delivery {
    trackingCode: string
    destinatario: string
    ciudadDestino: 'Barcelona' | 'Madrid' | 'Valencia'
    estado: DeliveryStatus
    prioridad: DeliveryPriority
    repartidor?: string
    intentosEntrega: number
    notasRuta: RouteNote[]
}
