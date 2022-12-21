import { Content } from "./content"

describe('Content', () => {
  test('Should create a new content if a valid content lenght is provided', () => {
    const content = new Content('valid_content')
    expect(content).toBeTruthy()
  })

  test('Should throw if try create a new content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow()
  })

  test('Should throw if try create a new content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow()
  })
})