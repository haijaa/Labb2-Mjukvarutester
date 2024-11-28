import cors from "cors";
import * as dotenv from "dotenv";
import { Client } from "pg";
import express, { Request, Response } from "express";
import {
  deleteMagazine,
  getMagazines,
  postMagazine,
  publisher,
} from "./interface/queryInterfaces";

dotenv.config();

const port: number = 3000;

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();

app.use(cors(), express.json());

app.get("/api/magazines", async (_request: Request, response: Response) => {
  const { rows } = await client.query<getMagazines>(
    "SELECT magazines.id, magazines.title, magazines.description, magazines.image, magazines.character, publisher.name AS publisher_name FROM magazines JOIN publisher ON publisher.id = publisherid"
  );
  response.send(rows);
});

app.get(
  "/api/magazines/marvel",
  async (_request: Request, response: Response) => {
    const { rows } = await client.query<getMagazines>(
      "SELECT magazines.title, magazines.description, magazines.image, magazines.character, publisher.name AS publisher_name FROM magazines JOIN publisher ON publisher.id = publisherid WHERE publisher.id = 1"
    );
    response.send(rows);
  }
);

app.get("/api/magazines/dc", async (_request: Request, response: Response) => {
  const { rows } = await client.query<getMagazines>(
    "SELECT magazines.title, magazines.description, magazines.image, magazines.character, publisher.name AS publisher_name FROM magazines JOIN publisher ON publisher.id = publisherid WHERE publisher.id = 2"
  );
  response.send(rows);
});

app.post("/api/magazines/post", async (req: Request, res: Response) => {
  const { title, description, image, character, publisherid } =
    req.body as postMagazine;

  try {
    const { rows } = await client.query<postMagazine>(
      "INSERT INTO magazines (title, description, image, character, publisherid) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [title, description, image, character, publisherid]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Fel här", error);
    res.status(500).send("Fel vid server");
  }
});

app.delete('/api/magazines/delete', async (req:Request, res: Response) => {
  const { id } = req.body as deleteMagazine;
  try {
    const { rows } = await client.query<deleteMagazine> (
      'DELETE FROM magazines WHERE id = $1',
      [id]
    )
    res.status(200).json(`Tidning ${id} är borttagen`)
  } catch (error) {
    res.status(500).json('Fel vid server.')
  }
})

app.get(
  "/api/publisher",
  async (_request: Request, response: Response<publisher[]>) => {
    const { rows } = await client.query<publisher>("SELECT * FROM publisher");
    response.send(rows);
  }
);

app.listen(port, () => {
  console.log(`Backend är nu igång på ${port}`);
});
