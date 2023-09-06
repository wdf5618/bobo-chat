let d;

d = new Date();

d = d.toString();

d = new Date(2023, 6, 10);

d = new Date('2023-07-07');
d = new Date('2023-07-10T12:30:00');
d = new Date('07/10/2023 12:10:33');
d = new Date('2023-07-10');
d = new Date('07-10-2023');

d = Date.now();

d = new Date('07-10-2023 12:10:00');

d = new Date();

d = d.getTime();

d = d.valueOf();

d = new Date(1693581737546);

d = Math.floor(Date.now() / 1000);


console.log(d, typeof d);