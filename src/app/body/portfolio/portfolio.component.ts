import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  Images = [
    {
      banner: 'assets/img/divisas.129e8e61.jpg',
      pdfOrLink: 'https://aisakk.github.io/ConvertDivisa/',
      type: 'filter-web',
      text: 'ConvertDivisa'
    },
    {
      banner: 'assets/img/petroleo.4da21717.jpeg',
      pdfOrLink: 'assets/img/pdfportfolio/Inteve.41fcb78d.pdf',
      type: 'filter-web',
      text: 'SIGESDOC'
    },
    {
      banner: 'assets/img/oasis.b7a10bdf.png',
      pdfOrLink: 'assets/img/pdfportfolio/Pantallas.23c4b88f.pdf',
      type: 'filter-app',
    },
    {
      banner: 'assets/img/ideasbox.png',
      pdfOrLink: 'assets/img/pdfportfolio/ideasbox.pdf',
      text: 'ideasbox',
      type: 'filter-web',
    },
    {
      banner: 'assets/img/figma.png',
      pdfOrLink: 'https://www.figma.com/file/Z1ud2u9O4WygrR73o8Tdku/Portfolio?node-id=0%3A1',
      text: 'Figma',
      type: 'filter-web',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
