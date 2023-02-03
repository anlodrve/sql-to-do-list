CREATE TABLE "tasks" (
  "id" serial primary key,
  "title" varchar(50) not null,
  "details" varchar(150),
  "due_date" date not null,
  "complete" boolean
);

