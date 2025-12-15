import { z } from 'zod'

// Schema para validar dados de vazamento
export const dataLeakSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, "Nome é obrigatório"),
  logo: z.string().url("Logo deve ser uma URL válida"),
  date: z.string().datetime(),
  records: z.number().int().positive(),
  severity: z.enum(["low", "medium", "high", "critical"]),
  description: z.string().optional(),
})

// Schema para lista de vazamentos
export const dataLeaksListSchema = z.array(dataLeakSchema)

// Tipo TypeScript inferido do schema
export type DataLeak = z.infer<typeof dataLeakSchema>
export type DataLeaksList = z.infer<typeof dataLeaksListSchema>







