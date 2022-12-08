import { Schema } from "mongoose";

export interface JobAttributes {
  _id?: Schema.Types.ObjectId;
  id?: Schema.Types.ObjectId;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  salary: number;
  // technologies: Schema.Types.ObjectId[];
  technologies: string;
}
