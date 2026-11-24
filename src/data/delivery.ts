import type { Delivery } from '../types/delivery'

export const delivery: Delivery[] = [
            {
                trackingCode: 'ENV001',
                destinatario: 'Carlos García',
                ciudadDestino: 'Madrid',
                estado: 'En Almacén',
                prioridad: 'Media',
                repartidor: 'Pedro López',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV002',
                destinatario: 'Ana Martínez',
                ciudadDestino: 'Valencia',
                estado: 'Incidencia',
                prioridad: 'Urgente',
                intentosEntrega: 2,
                notasRuta: ['urgente', 'revisar']
            },
            {
                trackingCode: 'ENV003',
                destinatario: 'Luis Fernández',
                ciudadDestino: 'Barcelona',
                estado: 'En Reparto',
                prioridad: 'Alta',
                repartidor: 'Juan Pérez',
                intentosEntrega: 1,
                notasRuta: ['fragil', 'asegurado', 'prioritario']
            },
            {
                trackingCode: 'ENV004',
                destinatario: 'María Sánchez',
                ciudadDestino: 'Valencia',
                estado: 'En Almacén',
                prioridad: 'Baja',
                intentosEntrega: 0,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV005',
                destinatario: 'Javier Ruiz',
                ciudadDestino: 'Madrid',
                estado: 'Entregado',
                prioridad: 'Alta',
                repartidor: 'Pedro López',
                intentosEntrega: 1,
                notasRuta: ['entrega completada']
            },

            // ENVÍOS 6-15
            {
                trackingCode: 'ENV006',
                destinatario: 'Laura Gómez',
                ciudadDestino: 'Barcelona',
                estado: 'Incidencia',
                prioridad: 'Media',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 3,
                notasRuta: ['revisar', 'fragil']
            },
            {
                trackingCode: 'ENV007',
                destinatario: 'David Martín',
                ciudadDestino: 'Valencia',
                estado: 'En Reparto',
                prioridad: 'Urgente',
                repartidor: 'Juan Pérez',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV008',
                destinatario: 'Elena Torres',
                ciudadDestino: 'Madrid',
                estado: 'En Almacén',
                prioridad: 'Baja',
                intentosEntrega: 0,
                notasRuta: []
            },
            {
                trackingCode: 'ENV009',
                destinatario: 'Sergio Navarro',
                ciudadDestino: 'Barcelona',
                estado: 'Entregado',
                prioridad: 'Media',
                repartidor: 'Pedro López',
                intentosEntrega: 2,
                notasRuta: ['asegurado']
            },
            {
                trackingCode: 'ENV010',
                destinatario: 'Lucía Romero',
                ciudadDestino: 'Valencia',
                estado: 'Incidencia',
                prioridad: 'Alta',
                intentosEntrega: 3,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV011',
                destinatario: 'Pablo Moreno',
                ciudadDestino: 'Madrid',
                estado: 'En Reparto',
                prioridad: 'Urgente',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 1,
                notasRuta: ['prioritario']
            },
            {
                trackingCode: 'ENV012',
                destinatario: 'Carmen Jiménez',
                ciudadDestino: 'Barcelona',
                estado: 'En Almacén',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 0,
                notasRuta: ['fragil']
            },
            {
                trackingCode: 'ENV013',
                destinatario: 'Alberto Romero',
                ciudadDestino: 'Valencia',
                estado: 'Entregado',
                prioridad: 'Baja',
                repartidor: 'Pedro López',
                intentosEntrega: 1,
                notasRuta: ['asegurado']
            },
            {
                trackingCode: 'ENV014',
                destinatario: 'Isabel Castro',
                ciudadDestino: 'Madrid',
                estado: 'Incidencia',
                prioridad: 'Urgente',
                intentosEntrega: 2,
                notasRuta: ['revisar']
            },
            {
                trackingCode: 'ENV015',
                destinatario: 'Raúl Ortega',
                ciudadDestino: 'Barcelona',
                estado: 'En Reparto',
                prioridad: 'Alta',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },

            // ENVÍOS 16-25
            {
                trackingCode: 'ENV016',
                destinatario: 'Marta Delgado',
                ciudadDestino: 'Valencia',
                estado: 'En Almacén',
                prioridad: 'Media',
                intentosEntrega: 0,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV017',
                destinatario: 'Andrés Molina',
                ciudadDestino: 'Madrid',
                estado: 'Entregado',
                prioridad: 'Urgente',
                repartidor: 'Juan Pérez',
                intentosEntrega: 1,
                notasRuta: ['asegurado']
            },
            {
                trackingCode: 'ENV018',
                destinatario: 'Patricia Vega',
                ciudadDestino: 'Barcelona',
                estado: 'Incidencia',
                prioridad: 'Alta',
                repartidor: 'Pedro López',
                intentosEntrega: 3,
                notasRuta: ['fragil']
            },
            {
                trackingCode: 'ENV019',
                destinatario: 'Miguel Santos',
                ciudadDestino: 'Valencia',
                estado: 'En Reparto',
                prioridad: 'Baja',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 0,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV020',
                destinatario: 'Nuria Blanco',
                ciudadDestino: 'Madrid',
                estado: 'En Almacén',
                prioridad: 'Urgente',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV021',
                destinatario: 'Fernando Gil',
                ciudadDestino: 'Barcelona',
                estado: 'Entregado',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 2,
                notasRuta: []
            },
            {
                trackingCode: 'ENV022',
                destinatario: 'Beatriz León',
                ciudadDestino: 'Valencia',
                estado: 'Incidencia',
                prioridad: 'Baja',
                repartidor: 'Pedro López',
                intentosEntrega: 3,
                notasRuta: ['revisar']
            },
            {
                trackingCode: 'ENV023',
                destinatario: 'Óscar Herrera',
                ciudadDestino: 'Madrid',
                estado: 'En Reparto',
                prioridad: 'Alta',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 1,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV024',
                destinatario: 'Silvia Peña',
                ciudadDestino: 'Barcelona',
                estado: 'En Almacén',
                prioridad: 'Urgente',
                intentosEntrega: 0,
                notasRuta: ['prioritario']
            },
            {
                trackingCode: 'ENV025',
                destinatario: 'Adrián Flores',
                ciudadDestino: 'Valencia',
                estado: 'Entregado',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 1,
                notasRuta: ['asegurado']
            },

            // ENVÍOS 26-35
            {
                trackingCode: 'ENV026',
                destinatario: 'Teresa Ramos',
                ciudadDestino: 'Madrid',
                estado: 'Incidencia',
                prioridad: 'Alta',
                intentosEntrega: 2,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV027',
                destinatario: 'Roberto Iglesias',
                ciudadDestino: 'Barcelona',
                estado: 'En Reparto',
                prioridad: 'Baja',
                repartidor: 'Pedro López',
                intentosEntrega: 0,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV028',
                destinatario: 'Alicia Cabrera',
                ciudadDestino: 'Valencia',
                estado: 'En Almacén',
                prioridad: 'Urgente',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV029',
                destinatario: 'Manuel Fuentes',
                ciudadDestino: 'Madrid',
                estado: 'Entregado',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 1,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV030',
                destinatario: 'Cristina Vidal',
                ciudadDestino: 'Barcelona',
                estado: 'Incidencia',
                prioridad: 'Urgente',
                intentosEntrega: 3,
                notasRuta: ['fragil']
            },
            {
                trackingCode: 'ENV031',
                destinatario: 'Rubén Méndez',
                ciudadDestino: 'Valencia',
                estado: 'En Reparto',
                prioridad: 'Alta',
                repartidor: 'Pedro López',
                intentosEntrega: 1,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV032',
                destinatario: 'Eva Aguilar',
                ciudadDestino: 'Madrid',
                estado: 'En Almacén',
                prioridad: 'Baja',
                intentosEntrega: 0,
                notasRuta: []
            },
            {
                trackingCode: 'ENV033',
                destinatario: 'Jorge Pascual',
                ciudadDestino: 'Barcelona',
                estado: 'Entregado',
                prioridad: 'Urgente',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 2,
                notasRuta: ['asegurado']
            },
            {
                trackingCode: 'ENV034',
                destinatario: 'Rosa Benítez',
                ciudadDestino: 'Valencia',
                estado: 'Incidencia',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 3,
                notasRuta: ['revisar']
            },
            {
                trackingCode: 'ENV035',
                destinatario: 'Ignacio Marín',
                ciudadDestino: 'Madrid',
                estado: 'En Reparto',
                prioridad: 'Alta',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },

            // ENVÍOS 36-45
            {
                trackingCode: 'ENV036',
                destinatario: 'Andrea Campos',
                ciudadDestino: 'Barcelona',
                estado: 'En Almacén',
                prioridad: 'Urgente',
                repartidor: 'Pedro López',
                intentosEntrega: 0,
                notasRuta: ['prioritario']
            },
            {
                trackingCode: 'ENV037',
                destinatario: 'Víctor Reyes',
                ciudadDestino: 'Valencia',
                estado: 'Entregado',
                prioridad: 'Baja',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 1,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV038',
                destinatario: 'Mónica Rivas',
                ciudadDestino: 'Madrid',
                estado: 'Incidencia',
                prioridad: 'Alta',
                intentosEntrega: 3,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV039',
                destinatario: 'Eduardo Cortés',
                ciudadDestino: 'Barcelona',
                estado: 'En Reparto',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 1,
                notasRuta: ['asegurado']
            },
            {
                trackingCode: 'ENV040',
                destinatario: 'Paula Esteban',
                ciudadDestino: 'Valencia',
                estado: 'En Almacén',
                prioridad: 'Urgente',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV041',
                destinatario: 'Héctor Núñez',
                ciudadDestino: 'Madrid',
                estado: 'Entregado',
                prioridad: 'Alta',
                repartidor: 'Pedro López',
                intentosEntrega: 2,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV042',
                destinatario: 'Sonia Lozano',
                ciudadDestino: 'Barcelona',
                estado: 'Incidencia',
                prioridad: 'Baja',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 3,
                notasRuta: ['revisar']
            },
            {
                trackingCode: 'ENV043',
                destinatario: 'Alejandro Peña',
                ciudadDestino: 'Valencia',
                estado: 'En Reparto',
                prioridad: 'Urgente',
                repartidor: 'Juan Pérez',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV044',
                destinatario: 'Claudia Soler',
                ciudadDestino: 'Madrid',
                estado: 'En Almacén',
                prioridad: 'Media',
                intentosEntrega: 0,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV045',
                destinatario: 'Mario Calvo',
                ciudadDestino: 'Barcelona',
                estado: 'Entregado',
                prioridad: 'Urgente',
                repartidor: 'Pedro López',
                intentosEntrega: 1,
                notasRuta: ['fragil', 'asegurado']
            },

            // ENVÍOS 46-50
            {
                trackingCode: 'ENV046',
                destinatario: 'Natalia Serrano',
                ciudadDestino: 'Valencia',
                estado: 'Incidencia',
                prioridad: 'Alta',
                intentosEntrega: 2,
                notasRuta: ['revisar']
            },
            {
                trackingCode: 'ENV047',
                destinatario: 'Gabriel Pardo',
                ciudadDestino: 'Madrid',
                estado: 'En Reparto',
                prioridad: 'Baja',
                repartidor: 'Carlos Díaz',
                intentosEntrega: 0,
                notasRuta: ['normal']
            },
            {
                trackingCode: 'ENV048',
                destinatario: 'Inés Rubio',
                ciudadDestino: 'Barcelona',
                estado: 'En Almacén',
                prioridad: 'Urgente',
                intentosEntrega: 0,
                notasRuta: ['fragil', 'asegurado']
            },
            {
                trackingCode: 'ENV049',
                destinatario: 'Samuel Cano',
                ciudadDestino: 'Valencia',
                estado: 'Entregado',
                prioridad: 'Media',
                repartidor: 'Juan Pérez',
                intentosEntrega: 1,
                notasRuta: ['asegurado']
            },
            {
                trackingCode: 'ENV050',
                destinatario: 'Julia Medina',
                ciudadDestino: 'Madrid',
                estado: 'Incidencia',
                prioridad: 'Urgente',
                repartidor: 'Pedro López',
                intentosEntrega: 3,
                notasRuta: ['fragil', 'asegurado']
            }
]