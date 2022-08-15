import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre-seats',
  templateUrl: './theatre-seats.component.html',
  styleUrls: ['./theatre-seats.component.scss'],
})
export class TheatreSeatsComponent implements OnInit {
  totalSeats: any = 0;
  totalPrice: any = 0;

  constructor() {}

  ngOnInit(): void {
    this.findSeatsCalculateTotal();
  }

  findSeatsCalculateTotal() {
    const container = document.querySelector('.container');
    let ticketPrice = 250;

    container.addEventListener('click', (e) => {
      const target = e.target as Element;
      if (
        target.classList.contains('seat') &&
        !target.classList.contains('occupied')
      ) {
        target.classList.toggle('selected');
      }
      const selectedSeats = document.querySelectorAll('.row .seat.selected');
      const selectedSeatsCount = selectedSeats.length;
      this.totalSeats = '' + selectedSeatsCount;
      const totalPrice = selectedSeatsCount * ticketPrice;
      this.totalPrice = '' + totalPrice;
    });
  }
}
