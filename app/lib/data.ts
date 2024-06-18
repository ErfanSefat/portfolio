// import { sql } from "@vercel/postgres";
// import { Project } from "./definitions";
// const data = await sql<LatestInvoiceRaw>`
//   SELECT invoices.amount, customers.name, customers.image_url, customers.email
//   FROM invoices
//   JOIN customers ON invoices.customer_id = customers.id
//   ORDER BY invoices.date DESC
//   LIMIT 5`;
