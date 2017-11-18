export interface IVisitor {
  id: string;
  alias: string;
  avatarColor: string;
}

export class Visitor {
  id: string;
  alias: string;
  avatarColor: string;

  constructor(id) {
    this.id = id;
    this.alias = this.getRandomName();
    this.avatarColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  }

  getRandomName(): string {
    const adjectives = ['Bouncing', 'Exuberant', 'Formidable', 'Blue', 'Happy', 'Amazing', 'Boring', 'Squishy'];
    const nouns = ['Balloon', 'Hat', 'Giraffe', 'Leopard', 'Axe', 'Acrobat', 'Gorilla'];

    const adjIdx = Math.floor(Math.random() * adjectives.length);
    const nounIdx = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjIdx]} ${nouns[nounIdx]}`;
  }
}
