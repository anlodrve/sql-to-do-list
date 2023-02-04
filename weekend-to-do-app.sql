CREATE TABLE "tasks" (
  "id" serial primary key,
  "title" varchar(50) not null,
  "details" varchar(150),
  "due_date" date not null,
  "complete" boolean
);


INSERT INTO tasks (title, details, due_date, complete)
VALUES ('Buy stamps', 'Could stop by the post office on the way home', '2-10-23', 'N'), ('Fold and put away laundry', 'two baskets by the dryer', '2-9-23', 'N'), ('Make cake for DJs birthday', 'Coconut cake with buttercream frosting', '2-17-23', 'N'), ('Buy groceries', 'eggs, flour, oat milk, coconut, avocados, bananas, bread, hummus', '2-9-23', 'N'), ('Invent new reneable energy source', 'something that uses cat fur?', '2-28-23', 'N'), ('Put gas in the car', 'the station on Lyndale on the way to the hardware store', '2-12-23', 'N'), ('Organize tupperware', 'lids on or lids in another container???', '2-18-23', 'N'); 