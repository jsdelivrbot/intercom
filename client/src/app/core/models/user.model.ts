/* User can be either admin or visitor */

export interface IUser {
  id: string;
  alias: string;
  avatarColor: string;
}

export class User implements IUser {
  id: string;
  alias: string;
  avatarColor: string;

  constructor(id, alias?) {
    this.id = id;
    this.alias = alias || this.getRandomName();
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
