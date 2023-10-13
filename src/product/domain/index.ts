import z from 'zod'

const productSchema = z.object({
  id: z.number().positive(),
  title: z.string(),
  description: z.string(),
  price: z.number().positive().int(),
  discountPercentage: z.number().positive(),
  rating: z.number().positive().max(5.0).min(0.0),
  stock: z.number().int().positive(),
  brand: z.string(),
  category: z.string(),
  thumbnail: z.string().url(),
  images: z.array(z.string().url())
})

export type Product = z.infer<typeof productSchema>

export function validateProduct(product: unknown): product is Product {
  return productSchema.safeParse(product).success
}

export function validateProducts(products: unknown): products is Product[] {
  return z.array(productSchema).safeParse(products).success
}
