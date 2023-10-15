import { productRepo } from '../src/product/infrastructure/json-repo/index.ts'

const TEST_TITLE = 'iPhone 9'
const TEST_DESCRIPTION =
  'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...'
const TEST_CATEGORY = 'smartphones'

describe('json-repo', () => {
  test('should return items matching title', async () => {
    const result = await productRepo.search({ q: TEST_TITLE })
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.stringContaining(TEST_TITLE)
        })
      ])
    )
  })

  test('should return items matching description', async () => {
    const result = await productRepo.search({ q: TEST_DESCRIPTION })
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          description: expect.stringContaining(TEST_DESCRIPTION)
        })
      ])
    )
  })

  test('should return items matching category', async () => {
    const result = await productRepo.search({ q: TEST_CATEGORY })
    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          category: expect.stringContaining(TEST_CATEGORY)
        })
      ])
    )
  })
})
