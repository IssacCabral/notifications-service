import { Content } from "./content"

describe('Notification content', () => {
  it('should create a new content if a valid content lenght is provided', () => {
    const content = new Content('valid_content')
    expect(content).toBeTruthy()
  })

  it('should throw if try create a new content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow()
  })

  it('should throw if try create a new content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow()
  })
})