export class Content{
  private readonly content: string

  constructor(content: string) {
    const isContentLenghtValid = this.validateContentLenght(content)

    if(!isContentLenghtValid){
      throw new Error('Content Lenght error.')
    }
    this.content = content
  }

  get value(): string{
    return this.content
  }

  private validateContentLenght(content: string): boolean{
    return content.length >= 5 && content.length <= 240
  }
}