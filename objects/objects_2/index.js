const band = {
  name: 'Anathema',
  nationality: 'English',
  members: 6,
  formed: 1990,
  split: false,
  albums: [
    {
      name: 'Weather Systems',
      released: 2012,
    },
    {
      name: 'Distant Satellites',
      released: 2014,
    }
  ],
  bandInfo() {
    return `${this.name} Anathema were an ${this.nationality} rock band from Liverpool.
    The group was formed in ${this.formed} by Vincent and Daniel Cavanagh, bassist Jamie Cavanagh, drummer/keyboardist John Douglas, and vocalist Darren White.
    The band maintained an active concert schedule throughout their career`;
  }
};

const section = document.querySelector('section');
const p = document.createElement('p');
p.textContent = band.bandInfo();
section.appendChild(p);
