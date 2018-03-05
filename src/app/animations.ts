import { trigger, style, transition, animate, keyframes, query, stagger,
  group, state, animateChild } from '@angular/animations';

export const easeInOut =
  trigger('easeInOut', [
    transition(':enter', [
      style({
        opacity: 0,
        right: '-15rem',
        transform: 'skewX(-12deg)'
      }),
      animate('0.5s ease-in-out', style({
        opacity: 1,
        right: '0rem',
        transform: 'skewX(0)'
      }))
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        right: '0rem',
        transform: 'skewX(0)'
      }),
      animate('0.5s ease-in-out', style({
        opacity: 0,
        right: '-15rem',
        transform: 'skewX(-12deg)'
      }))
    ])
  ]);
export const expandCard =
  trigger('expandCard', [
    transition(':enter', [
      style({
        opacity: 0,
        right: '-15rem',
        transform: 'skewX(-12deg)'
      }),
      animate('0.5s ease-in-out', style({
        opacity: 1,
        right: '0rem',
        transform: 'skewX(0)'
      }))
    ]),
    transition(':leave', [
      style({
        opacity: 1,
        display: 'none',
      }),
      animate('.1s ease-in-out', style({
        opacity: 0,
        display: 'none'
      }))
    ])
  ]);
export const itemAnimTrigger =
  trigger('itemAnim', [
    state('default', style({
      background: 'yellow',
      height: '10rem'
    })),
    state('clicked', style({
      background: 'pink',
      height: '15rem'
    })),
    transition('void <=> *', animate('400ms 1000ms ease-in'))
  ]);
export const btnAnimConfirmTrigger = trigger('btnAnimConfirm', [
  state('default', style({
    backgroundColor: 'yellow',
  })),
  state('clicked', style({
    backgroundColor: 'pink',
  })),
  transition('default <=> clicked', animate('0.8s 0.2s ease-in', keyframes([
    style({ background: 'red' }),
    style({ background: 'black' }),
  ])))
]);

export const ngIfShowCard = trigger('ngIfShowCard', [
  transition('void => *', [
    query('*', style({ opacity: 0, transform: 'scaleY(0.9)' }), { optional: true }),
    query('*', animate('0.3s ease-in', style({ opacity: 1, transform: 'scaleY(1.0)' }),
    ), { optional: true }),
  ]),
  transition('* => void', [
    query('*', style({ opacity: 1, transform: 'scaleY(1.0)' }), { optional: true }),
    query('*', animate('0.2s ease-in', keyframes([
      style({ opacity: 1, transform: 'scaleY(1.01)' }),
      style({ opacity: 0, transform: 'scaleY(0.9)' }),
    ])), { optional: true }),
  ]),
]);
